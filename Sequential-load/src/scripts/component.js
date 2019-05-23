const createListItem = (url) => {

    // img sorter
    const value = [
        'angular',
        'react',
        'vue',
    ].reduce((a, b) => {
        return url.includes(b) ? b : a
    }, 'generic')

    // each element can be its own atom given enough complexity
    const wrapper = document.createElement("li")
    wrapper.classList.add("list-item")

    const image = document.createElement("img")
    image.src = `./src/assets/${value}.png` // webpack img loader doesnt play ball >_>
    wrapper.appendChild(image)

    const paragraph = document.createElement("p")
    paragraph.classList.add("list-content")
    paragraph.appendChild(document.createTextNode(url))
    wrapper.appendChild(paragraph)

    return wrapper
  }

export { createListItem }
