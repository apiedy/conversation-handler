let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var handlerSchema = new Schema({
   initial: {
       type: String,
       required: true
   },
   service1: {
        type: Object || String,
        required: true
    },
    service2: {
        type: Object || String,
        required: true
    },
    service3: {
        type: Object || String,
        required: true
    },
    service4: {
        type: Object || String,
        required: true
    },
    service5: {
        type: Object || String,
        required: true
    },
    service6: {
        type: Object || String,
        required: true
    },
    service7: {
        type: Object || String,
        required: true
    },
    service8: {
        type: Object || String,
        required: true
    },
    service9: {
        type: Object || String,
        required: true
    },
    service10: {
        type: Object || String,
        required: true
    }
});

var Handler = module.exports = mongoose.model('handler', handlerSchema);
