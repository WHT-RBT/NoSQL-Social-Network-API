const { Schema, model } = require('mongoose');
const reaction = require('./reaction');
const formatDate = require('../utils/format.js')

// schema to create the thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatDate(date)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reaction],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// virtual property `reactionCount` that gets number of reactions
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

// initializes thought model
const thought = model('thought', thoughtSchema);

console.log(formatDate("2022-05-24T01:31:56.774Z"))
module.exports = thought;