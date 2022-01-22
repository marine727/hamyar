const moment = require('moment-jalaali');
//since moment(undefined) evaluates as moment()
const isAfter = (date1, date2) => {
    return moment(date1).isAfter( date2 );
}
module.exports = isAfter;