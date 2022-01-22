'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
var moment = require('moment-timezone');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const x= moment.tz('Asia/Tehran').format('z'); 
var y = `${x.slice(0,3)}:${x.slice(3)}` // => like +04:30


let sequelize;
  sequelize = new Sequelize(config.database, config.username, config.password, {
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": y
  });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
