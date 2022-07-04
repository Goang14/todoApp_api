const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sinh_Vien = new Schema({
  name: {type: String, maxLength:255},
  age: {type: String, maxLength:255},
  address:  {type: String, maxLength:255},
});

module.exports = mongoose.model('SinhVien', Sinh_Vien);