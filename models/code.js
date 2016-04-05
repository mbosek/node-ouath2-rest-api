var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CodeSchema = new Schema({
    value: {type: String, required: true},
    redirectUri: {type: String, required: true},
    userId: {type: String, required: true},
    clientId: {type: String, required: true}
});

module.exports = mongoose.model('Code', CodeSchema);