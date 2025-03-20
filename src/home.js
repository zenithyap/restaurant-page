import { createHtmlElement } from "./index";

export default function renderHome() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const home = createHtmlElement("div", null, "home", null);
    const title = createHtmlElement("h1", ["white", "title"], null, "Lorem Ipsum");
    const subtitle = createHtmlElement("p", ["white"], null, "Ad dolore anim incididunt voluptate tempor cupidatat aute reprehenderit anim");

    home.appendChild(title);
    home.appendChild(subtitle);

    content.appendChild(home);
}

