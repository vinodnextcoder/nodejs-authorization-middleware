/**
 * user
 * @author vinod khetade on 22/01/2020.
 */
const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
    user_id: { type: String, index:true , default: uuid.v1},
    name: { type: String, index:true,required:true },
    desc: { type: String, index:true },
	status:{ type: String, index:true ,required:true},
});

module.exports = mongoose.model('User', UserSchema);
