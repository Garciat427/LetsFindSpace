const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/');

mongoose.connection.once('open', function() {
    console.log('===========>Connected to MongoDB<===========');
}).on('error', function(error) {
    console.log('----------->Error connecting to MongoDB!<-----------');
});