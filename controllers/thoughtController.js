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
        console.log(thought)
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id} },
          { runValidators: true, new: true }
        );
      })
      .then(thought => 
          !thought
          ? res
              .status(404).json({ message: 'Thought not added' })
              : res.json(thought)
      )
        
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction to a user
  // do not need reaction.create, add reactions directly into thoughts
  addReaction(req, res) {
    console.log('You are adding a reaction');
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body} },
          { runValidators: true, new: true }
        )
        .then(reaction =>
          !reaction
          ? res
              .status(404).json({ message: 'Reaction not added' })
              : res.json(reaction)
        )
      .catch((err) => res.status(500).json(err));
  },
  // Remove reaction from a thought
  deleteReaction(req, res) {
    console.log('You are removing a reaction');
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

};
