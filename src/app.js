import express from 'express';

const app = express();
app.use(express.json());

const books = [
  { id: 1, title: 'O Senhor dos Aneis' },
  { id: 2, title: 'O Hobbit' }
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/livros', (req, res) => {
  res.status(200).json(books);
});

app.get('/livros/:id', (req, res) => {
  const bookIndex = getBookIndex(req.params.id);
  
  res.json(books[bookIndex]);
});

app.post('/livros', (req, res) => {
  books.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso!'); 
});

app.put('/livros/:id', (req, res) => {
  const bookIndex = getBookIndex(req.params.id);
  books[bookIndex].title = req.body.title;

  res.json(books);
});

function getBookIndex(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;
