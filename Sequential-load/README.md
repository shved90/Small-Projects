## Summary

index.js contains sequantial loading of library urls, clicking on a button will attempt to load the file, and on success remove it from the list. Minor error catcher is there too.
Once loaded the url is passed to first.js where it is being placed in the main html wrapper. There it gets handed off to component.js to get broken into individual parts and placed into component elements such as image and text.

This should demonstrate dependency injection via basic factory design pattern, DRY reusable code, and component-based approach to devving - minor replica of what vue/react does and what I'm more familiar with. I opted not to use frameworks for this to experiment and showcase my experience with native JS.

I've done some basic styling to go along with component.js, some simple responsiveness etc. for more solid CSS showcase have a look at https://www.element78.co.uk/ and http://shved.uk/ - both websites are done entirely by me.

Tried using dynamic imports (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_imports) for importing libraries, but babel had none of it, had to resort to old-fashioned way.
Minor issues with Webpack - was a pain and images refused to load >_> The rest seemed to have worked fine.

Overall pretty fun little task to make me think more about designing code structure before coding, and how I can expand this into my own project. Dice game maybe..


## Usage

Install npm dependencies

```sh
 npm install 
```

To start the development server

```sh
npm start
```

To build for production

```sh
npm run build
```

To preview the production build
```sh
npm run preview
```
