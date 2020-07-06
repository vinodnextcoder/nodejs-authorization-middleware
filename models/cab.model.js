/**
 * category
 * @author vinod khetade on 07/06/2020.
 */
const mongoose = require('mongoose'), 
Schema = mongoose.Schema;
const CabSchema = mongoose.Schema({
	cab_id: { type: String, index:true,default: uuid.v1 },
	name: { type: String, index:true,required:true},
	start_location: { type: String, index:true,required:true},
	end_location: { type: String, index:true,required:true},
	location_distance: { type: Number, index:true,required:true },
	status:{ type: String, index:true,required:true }
});

module.exports = mongoose.model('Cab', CabSchema);