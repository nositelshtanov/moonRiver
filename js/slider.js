windiw.addEventListener("onload", function(){

const find = (selector) => document.querySelector(selector);

const sliderWrapper = find("#slider");
const sliderRow = find("#slider__row");
const slides = sliderRow.children;
const prevBtn = find("#left");
const nextBtn = find("#right");
const gapWidth = parseInt(getComputedStyle(sliderRow).columnGap);
const visibleWidth = sliderRow.clientWidth;
const radioContainer = find("#radio-btns");
const radioBtns = [];
let position = 0;
let currentSlide = slides[0];
let index = 1;
let isSliding = false;
let oldX;
let summaryPlus = 0;
let summaryMinus = 0;

const updateRadio = () => {
    radioBtns[index - 1].checked = true;
    for (let radio of radioBtns) {
        radio.closest("label").classList.remove("checked");
    }
    radioBtns[index - 1].closest("label").classList.add("checked");

};

const nextSlide = () => {
    if (!currentSlide.nextElementSibling) return;
    addPosition(Math.floor(parseInt(currentSlide.clientWidth) / 2) + gapWidth + Math.floor(parseInt(currentSlide.nextElementSibling.clientWidth) / 2));
    currentSlide = currentSlide.nextElementSibling;
    checkBtns(currentSlide);
    index += 1;
    updateRadio();
};

const prevSlide = () => {
    if (!currentSlide.previousElementSibling) return;
    addPosition(-(Math.floor(parseInt(currentSlide.clientWidth) / 2) + gapWidth + Math.floor(parseInt(currentSlide.previousElementSibling.clientWidth) / 2)));
    currentSlide = currentSlide.previousElementSibling;
    checkBtns(currentSlide);
    index -= 1;
    updateRadio();
};

function addPosition(pos) {
    position += pos;
    sliderRow.style.transform = `translateX(${-position}px)`;
}

function checkBtns(currentElem) {
    if (!currentElem.nextElementSibling) nextBtn.disabled = true;
    else nextBtn.disabled = false;
    if (!currentElem.previousElementSibling) prevBtn.disabled = true;
    else prevBtn.disabled = false;
}

nextBtn.addEventListener('click', nextSlide);

prevBtn.addEventListener('click', prevSlide);

const changeSlide = (e) => {
    if (!isSliding) return;
    const newX = e.clientX;
    const diffrence = oldX - newX;
    if (diffrence > 0) summaryPlus += diffrence;
    if (diffrence < 0) summaryMinus += Math.abs(diffrence);
    if (summaryPlus >= 50) {
        nextSlide();
        isSliding = false;
        summaryPlus = 0;
    }
    if (summaryMinus >= 50) {
        prevSlide();
        isSliding = false;
        summaryMinus = 0;
    }
    oldX = newX;
};

sliderWrapper.addEventListener("mousedown", (e) => {
    isSliding = true;
    oldX = e.clientX;
});

sliderWrapper.addEventListener("mousemove", changeSlide);

sliderWrapper.addEventListener("mouseup", (e) => {
    isSliding = false;
});

checkBtns(currentSlide);
addPosition(-Math.round((visibleWidth - parseInt(currentSlide.clientWidth)) / 2));

for (let i = 1; i <= slides.length; i++) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    label.append(radio);
    radio.type = 'radio';
    radio.value = i;
    radio.name = 'slider';
    radio.classList.add("radio-btn");
    radio.id = `b${i}`;
    if (i == 1) radio.checked = true;
    radioBtns.push(radio);
    radioContainer.append(label);
    radio.addEventListener('click', function() {
        const currentIndex = +this.value;
        const steps = currentIndex - index;
        while (index != currentIndex) {
            if (steps > 0) nextSlide();
            if (steps < 0) prevSlide();
        }
    });
}

updateRadio();  

});