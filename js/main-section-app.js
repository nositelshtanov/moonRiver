import renderMenu from "./renderMenu.js";
import renderMain from "./renderMain.js";

const mainApp = document.querySelector("#first-section__app");
const headerMenuIcon = document.querySelector("#header-menu-icon");
let isHeaderMenuIconActive = location.hash == "#menu";

headerMenuIcon.addEventListener("click", (e) => {
    e.preventDefault();

    if (!(isHeaderMenuIconActive)) {
        location.hash = "menu";
    } else {
        location.hash = "";
    }

    isHeaderMenuIconActive = !isHeaderMenuIconActive;
});

const hashHandler =  (e) => {
    const hash = location.hash;

    switch (hash) {
        case ("#menu"):
            renderMenu();
            break;
        case (""):
            renderMain();
            break;
        default:
            renderMain();
            isHeaderMenuIconActive = false;
    }
};

window.addEventListener("hashchange", hashHandler);

hashHandler();

