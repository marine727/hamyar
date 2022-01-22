const moment = require('moment-jalaali');

const fullJelaliToFullGregorian = (date) => {
    return moment(date, 'jYYYY-jMM-jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
}
module.exports = fullJelaliToFullGregorian;