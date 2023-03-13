const formOne = document.querySelector("#form_one")
const formTwo = document.querySelector("#form_two")
const formThree = document.querySelector("#form_three")
const step_one = document.querySelector("#step-one")
const step_two = document.querySelector("#step-two")
const show_btn = document.querySelector("#show")
show_btn.addEventListener("click", e => {
    formOne.style.display = "block";
})
function next(){
    step_one.addEventListener("click", e => {
        formOne.style.display = "none"
        formTwo.style.display = "block"
    })
}

function two_step(){
    formTwo.style.display = "none"
    formThree.style.display = "block"
}