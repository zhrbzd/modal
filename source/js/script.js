let $ = document

const button = $.querySelector('button')
const modalParent = $.querySelector('.modal-parent')
const x = $.querySelector('.X')
const sectionElem = $.querySelector('section')


function showModal() {
    modalParent.style.display = 'block'
    sectionElem.style.filter = 'blur(10px)'
    button.blur()
}

function hideModalWithX() {
    modalParent.style.display = 'none'
    sectionElem.style.filter = 'blur(0px)'
}

function hideModalWithEsc(event) {
    if (event.keyCode === 27) {
        modalParent.style.display = 'none'
        sectionElem.style.filter = 'blur(0px)'
    }
}


button.addEventListener('click', showModal)
x.addEventListener('click', hideModalWithX)
document.body.addEventListener('keyup', hideModalWithEsc)


const form = document.getElementById("multi-page-form");
const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
const nextPage1Button = document.getElementById("next-page-1");
const nextPage2Button = document.getElementById("next-page-2");
const prevPage2Button = document.getElementById("prev-page-2");
const prevPage3Button = document.getElementById("prev-page-3");

nextPage1Button.addEventListener("click", (event) => {
  event.preventDefault();
  page1.style.display = "none";
  page2.style.display = "flex";
  page2.style.flexDirection = "column";
});

nextPage2Button.addEventListener("click", (event) => {
    event.preventDefault();
    page2.style.display = "none";
    page3.style.display = "flex";
    page3.style.flexDirection = "column";
});

prevPage2Button.addEventListener("click", (event) => {
    event.preventDefault();
    page2.style.display = "none";
    page1.style.display = "flex";
    page1.style.flexDirection = "column";
  });

prevPage3Button.addEventListener("click", (event) => {
    event.preventDefault();
    page3.style.display = "none";
    page2.style.display = "flex";
    page2.style.flexDirection = "column";
  });