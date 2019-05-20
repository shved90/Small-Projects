
Hopefully this'll work for you.

Final compressed files are in Prod folder. 
Src is for react/sass components.
Any configs you might need are in home dir.

Runs on webpack, with indiscriminate installs from a bunch of tutorials and online guides, I'm sure I dont need half of these, but some of them ended up being workarounds for others not working correctly =(
Boot up node terminal, cd to fresh8 dir, run those 4 comands in home dir, and hopefully coupled with already setup config files it will boot up nicely.

npm install --save-dev react react-dom webpack webpack-dev-server 
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
npm install -D sass-loader style-loader css-loader node-sass
npm install -D extract-text-webpack-plugin

npm run start:dev
