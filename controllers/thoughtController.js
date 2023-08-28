const Thought = require('../models/thought'); 
const User = require('../models/user');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts)) 
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .populate('reactions') 
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There are no thoughts with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        }).then((thought) => {
            return user.findOneAndUpdate(
                { username: req.body.username }, {
                $addToSet: { thoughts: thought._id }
            }, { new: true }
            );
        }).then((user) =>
            !user
                ? res.status(404).json({
                    message: 'Error creating thought ❌ no user with that ID'
                })
                : res.json(user)
        ).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    updateThought(req, res) {
        thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {
                thoughtText: req.body.thoughtText,
                username: req.body.username
            },
            { new: true },
            (err, result) => {
                if (result) {
                    res.status(200).json(result);
                    console.log(`Updated: ${result}`);
                } else {
                    console.log(err);
                    res.status(500).json({ message: 'Error!❌', err });
                }
            }
        )
    },

    deleteThought(req, res) {
        thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this ID!💭💭💭' })
                    : user.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thought: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Error deleting thought ❌',
                    })
                    : res.json({ message: 'Thought successfully deleted!💭💭💭' })
            )
            .catch((err) => res.status(500).json(err));
    },

    addReaction(req, res) {
        thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } }, 
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this ID!💭💭💭' })
                    : res.json(`Reaction added!🎉🎉🎉`)
            )
            .catch((err) => res.status(500).json(err));
    },

    removeReaction(req, res) {
        thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this ID!💭💭💭' })
                    : res.json(`Reaction deleted!🎉🎉🎉`)
            )
            .catch((err) => res.status(500).json(err));
    },
};