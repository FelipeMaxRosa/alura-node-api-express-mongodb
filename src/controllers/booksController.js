import books from '../models/Book.js';

function getBookIndex(id) {
  return books.findIndex((book) => book.id == id);
}

const BooksController = {
  booksList: async (req, res) => {
    try {
      const allBooks = await books.find();
      res.status(200).json(allBooks);
    } catch (error) {
      console.log(error);
    }
  },
  addBook: async (req, res) => {
    const book = new books(req.body);
    
    try {
      await book.save()
      res.status(201).send(book.toJSON());
    } catch (error) {
      res.status(500).send({ message: `${error?.message} - Falha ao cadastrar livro` })
    }
  },
  updateBook: async (req, res) => {
    const bookId = req?.params?.id;

    try {
      await books.findByIdAndUpdate(bookId, {$set: req?.body});
      res.status(200).send({ message: 'Livro atualizado com sucesso!' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
};

export default BooksController;