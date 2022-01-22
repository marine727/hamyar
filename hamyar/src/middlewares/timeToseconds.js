const isTime = require('./isTime');
const timeToseconds = (time) => {
    if(!isTime(time)){
        const error = new Error('لطفا زمان شروع نوبت را با فرمت استاندارد وارد کنید.');
        error.code = 400;
        throw error;
    }
    const res = time.split(":");
    return res[0]*3600 + res[1]*60 + res[2]*1;
}
module.exports = timeToseconds;