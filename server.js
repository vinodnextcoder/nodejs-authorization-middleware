/**
 * server start
 * @author vinod khetade on 22/01/2020
 */
var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
// var rateLimit =require('./lib/ratelmit')
const mongoose = require('mongoose');
global.uuid = require('uuid');
global._constant = require('./lib/constant');
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended:true}))
// app.use(rateLimiterUsingThirdParty);
const rateLimit = require("express-rate-limit");
 

global.limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max:  100// limit each IP to 100 requests per windowMs
});
 
//  apply to all requests
app.use(limiter);
// Configuring the database
const dbConfig = require('./config/mongodb.config.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

require('./routes/booking.routes')(app);
require('./routes/cab.routes')(app);
require('./routes/user.routes')(app);

// Create a Server
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log("App listening at http://localhost:%s",  port)
})
module.exports = server