const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(addThought);

// /api/users/:userId/thoughts
// router.route('/thoughts').post(addThought);


// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
