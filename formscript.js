const form = document.querySelector("form")
const select = document.getElementById("temat")
const textinput = form.querySelector("textarea")
const textarea = document.getElementById("textarea")
const emailinput = form.querySelector("input[name=email]")

const placeholders={
    prayer:"Panie Boże Imperatorze"
}

select.addEventListener("click",e=>{
    textarea.setAttribute("placeholder",select.value)
})