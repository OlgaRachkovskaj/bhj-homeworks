const prev = document.querySelector(".slider__arrow_prev")
const next = document.querySelector(".slider__arrow_next")

const slider = Array.from(document.getElementsByClassName("slider__item"))
let idxActive;

next.onclick = () => {
    idxActive = slider.findIndex(item => item.className.includes("slider__item_active"))
    slider[idxActive].classList.remove("slider__item_active")
    idxActive++
    if (idxActive === slider.length - 1) {
        idxActive = 0
    }
    slider[idxActive].classList.add("slider__item_active")
}

prev.onclick = () => {
    idxActive = slider.findIndex(item => item.className.includes("slider__item_active"))
    slider[idxActive].classList.remove("slider__item_active")
    idxActive--
    if (idxActive === -1) {
        idxActive = slider.length - 1
    }
    slider[idxActive].classList.add("slider__item_active")
}
