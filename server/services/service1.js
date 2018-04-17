const o2x = require('object-to-xml');

module.exports.sendResponse = function(req, res) {
    if ( req.need === 'json') {
        res.status(200).send(req.response)
    }
    else if( req.need === 'xml') {
        res.set('Content-Type', 'text/xml');
        res.status(200).send(o2x({
            response: req.response
        }));
    }
}
