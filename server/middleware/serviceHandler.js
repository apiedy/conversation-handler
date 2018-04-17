const express = require('express'),
      serviceHandler = express.Router(),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      schemaSer = require('../services/schemaService');

serviceHandler.use(function(req, res, next) {
    let token = req.headers['access-token'];
    let requestedService = req.baseUrl.split('/').pop();
    let response = {
        path: [],
        methods: []
    };

    if(req.method === 'OPTIONS') {
        res.status(200).send({"msg": "Pre-flight received."});
    }
    else if (token) {
        let decoded = jwt.verify(token, process.env.SECRET);
        response.path = decoded.path;
        response.methods = decoded.methods;
        let expectedService = '';
        let lastMethod = decoded.methods[decoded.methods.length - 1];
        let lastService = decoded.path[decoded.path.length - 1];

        if(lastMethod === '-')
            expectedService = schemaSer.prot[lastService][0]
        else {
            expectedService = schemaSer.prot[lastService][lastMethod][0]
        }

        if(expectedService === requestedService) {
            let name = String(req.body.name).toUpperCase();

            response.path.push(requestedService);
            
            if ( name[0] >= 'A' && name[0] <= 'M') {
                let nextServices = schemaSer.prot[requestedService].json;
                if(!nextServices) {
                    nextServices = schemaSer.prot[requestedService];
                    response.methods.push('-');
                }
                else
                    response.methods.push('json');
                    
                response.token = jwt.sign(response, process.env.SECRET, {expiresIn: '1h'});
                delete response.path;
                delete response.methods;

                response.nextServices = nextServices;
                req.response = response;
                req.need = "json";
                next();
            }
            else if ( name[0] >= 'N' && name[0] <= 'Z') {
                let nextServices = schemaSer.prot[requestedService].xml;
                if(!nextServices) {
                    nextServices = schemaSer.prot[requestedService];
                    response.methods.push('-');
                }
                else
                    response.methods.push('xml');
                    
                response.token = jwt.sign(response, process.env.SECRET, {expiresIn: '1h'});
                delete response.path;
                delete response.methods;

                response.nextServices = nextServices;
                req.response = response;
                req.need = "xml";
                next();
            }
        }
        else {
            res.status(401).send({"msg": "The path is not valid."});
        }
    }
    else {
        if( schemaSer.prot.initial === requestedService ) {
            let name = String(req.body.name).toUpperCase();
            
            response.path.push(requestedService);
            
            if ( name[0] >= 'A' && name[0] <= 'M') {
                let nextServices = schemaSer.prot[requestedService].json;
                if(!nextServices) {
                    nextServices = schemaSer.prot[requestedService];
                    response.methods.push('-');
                }
                else {
                    response.methods.push('json');
                }

                response.token = jwt.sign(response, process.env.SECRET, {expiresIn: '1h'});
                delete response.path;
                delete response.methods;

                response.nextServices = nextServices;
                req.response = response;
                req.need = "json";
                next();
            }
            else if ( name[0] >= 'N' && name[0] <= 'Z') {
                let nextServices = schemaSer.prot[requestedService].xml;
                if(!nextServices) {
                    nextServices = schemaSer.prot[requestedService];
                    response.methods.push('-');
                }
                else
                    response.methods.push('xml');
                    
                response.token = jwt.sign(response, process.env.SECRET, {expiresIn: '1h'});
                delete response.path;
                delete response.methods;

                response.nextServices = nextServices;
                req.response = response;
                req.need = "xml";
                next();
            }
        }
    }
})

module.exports = serviceHandler;
