const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  volumeInfo: {},
  saleInfo: {}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;