const encode = (data)=>{
    return Buffer.from(data, 'base64').toString();
}
module.exports = encode;
