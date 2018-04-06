const express = require('express'),
      router = express.Router(),
      serviceHandler = require('../middleware/serviceHandler'),
      service1 = require('../services/service1');

router.use('/service*', serviceHandler);
router.post('/service1', service1.sendResponse);

module.exports = router;