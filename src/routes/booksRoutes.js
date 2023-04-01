import express from 'express';
import BooksController from '../controllers/booksController.js';

const router = express.Router();

router.get("/books", BooksController.booksList);
router.post("/books", BooksController.addBook);

export default router;