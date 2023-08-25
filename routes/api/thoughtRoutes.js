const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// WRITE

// /api/thought
router.route('./api/thoughtRoutes').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(deleteThought);

// /api/thought/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction)

module.exports = router;