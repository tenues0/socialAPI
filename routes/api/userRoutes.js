const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addThought,
  removeThought,
  addFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

// friends post route
router.route('/:userId/friends/:friendId').post(addFriend);


module.exports = router;
