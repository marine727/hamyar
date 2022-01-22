
const isPersian = (String) => {
    const regex = /^[\u0600-\u06FF\s]+$/;
    const regexRul = new RegExp(regex);
    return String.match(regexRul) !== null;
}
module.exports = isPersian;