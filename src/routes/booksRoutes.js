import express from 'express';
import BooksController from '../controllers/booksController.js';

const router = express.Router();

router.get("/books", BooksController.booksList);
router.get("/books/search", BooksController.getBookByEditora);
router.get("/books/:id", BooksController.getBookById);
router.post("/books", BooksController.addBook);
router.put("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.deleteBook);

export default router;