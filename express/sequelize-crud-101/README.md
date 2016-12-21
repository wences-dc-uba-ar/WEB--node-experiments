###Tutorial: Sequelize CRUD 101

This repo is the companion to [this here blog post](http://lorenstewart.me/2016/10/03/sequelize-crud-101/).

To get started:
 1. make sure you're using Node 6
 2. `npm install`
 3. `npm run dev`.



 ver:  http://lorenstewart.me/2016/10/16/sequelize-crud-102/
 
# https://github.com/sequelize/sequelize-auto
npm install -g sequelize-auto
npm install -g mysql
sequelize-auto -h localhost -d bpm -u bpm -x bpm -p 3306 --dialect mysql -o server/models/ 

node --inspect --debug-brk index.js
