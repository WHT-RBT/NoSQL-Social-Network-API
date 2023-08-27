const { Schema, model } = require('mongoose');
var mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// schema to create post model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userId:
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// initialize our thoughts model
const Thoughts = model('thought', thoughtsSchema);

module.exports = Thoughts;