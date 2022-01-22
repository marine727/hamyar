const moment = require('moment-jalaali');

const timeConvertFormat = (date, currentFormat, nextFormat) => {
    return moment(date, currentFormat).format(nextFormat);
}
module.exports = timeConvertFormat;
