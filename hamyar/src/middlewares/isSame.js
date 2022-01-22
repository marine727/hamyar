const moment = require('moment-jalaali');

const isSame = (date1 , date2) => {
    return moment(date1).isSame(date2);
}
module.exports = isSame;