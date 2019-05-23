require("normalize.css/normalize.css")
require("./styles/index.scss")

import { libLoader } from "./scripts/loader.js"

document.addEventListener("DOMContentLoaded", () => {
    
    let libraries = [
        "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/cjs/react.production.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"
    ]

    const libButton = document.querySelector("#show-libraries")

    libLoader(libraries, libButton);
    
})
