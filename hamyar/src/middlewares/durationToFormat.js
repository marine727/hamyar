let moment = require("moment");
let momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);

const durationToFormat = (length, type = 'milliseconds', format = '') => {

    //length is int
    //type: milliseconds,seconds,minutes,days,weeks,... 
    //format:  y [years], d [days], h [hours], m [minutes], s [seconds]
    //more information ==>https://www.npmjs.com/package/moment-duration-format
    return moment.duration(length, type).format(format);
}

module.exports = durationToFormat;