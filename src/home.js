import { createHtmlElement } from "./index";

export default function renderHome() {
    const content = document.querySelector("#content");

    const title = createHtmlElement("h1", ["white", "title"], null, "Lorem Ipsum");
    const subtitle = createHtmlElement("p", ["white"], null, "Ad dolore anim incididunt voluptate tempor cupidatat aute reprehenderit anim");

    content.appendChild(title);
    content.appendChild(subtitle);
}

