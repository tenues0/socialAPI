const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 4,
      default: 'Unnamed reaction',
    },
    // gets the username that created the thought
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// getter method to format the timestamp on query
reactionSchema.virtual('timestampFormat').get(function () {
  return this.createdAt.toISOString().split("T") [0];
});

module.exports = reactionSchema;
