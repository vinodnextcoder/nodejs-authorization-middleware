/**
 * booking routes
 * @author vinod khetade on 6/06/2020.
 */
var auth=require('../authConfig/auth');
module.exports = function(app) {
var books = require('../controllers/booking.controller')
	app.post('/api/booking/bookCab',limiter,auth,books.bookcab);
	app.post('/api/booking/findBookingHistory',limiter,auth,books.findAll);
}