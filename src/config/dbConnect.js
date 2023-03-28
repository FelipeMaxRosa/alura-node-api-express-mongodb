import mongoose from "mongoose";

mongoose.connect("mongodb+srv://feliperosa:jkax10@alura.i2udk9m.mongodb.net/alura-node");

const db = mongoose.connection;

export default db;