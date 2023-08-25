const thought = require('../models/thought');
const user = require('../models/user');

module.exports = {
    getUsers(req, res) {
        user.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        user.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There iso user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        user.create({
            username: req.body.username,
            email: req.body.email
        })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        user.findOneAndUpdate(
            { _id: req.params.userId },
            {
                username: req.body.username,
                email: req.body.email
            },
            { new: true },
            (err, result) => {
                if (result) {
                    res.status(200).json(result);
                    console.log(`Updated: ${result}`);
                } else {
                    console.log(err);
                    res.status(500).json({ message: 'Error!', err });
                }
            }
        )
    },

    deleteUser(req, res) {
        user.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no user with that ID' })
                    : thought.deleteMany({ username: user.username })
                        .then((thoughts) =>
                            !thoughts
                                ? res.status(404).json({ message: 'There are no thoughts for that user' })
                                : res.json(user)
                        )
            )
            .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        user.findOne({ _id: req.params.friendId })
            .select('-__v')
            .then((user) => {
                return user.findOneAndUpdate(
                    { _id: req.params.userId },
                    {
                        $addToSet: {
                            friends: user._id
                        }
                    },
                    { new: true }
                );
            }).then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    deleteFriend(req, res) {
        user.findOne({ _id: req.params.friendId })
            .select('-__v')
            .then((user) => {
                return user.findOneAndUpdate(
                    { _id: req.params.userId },
                    {
                        $pull: {
                            friends: user._id
                        }
                    },
                    { new: true }
                );
            }).then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
};