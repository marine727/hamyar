const isPhone = (phone) => {
    const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const regexRul = new RegExp(regex);
    return phone.match(regexRul) !== null;
}
module.exports = isPhone;