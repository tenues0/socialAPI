const { User, Reaction, Thought } = require('../models');


module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought from a user
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

      // Add a thought to a user
      addThought(req, res) {
        console.log('You are adding a thought');
        Thought.create(req.body)
          .then((thought) => {
            User.findOneAndUpdate(
              { _id: req.params.userId },
              { $addToSet: { thoughts: req.params.thoughtId} },
              { runValidators: true, new: true }
            )
            .then(thought)
              !thought
              ? res
                  .status(404).json({ message: 'Thought not added' })
                  : res.json(thought)
            })
          .catch((err) => res.status(500).json(err));
      },

      // Update Reaction
      updateReaction(req, res) {
        Reaction.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { thought: { thoughtId: req.params.thoughtId } } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },




};
