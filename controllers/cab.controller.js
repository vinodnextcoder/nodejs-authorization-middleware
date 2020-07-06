
/**
 * category controller
 * @author vinod khetade on 22/01/2020.
 */
const Cab = require('../models/cab.model');
exports.findAll = (req, res) => {
    var search;
    if (req.body.name) {
        var name = req.body.name
        search = { start_location: { $regex: name, $options: 'si' } }
    }
    else {
        search={}
        // res.status(400).json({ 'msg': 'Error to Find Record!' });
    }
    Cab.find(search).lean()
        .then(catList => {
            let obj = {
                msg: "sucess",
                data: catList
            }
            res.send(obj);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

