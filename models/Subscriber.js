const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subscribeToChannel: {
    type: String,
    required: true
  },
  subscribeOn: {
    type: Date,
    default: Date.now
  }
});

// Create compound unique index on email and channel combination
// This allows same email for different channels but prevents duplicate email+channel combinations
subscriberSchema.index({ email: 1, subscribeToChannel: 1 }, { unique: true });

module.exports = mongoose.model('Subscriber', subscriberSchema);
