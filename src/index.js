import "./styles.css";
import renderHome from "./home";

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

renderHome();

export { createHtmlElement };