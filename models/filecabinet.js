var mongoose = require('mongoose');

var FileCabinetSchema = new mongoose.Schema({
  title: { type: String,  required: true },
  category: { type: String,  required: true },
  link: { type: String, required: true }
  },
  { timestamps: true }  // createdAt, updatedAt
);

module.exports = mongoose.model('FileCabinet', FileCabinetSchema);
