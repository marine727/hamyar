const moment = require('moment-jalaali');
const getCurrentDate = (format) => {
    return moment().format(format);
}
module.exports = getCurrentDate;

//format
//YYYY-MM-DD HH:mm:ss ==>1992-06-22 15:20:00
//jYYYY-jMM-jDD HH:mm:ss ==> 1399-04-01 12:11:11
//YYYY-MM-DD ==>1992-06-22
//jYYYY-jMM-jDD ==> 1399-04-01
