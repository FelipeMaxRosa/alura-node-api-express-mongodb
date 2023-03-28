import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    pagesNumber: {type: Number}
  }
)

const books = mongoose.model('books', bookSchema);

export default books;