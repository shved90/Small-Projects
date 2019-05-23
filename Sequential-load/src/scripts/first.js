import { createListItem } from "./component.js"

function libElement(url) {
    const content = createListItem(url)
    const container = document.getElementById("loader-container")
    container.appendChild(content)
}

export { libElement }
