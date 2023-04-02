import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
    editora: {type: String, required: true},
    pagesNumber: {type: Number}
  }
)

const books = mongoose.model('books', bookSchema);

export default books;