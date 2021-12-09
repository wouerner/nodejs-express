const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('books', bookSchema);
