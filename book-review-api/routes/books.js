const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {               ///getting all books
    try {
        const books = await Book.find().populate('author');
    res.json(books);
} catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {               // goal is to create a new book
    const { title, author, publishedYear, genre } = req.body;
    try {
        const book = new Book({ title, author, publishedYear, genre });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    router.patch('/:id', async (req, res) => {    //updating book
        try {
          const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
          if (!book) return res.status(404).json({ message: 'Book not found' });
          res.json(book);
         } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        router.delete('/:id', async (req, res) => {    //delete the book
            try {
              const book = await Book.findByIdAndDelete(req.params.id);
              if (!book) return res.status(404).json({ message: 'Book not found' });
              res.json({ message: 'Book deleted' });
            } catch (err) {
              res.status(400).json({ error: err.message });
            }
          });

          module.exports = router;