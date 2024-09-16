const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    birthYear: Number,
    nationality: String
});

module.exports = mongoose.model('Author', AuthorSchema);

