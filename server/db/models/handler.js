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

var protocol = {
    "initial": "service1",
    "service1": {
        "xml": "service2",
        "json": "service3",
    },
    "service2": {
        "xml": "service4",
        "json": "service5",
    },
    "service3": {
        "xml": "service6",
        "json": "service7",
    },
    "service4": "exit",
    "service5": "service8",
    "service6": "exit",
    "service7": "service10",
    "service8": "service9",
    "service9": "exit",
    "service10": "exit"
}
