import { createHtmlElement } from "./index";

export default function renderMenu() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const menu = createHtmlElement("div", null, "menu", null);
    const title = createHtmlElement("h1", ["dark", "title"], null, "Menu");

    const gravida = createHtmlElement("div", [], "food-item", null);
    const gravidaTitle = createHtmlElement("h3", ["dark"], null, "Gravida");
    const gravidaSubtitle = createHtmlElement("p", ["dark"], null, "Suspendisse nec felis auctor neque dignissim pulvinar et ac tortor.");

    const felis = createHtmlElement("div", [], "food-item", null);
    const felisTitle = createHtmlElement("h3", ["dark"], null, "Felis");
    const felisSubtitle = createHtmlElement("p", ["dark"], null, "Quisque faucibus metus vel velit accumsan, in pharetra massa ullamcorper.");

    const pharetra = createHtmlElement("div", [], "food-item", null);
    const pharetraTitle = createHtmlElement("h3", ["dark"], null, "Pharetra");
    const pharetraSubtitle = createHtmlElement("p", ["dark"], null, "Suspendisse maximus arcu nec urna scelerisque, idvarius mauris hendrerit.");

    const commodo = createHtmlElement("div", [], "food-item", null);
    const commodoTitle = createHtmlElement("h3", ["dark"], null, "Commodo");
    const commodoSubtitle = createHtmlElement("p", ["dark"], null, "Nulla rhoncus lorem vel urna feugiat, at suscipit leovehicula.");

    menu.appendChild(title);

    gravida.appendChild(gravidaTitle);
    gravida.appendChild(gravidaSubtitle);

    felis.appendChild(felisTitle);
    felis.appendChild(felisSubtitle);

    pharetra.appendChild(pharetraTitle);
    pharetra.appendChild(pharetraSubtitle);

    commodo.appendChild(commodoTitle);
    commodo.appendChild(commodoSubtitle);

    menu.appendChild(gravida);
    menu.appendChild(felis);
    menu.appendChild(pharetra);
    menu.appendChild(commodo);

    content.appendChild(menu);
}