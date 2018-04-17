const express = require('express'),
      router = express.Router(),
      schemaService = require('../services/schemaService'),
      serviceHandler = require('../middleware/serviceHandler'),
      service1 = require('../services/service1'),
      service2 = require('../services/service2'),
      service3 = require('../services/service3'),
      service4 = require('../services/service4'),
      service5 = require('../services/service5'),
      service6 = require('../services/service6'),
      service7 = require('../services/service7'),
      service8 = require('../services/service8'),
      service9 = require('../services/service9'),
      service10 = require('../services/service10');
      
router.get('/initialservice',schemaService.sendInitial);
router.get('/getflow', schemaService.sendFlow);
router.use('/service*', serviceHandler);
router.post('/service1', service1.sendResponse);
router.post('/service2', service2.sendResponse);
router.post('/service3', service3.sendResponse);
router.post('/service4', service4.sendResponse);
router.post('/service5', service5.sendResponse);
router.post('/service6', service6.sendResponse);
router.post('/service7', service7.sendResponse);
router.post('/service8', service8.sendResponse);
router.post('/service9', service9.sendResponse);
router.post('/service10', service10.sendResponse);

module.exports = router;