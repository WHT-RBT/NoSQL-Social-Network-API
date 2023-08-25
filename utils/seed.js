const connection = require('../config/connection');
const { user, thought, reaction } = require('../models');

const users = [
    {
        username: 'Lucky',
        email: 'luckyrabbit@gmail.com',
    },
    {
        username: 'Riley',
        email: 'riley@gmail.com',
    },
    {
        username: 'Ally',
        email: 'ally@gmail.com',
    },
    {
        username: 'Lily',
        email: 'lily@gmail.com',
    },
    {
        username: 'Lacy',
        email: 'lacygirl@gmail.com',
    },
    {
        username: 'Peanut',
        email: 'iluvpeanuts@gmail.com',
    },
    {
        username: 'Velvet',
        email: 'velvet@gmail.com',
    },
    {
        username: 'Holly',
        email: 'holly@gmail.com',
    },
    {
        username: 'Rue',
        email: 'ruerue@gmail.com',
    }

]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await thought.deleteMany({});
    await user.deleteMany({});

    await user.collection.insertMany(users);

    console.info('Seeding complete!');
    process.exit(0);
});
