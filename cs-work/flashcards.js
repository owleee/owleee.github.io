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

/*const IMAGES = [
  "https://studysmarter-mediafiles.s3.amazonaws.com/media/1865576/summary_images/image_rpdZz1Y.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OLDUDE42UZHAIET%2F20221211%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20221211T171842Z&X-Amz-Expires=90000&X-Amz-SignedHeaders=host&X-Amz-Signature=b26ce6d46da9df8451f8ad8404f1108e9b670ee1681499f9ee2d1bb029038c86",
  "https://churchinwales.contentfiles.net/media/images/Wedding_faith_1200x800.width-1200.jpg",
  "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/06/web3-beautiful-catholic-church-altar-floor-pews-shutterstock.jpg",
  "https://cdn.britannica.com/88/129488-131-09AB5E83/Internet-blue-screen-blog-society-history-media-2009.jpg",
  "https://c.files.bbci.co.uk/15BD7/production/_115374098_social_media_logos.jpg",
  "https://www.ineedamobile.com/wp-content/uploads/2018/04/Refurbished-Mobile-Phones.png",
  "https://ohsonline.com/-/media/OHS/OHS/Images/2020/03/InternationalWomensDay.jpg",
  "https://www.philosophytalk.org/sites/default/files/lindsey-lamont-hUWINRMPvsc-unsplash.jpg",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/11F7C/production/_125669537_gettyimages-1241576590.jpg",
  "https://i0.wp.com/indiepulsemusic.com/wp-content/uploads/2020/06/2ffd0ae4-4d21-4aef-9186-de97ca38af0c.jpg?fit=800%2C446&ssl=1",
  "https://www.businessmagazine.org/wp-content/uploads/2022/01/best-movies-1614634680.jpg",
  "https://images.squarespace-cdn.com/content/v1/525809c9e4b0ab36b916f147/26fb228f-01c3-486d-9313-9b8e658b12c9/shutterstock_501610096.jpg",
  "https://images.ctfassets.net/qr8kennq1pom/4TjPbm6Y5rySpa99EKcbwP/351a0e3812fe3804367e0c574a96678b/Spain_culture_and_traditions.jpg?fm=jpg&fl=progressive&q=70",
  "https://cdn.cnn.com/cnnnext/dam/assets/160929095729-essential-spanish-dish-fideua-brindisa-full-169.jpg",
  "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/647427-gettyimages-493796667-8cc398258cea687f6c803c6d88beb66d.jpg"
];*/

const COLOURS = {
  RED: "#ad1519",
  YELLOW: "#fabd00",
  GREY: "#444",
  DARK_GREY: "#222"
};

var topicsEnabled = TOPICS.map(() => {
  return true;
});

TOPICS.forEach((v, i) => {
  $("#topics-content").innerHTML += `<div class="topic">
  <input type=checkbox id='${i}' name='${i}' class=topic-checkbox checked=${topicsEnabled[i]}>
  <label for="${i}">${v}</label>
</div>`;
});

const shuffle = (a) => {
  a.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

let settings = {
  flip: false,
  shuffle: false
};

const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
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

var data = generateData();

const slideOut = (a) => {
  // -1: left, 1: right
  let a2 = (Math.sign(a) + 1) / 2;
  if (a === 0) a2 = 1;

  document.getElementsByClassName(
    "card"
  )[0].style.animation = `0.1s slide-out-${["left", "right"][a2]}`;
  $(".card")[0].style.left = `${a * 120}%`;
};

$("#total-number").innerText = `/${data.length}`;
$("#number-input").value = 1;
$("#number-input").max = data.length;

var n = 1;

const updateCard = () => {
  $(".front-content")[0].innerText = data[n - 1][0];

  $(".back-content")[0].innerText = data[n - 1][1];

  $("#total-number").innerText = `/${data.length}`;
  $("#number-input").max = data.length;
  $("#number-input").value = n;

  //$(".main")[0].style["background-image"] = `url(${IMAGES[data[n - 1][2]]})`;
};

document.addEventListener("animationend", (e) => {
  if (e.animationName === "slide-out-left") {
    updateCard();
    $(".card")[0].style.animation = "0.1s slide-in-from-left";
    $(".card")[0].style.left = 0;
  } else if (e.animationName === "slide-out-right") {
    updateCard();
    $(".card")[0].style.animation = "0.1s slide-in-from-right";
    $(".card")[0].style.left = 0;
  }
});

$("#settings-randomise").addEventListener("click", () => {
  let s = $("#settings-randomise");
  settings.shuffle = settings.shuffle ? false : true;
  s.style["background-color"] = settings.shuffle ? COLOURS.RED : "";

  data = generateData();
  changeCard(1 - n);
  saveCookies();
});

var topicsChanged = false;
var inputFocused = false;

$("#number-input").addEventListener("focus", () => {
  inputFocused = true;
});

$("#number-input").addEventListener("focusout", () => {
  inputFocused = false;
});

$("#settings-language").addEventListener("click", () => {
  flip();

  settings.flip = settings.flip ? false : true;
  document.getElementsByClassName(
    "flip-card-front"
  )[0].transition = document.getElementsByClassName(
    "flip-card-back"
  )[0].style.transition = "1s";

  updateOptions();
  saveCookies();
});

$("#select-topics").addEventListener("click", () => {
  let menu = $("#topics");
  menu.style.left = menu.style.left === "0px" ? "-700px" : "0px";
  /*document.body.style.filter =
    document.body.style.filter === "blur(8px)" ? "" : "blur(8px)";
  menu.style.filter = "blur(0px)";*/
});

const getTopics = () => {
  let checks = Array.from($(".topic-checkbox"));
  return checks.map((v) => {
    return v.checked;
  });
};

Array.from($(".topic-checkbox")).forEach((v) => {
  v.onchange = () => {
    saveCookies();
    topicsEnabled = getTopics();
    if (topicsEnabled.indexOf(true) === topicsEnabled.lastIndexOf(true)) {
      document.getElementById(`${topicsEnabled.indexOf(true)}`).disabled = true;
    } else {
      Array.from($(".topic-checkbox")).forEach((v) => {
        v.disabled = false;
      });
    }
    topicsChanged = true;
  };
});

const updateOptions = () => {
  $("#settings-language").style["background-color"] = settings.flip
    ? COLOURS.RED
    : "";
  $("#settings-randomise").style["background-color"] = settings.shuffle
    ? COLOURS.RED
    : "";

  let front = $(".flip-card-front")[0];
  let back = $(".flip-card-back")[0];

  if (settings.flip) {
    $(".flip-card-inner")[0].style.transform = "rotateX(180deg)";
    back.style["background-color"] = COLOURS.GREY;

    front.style["background-color"] = COLOURS.YELLOW;
  } else {
    $(".flip-card-inner")[0].style.transform = "";
    front.style["background-color"] = COLOURS.GREY;

    back.style["background-color"] = COLOURS.YELLOW;
  }
  if (settings.shuffle) data = generateData();
  Array.from($(".topic-checkbox")).forEach((v, i) => {
    v.checked = topicsEnabled[i];
  });
  document.getElementsByClassName(
    "flip-card-inner"
  )[0].style.transform = settings.flip ? "rotateX(180deg)" : "";
};

const changeCard = (a) => {
  // -1: left, 1: right
  document.getElementsByClassName(
    "flip-card-inner"
  )[0].style.transform = settings.flip ? "rotateX(180deg)" : "";
  n += a;
  if (n < 1) {
    n = data.length;
  } else if (n > data.length) {
    n = 1;
  }
  slideOut(a);
};

const flip = () => {
  let card = $(".flip-card-inner")[0];
  card.style.transition = "transform 0.4s";
  if (card.style.transform === "rotateX(180deg)") {
    card.style.transform = "";
  } else {
    card.style.transform = "rotateX(180deg)";
  }
};

$("#left-button").addEventListener("click", () => {
  closeMenu();
  changeCard(-1);
});
$("#right-button").addEventListener("click", () => {
  closeMenu();
  changeCard(1);
});

document
  .getElementsByClassName("flip-card")[0]
  .addEventListener("click", () => {
    flip();
    closeMenu();
  });

document.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes($("#select-topics")) &&
    !e.composedPath().includes($("#topics"))
  ) {
    closeMenu();
  }
});

$("#number-input").onchange = (e) => {
  let inp = $("#number-input");
  if (inp.value > data.length) inp.value = data.length;
  if (inp.value < 1) inp.value = 1;
  n = parseInt(inp.value, 10);
  slideOut(0);
};

const closeMenu = () => {
  if (topicsChanged) {
    data = generateData();
    changeCard(1 - n);
    topicsChanged = false;
  }
  $("#topics").style.left = "-700px";
};

const saveCookies = () => {
  setCookie("shuffle", settings.shuffle);
  setCookie("flip", settings.flip);
  setCookie("topics", JSON.stringify(topicsEnabled));
};

const loadCookies = () => {
  try {
    settings.flip = getCookie("flip") === "true";
    settings.shuffle = getCookie("shuffle") === "true";
    topicsEnabled = JSON.parse(getCookie("topics"));
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
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) == 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return "";
};

document.addEventListener("keydown", (e) => {
  if (inputFocused) return;
  if (e.code === "ArrowLeft") {
    changeCard(-1);
    closeMenu();
  } else if (e.code === "ArrowRight") {
    changeCard(1);
    closeMenu();
  } else if (e.code === "Space") {
    flip();
    closeMenu();
  }
});
loadCookies();
updateOptions();
updateCard();
