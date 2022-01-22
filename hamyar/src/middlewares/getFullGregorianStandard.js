const moment = require('moment-jalaali');
const getFullJalaliStandard = (date) => {
    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
}
module.exports = getFullJalaliStandard;