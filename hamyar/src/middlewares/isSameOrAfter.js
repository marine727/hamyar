const moment = require('moment-jalaali');
const isSameOrAfter = (date1 , date2) => {
    return moment(date1).isSameOrAfter(date2);
}
module.exports = isSameOrAfter; 