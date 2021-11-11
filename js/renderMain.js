const mainApp = document.querySelector("#first-section__app");
const headerMenuIcon = document.querySelector("#header-menu-icon");
const firstSection = document.querySelector(".first-section");
const logo = document.querySelector('.main-header__logo img');
let count = 1;

export default function renderMain() {
    headerMenuIcon.classList.remove("activate-menu");
    const html = `<div class="first-wrapper container">
    <div class="center-ornament">
        <div class="center-ornament__text">
            <h1>HIGH JEWELRY</h1>
            <div class="center-ornament__collection">
                <div class="line"></div>
                <a href="#collection">Смотреть коллекцию</a>
            </div>
        </div>
        <div class="center-ornament__pict">
            <a href="#colletion">
                <img src="img/ring.png" alt="">
            </a>
        </div>
    </div>
    <footer>
        <div class="language">
            <span class="lang-btn ru active-lang">RU</span>
            <span class="lang-btn en ">EN</span>
        </div>
        <div class="ornament-desription">
            <a href="#product">
                <h3>КОЛЬЦО TRINITY, Cartier</h3>
                <div class="category">Белое золото, бриллианты</div>
                <div class="price">498 000 ₽</div>
            </a>
        </div>
    </footer>
</div>`;

    firstSection.classList.remove("filled");

    if (count == 1) {
        count++;
        mainApp.innerHTML = ""; 
        mainApp.insertAdjacentHTML("afterbegin", html);
        logo.src = "img/logo1.svg";
        return;
    }
    
    const wrapper = mainApp.querySelector(".second-wrapper");

    wrapper.classList.add("hide");

    wrapper.addEventListener("transitionend", (e) => {
        mainApp.innerHTML = "";
        mainApp.insertAdjacentHTML("afterbegin", html);
        logo.src = "img/logo1.svg";
    });
}