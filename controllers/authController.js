const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");


exports.signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    } catch (error) {
        next(error);
    }
};

exports.signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(new errorHandler(404, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(new errorHandler(401, "Wrong credentials"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        //destructuring yung password para hindi makita kapag nag test sa backend 
        const { password: pass, ...rest } = validUser._doc;
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};;
