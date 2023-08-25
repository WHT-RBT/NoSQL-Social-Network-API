const { Schema, model } = require('mongoose');

// schema to create the user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// creates virtual property `friendCount` that gets number of users friends
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

// initializes user model
const user = model('user', userSchema);

module.exports = user;