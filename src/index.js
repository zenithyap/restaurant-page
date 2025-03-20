import "./styles.css";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";

function createHtmlElement(tag, classList, id, content) {
    const element = document.createElement(tag);

    if (classList) {
        for (const c of classList) element.classList.add(c);
    };

    if (id) {
        element.id = id;
    };

    if (content) {
        element.textContent = content;
    };

    return element;
};

function handleNavbarClick(e) {
    const nav = e.target.textContent;

    if (nav === "Home") {
        renderHome();
    } else if (nav === "Menu") {
        renderMenu();
    } else if (nav === "About") {
        renderAbout();
    }
};

const navbar = document.querySelector("#navbar");
navbar.addEventListener("click", handleNavbarClick);

renderHome();

export { createHtmlElement };