const moment = require('moment-jalaali');

const isBefore = (date1 , date2) => {
    return moment(date1).isBefore(date2);
}
module.exports = isBefore;