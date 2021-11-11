const mainApp = document.querySelector("#first-section__app");
const headerMenuIcon = document.querySelector("#header-menu-icon");
const firstSection = document.querySelector(".first-section");
const logo = document.querySelector('.main-header__logo img');
let isHeaderMenuIconActive = location.hash == "#menu";

export default function renderMenu() {
    headerMenuIcon.classList.add("activate-menu");
    const html = `<div class="second-wrapper">
    <div class="menu-navigation">
        <header class="menu-navigation__header">
            <nav class="first-navigation container">
                <ul>
                    <li><a href="">ЮВЕЛИРНЫЕ ИЗДЕЛИЯ</a></li>
                    <li><a href="">ЧАСЫ</a></li>
                    <li><a href="">АРОМАТЫ</a></li>
                    <li><a href="">БРЕНДЫ</a></li>
                    <li><a href="">ИЗДЕЛИЯ ИЗ КОЖИ</a></li>
                    <li><a href="">СВАДЕБНЫЕ УКРАШЕНИЯ</a></li>
                    <li><a href="">ДРУГОЕ</a></li>
                </ul>
            </nav>
        </header>
        <nav class="second-navigation container">
            <div class="second-navigation__row">
                <div class="nav-block">
                    <h3>ДЛЯ КОГО</h3>
                    <ul>
                        <li><a href="">Для женщин</a></li>
                        <li><a href="">Для мужчин</a></li>
                        <li><a href="">Для детей</a></li>
                    </ul>
                </div>
                <div class="nav-block">
                    <h3>КАТЕГОРИИ</h3>
                    <ul>
                        <li><a href="">Кольца</a></li>
                        <li><a href="">Браслеты</a></li>
                        <li><a href="">Колье</a></li>
                        <li><a href="">Серьги</a></li>
                        <li><a href="">Броши</a></li>
                    </ul>
                </div>
                <div class="nav-block">
                    <h3>МАТЕРИАЛ</h3>
                    <ul>
                        <li><a href="">Изделия с бриллиантами</a></li>
                        <li><a href="">Желтое золото</a></li>
                        <li><a href="">Белое золото</a></li>
                        <li><a href="">Розовое золото</a></li>
                    </ul>
                </div>
                <div class="nav-block">
                    <h3>БРЕНД</h3>
                    <ul>
                        <li><a href="">Mercury</a></li>
                        <li><a href="">Chopard</a></li>
                        <li><a href="">Cartier</a></li>
                        <li><a href="">Graff</a></li>
                        <li><a href="">Garrard</a></li>
                        <li><a class="special-link" href="">Показать все бренды</a></li>
                    </ul>
                </div>
            </div>
            <div class="second-navigation__line"></div>
        </nav>
    </div>
    <footer class="menu-footer container">
        <div class="menu-footer__new-collection">
            <div class="notice1"><a href="">Новая коллекция by Mercury</a></div>
            <div class="notice2"><a href="">JUSTE UN CLOU</a></div>
            <div class="notice3">
                <a href="">
                <span>Cмотреть коллекцию</span>
                </a>
                <a href="">
                <img src="img/Line.svg" alt="">
                </a>
            </div>
        </div>
        <div class="menu-footer__contacts">
            <div class="block1">
                <h4>Телефон горячей линии</h4>
                <div class="tel"><a href="tel:+78004564562">+7 800 456 456</a></div>
                <div class="social-icons">
                    <div class="icon"><a href=""><i class="fab fa-facebook-f"></a></i></div>
                    <div class="icon"><a href=""><i class="fab fa-instagram"></a></i></div>
                </div>
            </div>
            <div class="block2">
                <h4>Подпишитесь на новости</h4>
                <form action="post" name="post-email">
                    <input type="email" name="email" id="email" placeholder="e-mail">
                    <button type="submit"><img src="img/Line.svg" alt=""></button>
                </form>
                <div class="stores">
                    <a href=""><img src="img/apple-store-badge 1.png" alt=""></a>
                    <a href=""><img src="img/googleplay.png" alt=""></a>
                </div>
            </div>
        </div>
    </footer>
</div>`;

    firstSection.classList.add("filled");

    if (isHeaderMenuIconActive) {
        isHeaderMenuIconActive = false;
        mainApp.innerHTML = "";
        mainApp.insertAdjacentHTML("afterbegin", html);
        logo.src = "img/logo2.svg";
        return;
    }

    const wrapper = mainApp.querySelector(".first-wrapper");

    wrapper.classList.add("hide");

    wrapper.addEventListener("transitionend", (e) => {
        mainApp.innerHTML = "";
        mainApp.insertAdjacentHTML("afterbegin", html);
        logo.src = "img/logo2.svg";
    });
}