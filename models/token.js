var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TokenSchema = new Schema({
    value: {type: String, required: true},
    userId: {type: String, required: true},
    clientId: {type: String, required: true}
});

module.exports = mongoose.model('Token', TokenSchema);