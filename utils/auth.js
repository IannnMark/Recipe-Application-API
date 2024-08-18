const User = require("../models/user");
const errorHandler = require("./error");


exports.authorizeRoles = (...roles) => {
    console.log(roles);
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new errorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403))
        }
        next();
    }

}