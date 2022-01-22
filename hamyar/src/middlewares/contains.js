const validator = require('validator');
const contains = (str) => {
    const seed1 = '<';
    const seed2 = '(';
    const seed3 = '?';
    const seed4 = '=';
    const seed5 = '.';
    const seed6 = '/';
    const seed7 = ')';
    const seed8 = '>';
    return (validator.contains(str, seed1) || validator.contains(str, seed2) || validator.contains(str, seed3) || validator.contains(str, seed4) || validator.contains(str, seed5) || validator.contains(str, seed6) || validator.contains(str, seed7) || validator.contains(str, seed8));
}
module.exports = contains;