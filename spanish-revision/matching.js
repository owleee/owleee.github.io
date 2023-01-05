import DATA from "./data.js";

const $ = (name) => {
  if (name[0] === "#") {
    return document.getElementById(name.replaceAll("#", ""));
  } else if (name[0] === ".") {
    return document.getElementsByClassName(name.replaceAll(".", ""));
  }
};

const TOPICS = [
  "1.1 Los Cambios en la Familia",
  "1.2 Actitudes Hacia el Matrimonio y Divorcio",
  "1.3 La Influencia de la Iglesia Católica",
  "2.1 La Influencia de Internet",
  "2.2 Las Redes Sociales: Beneficio y Peligros",
  "2.3 Los Móviles Inteligentes en Nuestra Sociedad",
  "3.1 La Mujer en el Mercado Laboral",
  "3.2 El Machismo y el Feminismo",
  "3.3 Los Derechos de los gays y las personas trans",
  "4.1 Cantantes y Músicos",
  "4.2 Estrellas de Televisión y Cine",
  "4.3 Modelos",
  "5.1 Tradiciones y Costumbres",
  "5.2 La Gastronomía",
  "5.3 Las Lenguas"
];

var data;
var n = 0;

var topicsEnabled = TOPICS.map(() => {
  return true;
});

const COLOURS = {
  RED: "#ad1519",
  YELLOW: "#fabd00",
  GREY: "#444",
  DARK_GREY: "#222"
};

TOPICS.forEach((v, i) => {
  $("#topics-content").innerHTML += `<div class="topic">
  <input type=checkbox id='${i}' name='${i}' class=topic-checkbox checked=${topicsEnabled[i]}>
  <label for="${i}">${v}</label>
</div>`;
});

const randint = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

var settings = {
  shuffle: false
};

const generateData = () => {
  let data = [];

  DATA.forEach((v, i) => {
    if (topicsEnabled[i]) {
      Object.keys(v).forEach((j) => {
        data.push([j, v[j], i]);
      });
    }
  });
  if (settings.shuffle) shuffle(data);
  return removeDuplicates(data);
};

const shuffle = (a) => {
  a.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

$("#topics").style.left = "-700px";

const closeMenu = () => {
  if ($("#topics").style.left !== "-700px") {
    $("#topics").style.left = "-700px";
    data = generateData();
    saveCookies();
    reset();
  }
};

$("#select-topics").addEventListener("click", () => {
  let menu = $("#topics");
  menu.style.left = menu.style.left === "0px" ? "-700px" : "0px";
  /*document.body.style.filter =
    document.body.style.filter === "blur(8px)" ? "" : "blur(8px)";
  menu.style.filter = "blur(0px)";*/
});

$("#settings-randomise").addEventListener("click", () => {
  let s = $("#settings-randomise");
  settings.shuffle = settings.shuffle ? false : true;
  s.style["background-color"] = settings.shuffle ? COLOURS.RED : "";

  data = generateData();
  saveCookies();
  reset();
  saveCookies();
});

document.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes($("#select-topics")) &&
    !e.composedPath().includes($("#topics"))
  ) {
    closeMenu();
  }
});

Array.from($(".topic-checkbox")).forEach((v) => {
  v.onchange = () => {
    topicsEnabled = getTopics();
    saveCookies();
    if (topicsEnabled.indexOf(true) === topicsEnabled.lastIndexOf(true)) {
      document.getElementById(`${topicsEnabled.indexOf(true)}`).disabled = true;
    } else {
      Array.from($(".topic-checkbox")).forEach((v) => {
        v.disabled = false;
      });
    }
    //topicsChanged = true;
  };
});

const getTopics = () => {
  let checks = Array.from($(".topic-checkbox"));
  return checks.map((v) => {
    return v.checked;
  });
};

const saveCookies = () => {
  setCookie("topics", JSON.stringify(topicsEnabled));
  setCookie("shuffle", settings.shuffle);
};

const loadCookies = () => {
  try {
    topicsEnabled = JSON.parse(getCookie("topics"));
    settings.shuffle = getCookie("shuffle") === "true";
    data = generateData();
  } catch {
    //Error loading or none to load
  }
};

const setCookie = (name, value, exdays = undefined) => {
  if (exdays !== undefined) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
  } else {
    document.cookie = name + "=" + value + ";";
  }
};

const getCookie = (name) => {
  let cookieName = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) === 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return "";
};

const updateOptions = () => {
  Array.from($(".topic-checkbox")).forEach((v, i) => {
    v.checked = topicsEnabled[i];
  });
  $("#settings-randomise").style["background-color"] = settings.shuffle
    ? COLOURS.RED
    : COLOURS.GREY;
};

var answers = [null, null];
var selected = [null, null];
var correct = 0;

var totalCorrect = 0;
var totalWrong = 0;

const populateWords = (number) => {
  let leftWords = [];
  let rightWords = [];

  let old_n = n;
  for (let i = old_n; i < old_n + number; i++) {
    try {
      leftWords.push([data[i][0], i]);
      rightWords.push([data[i][1], i]);
      n++;
    } catch {
      break;
    }
  }

  shuffle(leftWords);
  shuffle(rightWords);

  answers[0] = leftWords.map((v) => {
    return v[1];
  });
  answers[1] = rightWords.map((v) => {
    return v[1];
  });

  leftWords.forEach((v, i) => {
    $(
      "#left-words"
    ).innerHTML += `<div id="L${i}" class="left-word word shadow">${v[0]}</div>`;
  });
  rightWords.forEach((v, i) => {
    $(
      "#right-words"
    ).innerHTML += `<div id="R${i}" class="right-word word shadow">${v[0]}</div>`;
  });
};

loadCookies();
updateOptions();
data = generateData();

const reset = () => {
  totalCorrect = 0;
  totalWrong = 0;
  $("#card").style.animation = "0.2s disappear";
};

document.addEventListener("animationend", (e) => {
  if (e.animationName === "disappear") {
    $("#left-words").innerHTML = "";
    $("#right-words").innerHTML = "";
    $("#card").style.animation = "0.2s reappear";

    main();
  }
});

$("#card").style.height = window.getComputedStyle($(".main")[0]).height;

window.onresize = () => {
  $("#card").style.height = window.getComputedStyle($(".main")[0]).height;
};

const main = () => {
  var total = randint(7, 8);
  var correct = 0;
  populateWords(total);

  Array.from($(".left-word")).forEach((v, i) => {
    v.addEventListener("click", () => {
      if (v.classList.contains("done")) return;
      if (selected[0] === v.id[1]) {
        selected[0] = null;
      } else {
        selected[0] = v.id[1];
      }
      Array.from($(".left-word")).forEach((u, j) => {
        u.style["background-color"] =
          u.id[1] === selected[0] ? COLOURS.RED : "";
      });
    });
  });

  Array.from($(".right-word")).forEach((v) => {
    v.addEventListener("click", () => {
      if (v.classList.contains("done")) return;
      if (selected[1] === v.id[1]) {
        selected[1] = null;
      } else {
        selected[1] = v.id[1];
      }

      Array.from($(".right-word")).forEach((u) => {
        u.style["background-color"] =
          u.id[1] === selected[1] ? COLOURS.RED : "";
      });
    });
  });

  Array.from($(".word")).forEach((v, i) => {
    v.addEventListener("click", () => {
      if (selected.includes(null)) return;
      if (answers[0][selected[0]] === answers[1][selected[1]]) {
        correct++;

        $(`#L${selected[0]}`).style.animation = "0.5s fade-green";
        $(`#R${selected[1]}`).style.animation = "0.5s fade-green";

        totalCorrect++;

        $(`#L${selected[0]}`).classList.add("done");
        $(`#R${selected[1]}`).classList.add("done");

        Array.from($(".word")).forEach((u) => {
          u.style["background-color"] = "";
        });

        if (correct === total) {
          reset();
        }
      } else {
        $(`#L${selected[0]}`).style.animation = "0.5s fade-red";
        $(`#R${selected[1]}`).style.animation = "0.5s fade-red";
        totalWrong++;
      }
      selected = [null, null];
      $("#correct").innerHTML = totalCorrect;
      $("#wrong").innerHTML = totalWrong;
    });
  });

  document.addEventListener("animationend", (e) => {
    if (e.animationName === "fade-green") {
      e.path[0].style.animation = "";
    } else if (e.animationName === "fade-red") {
      e.path[0].style.animation = "";
      e.path[0].style["background-color"] = "#444";
    }
  });
};

main();
