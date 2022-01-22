const validator = require('validator');

const isJWT = (str) => {
    return validator.isJWT(str);
}
module.exports = isJWT;