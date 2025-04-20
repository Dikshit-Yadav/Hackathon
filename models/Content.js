const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  hero: {
    heading: String,
    subtext: String,
    highlights: [String],
  },
  features: [
    {
      title: String,
      description: String,
      image: String,
    }
  ],
  targetUsers: [String],
});

module.exports = mongoose.model('Content', contentSchema);
