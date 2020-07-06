/**
 * category
 * @author vinod khetade on 22/01/2020.
 */
const mongoose = require('mongoose'), 
Schema = mongoose.Schema;
const BookingkSchema = mongoose.Schema({
	book_id: { type: String, index:true,default: uuid.v1 },
	name: { type: String, index:true },
	user_id:{ type: String, index:true },
	cab_id:{ type: String, index:true },
	status:{ type: String, index:true }
});

module.exports = mongoose.model('Book', BookingkSchema);