const isTime = (time) => {
    // regular expression to match required time format
   const re = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/;
    return time.match(re);//null or nut
}

module.exports = isTime;