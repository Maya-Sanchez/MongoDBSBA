const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    publishedYear: Number,
    genre: String,
    averageRating: Number
  });

  module.exports = mongoose.model('Book', BookSchema);

