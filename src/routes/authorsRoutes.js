import express from 'express';
import AuthorsController from '../controllers/authorsController.js';

const router = express.Router();

router.get("/authors", AuthorsController.authorsList);
router.get("/authors/:id", AuthorsController.getAuthorById);
router.post("/authors", AuthorsController.addAuthor);
router.put("/authors/:id", AuthorsController.updateAuthor);
router.delete("/authors/:id", AuthorsController.deleteAuthor);

export default router;