var User = require('../models/user');

exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New beer drinker added to the locker room!' });
    });
};
// // get user @TODO: get user
// exports.getUser = function (req, res) {
//     User.find({userId: req.user._id, _id: req.params.beer_id}, function (err, user) {
//         if (err)
//             res.send(err);

//         res.json(user);
//     });
// };

exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};
