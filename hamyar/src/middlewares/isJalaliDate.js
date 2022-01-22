const moment = require('moment-jalaali');

const isJalaliDate = (date) => {
    return moment(date, 'jYYYY-jMM-jDD').isValid();
}
module.exports = isJalaliDate;