const express = require('express');
const router = express.Router();

const bookController = require('../controllers/booksController');

// routes

router.post('/', bookController.addBook);
router.get('/', bookController.getBook);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router ;