const isValidTime = (time) => {
    // regular expression to match required time format
   const re = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
    return re.test(time)
}

module.exports = isValidTime;

// 24:00