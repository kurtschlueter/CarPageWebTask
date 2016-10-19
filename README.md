# CarPageWebTask

ExpressJS installed locally and saved to dependencies

To be honest, a database is not needed here since the application is so simple. Since one was requested, however, I went ahead and created a schema to represent the associations if relational.

## Schema
![Schema](/public/images/schema.png)


## npm history
* npm install express-generator -g
* express CarPageWebTask
* npm install
* npm install react --save
* npm install react-dom --save
* npm install webpack --save-dev

(need to install some babel modules for transpiling bc we are going to run our react code in es6)

* npm install babel-loader --save-dev
* npm install babel-core
* npm install babel-preset-es2015
* npm install babel-preset-react

need to create web pack.config.js file to give web pack instructions for all of the transpiling

* npm install --save react-fontawesome

## Some other notes

I installed firebase for the db. Becuase we are only dealing with one entry, I figured that I would keep it simple. If this project was to be scaled and fully functional, I might have to reconsider.

This app is only responsive for iPhone 6. With more time I can go ahead and expand to other mobile devices (probably with very few adjustments). But for now, I only have it for the one.

I spent a lot of time implementing bootstrap, only to scrap it at the end. The app required some custom designs that made me go crazy trying to override bootstrap. So I did it manually. That being said, I urge anyone to stay as far away from my css files as possible.