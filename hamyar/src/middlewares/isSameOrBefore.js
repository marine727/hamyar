const moment = require('moment-jalaali');

const isSameOrBefore = (date1 , date2) => {
    return moment(date1).isSameOrBefore(date2);
}
module.exports = isSameOrBefore;