const moment = require('moment-jalaali');
//since moment(undefined) evaluates as moment()
const isBetween = (date ,date1, date2) => {
    return moment(date).isBetween(date1 ,date2 );
}
module.exports = isBetween;