/**
 * booking ctrl
 * @author vinod khetade on /07/2020.
 */

const User = require('../models/user.model');
const Cab = require('../models/cab.model');
const Booking = require('../models/booking.model');
// insert
exports.bookcab = (req, res) => {
	let inserObj = {
		user_id: req.body.user_id,
		cab_id: req.body.cab_id,
		status: "ACTIVE",
		name: req.body.name
	}
	var book1 = new Booking(inserObj);
	book1.save(function (err, book) {
		if (err) {
			res.status(400).json({ 'msg': 'Error to Insert!' });
		}
		{
			res.status(200).json({ 'msg': 'New Documents Added!' });
		}
	});
}
exports.findAll = (req, res) => {
	let findParam;
	if (req.body && req.body.user_id) {
		findParam = { user_id: req.body.user_id }
	}
	else {
		findParam={}
		// res.status(400).json({ 'msg': 'Error to Find Record!' });
	}
	Booking.find(findParam).lean()
		.then(catList => {
			console.log(">>>",catList)
			let obj = {
				msg: "sucess",
				data: catList
			}
			if (catList.length > 0) {
				res.send(obj);
			}
			else {
				res.status(400).json({ 'msg': 'No Record Found' });
			}
		}).catch(err => {
			res.status(500).send({
				message: err.message
			});
		});
};

