const {User, Interest} = require("../models/models");

module.exports = {
    async createUser(req, res) {
        const first_name = req.body.first_name || "John";
        const last_name = req.body.last_name || "Doe";
        const interest_name = req.body.interest || false; // False if not specified by user

        // You could first check to see if user exists already before creating it
        // Error handling could also be integrated here

        var user = await User.create({ first_name: first_name, last_name: last_name });

        if (interest_name) { // If the user mentionned an interest
            var interest = await Interest.create({ name: interest_name});
            await person.addInterest(personality, {through: "User_Interest"});
        }

        return res.status(202).send({ message: "Success" }); // Return response to user
    }
}