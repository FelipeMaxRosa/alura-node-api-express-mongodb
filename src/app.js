import express from 'express';

import db from './config/dbConnect.js';
import books from './models/Book.js';
import routes from './routes/index.js';

db.on("error", () => console.log("DB connection error"));
db.once("open", () => {
  console.log("DB connected successfully!");
});

const app = express();
app.use(express.json());
routes(app);


app.get('/books/:id', (req, res) => {
  const bookIndex = getBookIndex(req.params.id);

  res.json(books[bookIndex]);
});

app.put('/books/:id', (req, res) => {
  const bookIndex = getBookIndex(req.params.id);
  books[bookIndex].title = req.body.title;

  res.json(books);
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = getBookIndex(id);

  books.splice(bookIndex, 1);

  res.send(`Book ${id} has been removed successfully!`);
});

function getBookIndex(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;
