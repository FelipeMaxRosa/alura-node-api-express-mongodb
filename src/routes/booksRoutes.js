import express from 'express';
import BooksController from '../controllers/booksController.js';

const router = express.Router();

router.get("/books", BooksController.booksList);
router.post("/books", BooksController.addBook);
router.put("/books/:id", BooksController.updateBook);

export default router;