var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeerSchema = new Schema({
    name: String,
    type: String,
    quantity: Number,
    userId: String
});

module.exports = mongoose.model('Beer', BeerSchema);