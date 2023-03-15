const show_btn = document.querySelector("#show"); // declare button that shows modal
const close_btn = document.querySelector(".esc")

// close button
close_btn.addEventListener("click", e => {
    form_one.style.display = "none"
    form_two.style.display = "none"
    form_three.style.display = "none"
})

// show button settings
show_btn.addEventListener("click", e => {
    form_one.style.display = "block";
})
// step 1
const form_one = document.querySelector("#form-one"); // form 1
const go_step_two = document.querySelector("#go-step-two");
go_step_two.addEventListener("click", e => {
    e.preventDefault()
    form_one.style.display = "none";
    form_two.style.display = "block";
    show_btn.readOnly = true;
})

// step 2
const form_two = document.querySelector("#form-two"); // form 2
const go_step_three = document.querySelector("#go-step-three");
const return_step_one = document.querySelector("#return-step-one");
go_step_three.addEventListener("click", e => {
    e.preventDefault()
    form_two.style.display = "none";
    form_three.style.display = "block";
})
return_step_one.addEventListener("click", e => {
    e.preventDefault()
    form_two.style.display = "none"
    form_one.style.display = "block"
})

// step 3
const form_three = document.querySelector("#form-three") // form 3
const return_step_two = document.querySelector("#return-step-two");
return_step_two.addEventListener("click", e => {
    e.preventDefault()
    form_three.style.display = "none";
    form_two.style.display = "block";
})