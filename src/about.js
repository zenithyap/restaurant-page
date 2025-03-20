import { createHtmlElement } from "./index";

export default function renderAbout() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const about = createHtmlElement("div", null, "about", null);
    const title = createHtmlElement("h1", ["white", "title"], null, "About");

    const aboutDescription = createHtmlElement("p", ["white"], null, "Enim cillum elit non occaecat minim ad aute labore minim esse enim cillum laborum lorem aliquip ullamco deserunt ea irure pariatur in ad ex consectetur minim cillum laborum enim laborum ipsum qui deserunt ipsum cupidatat officia adipiscing excepteur ut adipiscing labore excepteur sit ea aliquip aliqua nulla dolore tempor eu ipsum commodo incididunt in in veniam irure aliquip consequat id culpa anim nisi eiusmod duis laboris nulla nulla laborum quis officia tempor esse sint proident culpa quis nostrud quis quis qui in laboris officia aute veniam cillum commodo id esse et veniam laborum qui esse nisi elit consequat occaecat esse deserunt quis elit enim laboris incididunt consectetur labore veniam reprehenderit duis ullamco ex cupidatat deserunt officia anim incididunt exercitation irure eu culpa qui quis ex do in consectetur et lorem sunt magna laborum et cillum laboris ex excepteur ullamco ad consectetur culpa tempor nostrud nostrud tempor quis.")

    about.appendChild(title);
    about.appendChild(aboutDescription);

    content.appendChild(about);
};