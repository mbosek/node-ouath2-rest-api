var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/beerlocker', function () {
    console.log('mongodb connected')
});

module.exports = mongoose;
