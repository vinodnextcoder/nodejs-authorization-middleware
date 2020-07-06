/**
 * prods category
 * @author vinod khetade on 22/01/2020.
 */
var auth=require('../authConfig/auth');
module.exports = function(app) {
var cab = require('../controllers/cab.controller');
app.post('/api/findTrip/searchCab',limiter,auth,cab.findAll);
}