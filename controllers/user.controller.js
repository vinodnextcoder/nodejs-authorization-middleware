/**
 * prods cntrl
 * @author vinod khetade on 22/01/2020.
 */

const User = require('../models/user.model');
const Cab = require('../models/cab.model');
const Booking = require('../models/booking.model');
var async = require("async");

// insert seed Data for company
exports.init = (req, res) => {
	if (req.body.userData) {
		var userData = req.body.product
	}
	else {
		var userData = _constant.userData
	}
	if (req.body.cabData) {
		var cabData = req.body.cabData
	}
	else {
		var cabData = _constant.cabData
	}
	let reqObj = {
		cabData: cabData,
		userData: userData
	}
	Process(reqObj,res)
}


function Process(reqObj,callback){
	async.waterfall([
		function (callback) {
			callback(null, 'Task 1');
		},
		function (value, callback) {
			User.insertMany(reqObj.userData)
				.then((result) => {
					callback(null, result)
				})
				.catch(err => {
					callback(err)
				});
		},
		function (value, callback) {
			Cab.insertMany(reqObj.cabData)
				.then((result) => {
					let obj={
						user:value,
						cab:result
					}
					callback(null,obj)
				})
				.catch(err => {
					callback(err)
				});
		},
		function (value, callback) {
			const foundUser = value.user.find(element => element.name =="Ravi Jadhav");
			const foundcab = value.cab.find(element => element.name =="SUV");
			let inserObj={
					user_id:foundUser.user_id,
					cab_id:foundcab.cap_id,
					status:"ACTIVE",
					name:"TRIP 1"
				}
				var book1 = new Booking(inserObj);
				book1.save(function (err, book) {
				  if (err) return console.error(err);
				  callback(null,book)
				});
		},

	], function (err, result) {
		if (err) {
			callback.status(400).json({ 'msg': 'Error!' });
		} else {
			callback.status(200).json({ 'msg': 'New Documents Added!' });
		}
	});
}

function insertUser(data, cb) {
	User.insertMany(data)
		.then((result) => {
			callback(null, result)
		})
		.catch(err => {
			callback(err)
		});
}
function insertCab(data, cb) {
	Cab.insertMany(data.cabData)
		.then((result) => {
			callback(null, result)
		})
		.catch(err => {
			callback(err)
		});
}


