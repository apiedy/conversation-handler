const jwt = require('jsonwebtoken');

let protocol = {
    "initial": "service1",
    "service1": {
        "xml": ["service2"],
        "json": ["service3"],
    },
    "service2": {
        "xml": ["service4"],
        "json": ["service5"],
    },
    "service3": {
        "xml": ["service6"],
        "json": ["service7"],
    },
    "service4": ["exit"],
    "service5": ["service8"],
    "service6": ["exit"],
    "service7": ["service10"],
    "service8": ["service9"],
    "service9": ["exit"],
    "service10": ["exit"]
}

module.exports.prot = protocol;

module.exports.sendInitial = function(req, res) {
    // TODO change this mongodb call and get schema real time
    res.status(200).send({initialService: protocol.initial})
}

module.exports.sendFlow = function(req, res) {
    let decoded = jwt.verify(req.headers['access-token'], process.env.SECRET);
    delete decoded.iat;
    delete decoded.exp;
    res.status(200).send({flow: decoded});
}
