const encode = (data) => {

    return Buffer.from(data).toString('base64')
}

module.exports = encode;
