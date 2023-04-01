import authors from '../models/Author.js';

const AuthorsController = {
  authorsList: async (req, res) => {
    try {
      const allAuthors = await authors.find();
      res.status(200).json(allAuthors);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  getAuthorById: async (req, res) => {
    const authorId = req?.params?.id;

    try {
      const author = await authors.findById(authorId);
      res.status(200).send(author);
    } catch (error) {
      res.status(400).send({ message: `${error?.message} - Id do Autor nao localizado` });
    }
  },
  addAuthor: async (req, res) => {
    const author = new authors(req.body);
    
    try {
      await author.save()
      res.status(201).send(author.toJSON());
    } catch (error) {
      res.status(500).send({ message: `${error?.message} - Falha ao cadastrar autor` })
    }
  },
  updateAuthor: async (req, res) => {
    const authorId = req?.params?.id;

    try {
      await authors.findByIdAndUpdate(authorId, {$set: req?.body});
      res.status(200).send({ message: 'Autor atualizado com sucesso!' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  deleteAuthor: async (req, res) => {
    const authorId = req?.params?.id;

    try {
      await authors.findByIdAndDelete(authorId);
      res.status(200).send({ message: 'Autor removido com sucesso!' })
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
};

export default AuthorsController;