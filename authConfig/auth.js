module.exports = function (req, res, next) {
    //get the token from the header if present
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, return response (without going to the next middelware)
    if (!token) return res.status(401).send({msg:"Access denied. No token provided."});
    try {
        if (token === "kjffdkkfkjdf") {
            next();
        }
        else {
            res.status(401).send({msg:"Access denied. Invalid token."});
        }
    } catch (ex) {
        res.status(401).send({msg:"Access denied. Invalid token."});
    }
};