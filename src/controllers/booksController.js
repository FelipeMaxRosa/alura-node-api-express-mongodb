import books from '../models/Book.js';

const BooksController = {
  booksList: async (req, res) => {
    try {
      const allBooks = await books.find();
      res.status(200).json(allBooks);
    } catch (error) {
      console.log(error);
    }
  },
  getBookById: async (req, res) => {
    const bookId = req?.params?.id;

    try {
      const book = await books.findById(bookId);
      res.status(200).send(book);
    } catch (error) {
      res.status(400).send({ message: `${error?.message} - Id do Livro nao localizado` });
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
  },
  deleteBook: async (req, res) => {
    const bookId = req?.params?.id;

    try {
      await books.findByIdAndDelete(bookId);
      res.status(200).send({ message: 'Livro removido com sucesso!' })
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
};

export default BooksController;