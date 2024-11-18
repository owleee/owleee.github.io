document.title = `${document.getElementsByTagName("h1")[0].innerText} | Recipe Compendium`

const ingredients = document.getElementById("ingredients")
ingredients.style.display = "none"

const ingredientsList = ingredients.innerText.split("\n").map(i => {
    return i.trimStart()
}).filter(i => i !== "")

const ingredientsTitle = document.createElement("h2")
ingredientsTitle.innerText = "Ingredients"
document.body.insertBefore(ingredientsTitle, ingredients)

const ingredientsDiv = document.createElement("ul")
ingredientsDiv.id = "ingredients-generated"
document.body.insertBefore(ingredientsDiv, ingredients)

ingredientsList.forEach(i => {
    const li = document.createElement("li")
    li.innerText = i
    ingredientsDiv.appendChild(li)
})



const instructions = document.getElementById("instructions")
instructions.style.display = "none"

const instructionsList = instructions.innerText.split("\n").map(i => {
    return i.trimStart()
}).filter(i => i !== "")

const instructionsTitle = document.createElement("h2")
instructionsTitle.innerText = "Instructions"
document.body.insertBefore(instructionsTitle, instructions)

const instructionsDiv = document.createElement("ol")
instructionsDiv.id = "instructions-generated"
document.body.insertBefore(instructionsDiv, instructions)

instructionsList.forEach(i => {
    const li = document.createElement("li")
    li.innerText = i
    instructionsDiv.appendChild(li)
})

const portion = document.getElementById("portion")
portion.innerHTML = `MAKES: ${portion.innerHTML}`

const prep_time = document.getElementById("prep-time")
prep_time.innerHTML = `PREP: ${prep_time.innerHTML}`

const source = document.getElementById("source")
source.innerHTML = `SOURCE: ${source.innerHTML}`