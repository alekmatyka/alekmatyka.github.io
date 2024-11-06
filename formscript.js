const form = document.querySelector("form")
const select = document.getElementById("temat")
const textinput = form.querySelector("textarea")
const textarea = document.getElementById("textarea")
const emailinput = form.querySelector("input[name=email]")

const placeholders={
    prayer:"Panie Boże Imperatorze",
    complaint:"Chciałbym się poskarżyć...",
    heresy: "Mój sąsiad zaczął zachowywać się dziwnie..."
}

textarea.setAttribute("placeholder",placeholders[select.value])

select.addEventListener("click",e=>{
    textarea.setAttribute("placeholder",placeholders[select.value])
})