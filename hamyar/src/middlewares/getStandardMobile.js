// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const getStandardMobile = (mobile) =>{
    // Parse number with country code and keep raw input.
    const number = phoneUtil.parseAndKeepRawInput(mobile, 'IR');

    if(phoneUtil.isValidNumber(number)){
        return `0${number.getNationalNumber()}`;
    }else
        return false;
}
module.exports = getStandardMobile;




