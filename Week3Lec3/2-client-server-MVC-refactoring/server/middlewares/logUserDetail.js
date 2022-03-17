function logUserDetail(req, res, next){
    const userAdress = req.connection.remoteAddress;

    console.log(`User with Address: ${userAdress} visited server`);
    next()
}

module.exports = logUserDetail;
