module.exports.signup = (req, res, next) => {
    
    res.status(200).json('test ok');
}

module.exports.signin = (req, res, next) => {
    res.status(201).json('test ok1');
}

module.exports.changePassword = (req, res, next) => {
    res.status(201).json('test ok2');
}