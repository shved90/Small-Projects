import { libElement } from "./first.js"

function libLoader(libraries, trigger) {

    const head = document.querySelector("head")

    let loaded = 0

    trigger.onclick = () => {
    
        if (!libraries.length) {
            return 
        }
            
        const nextTick = libraries[loaded]
        const scriptTag = document.createElement("script")
        
        scriptTag.src = nextTick

        scriptTag.onerror = event => {
            alert("failed to load: " + event.target.src)
        }

        libElement(nextTick)
        head.appendChild(scriptTag)

        loaded++
        console.log("injecting: " + nextTick)
    }
}

export { libLoader }
