/**
 * prods routes
 * @author vinod khetade on 07/06/2020.
 */
var auth=require('../authConfig/auth');
module.exports = function(app) {
var users = require('../controllers/user.controller.js')
	app.get('/api/users/init',limiter,auth,users.init);
	// app.post('/api/prods/findProduct', prods.findproducts);
	// app.post('/api/prods/updateProduct', prods.updateProduct);
}