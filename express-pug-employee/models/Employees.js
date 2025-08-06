const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  E_ID:Number,
  E_name:String,
  E_email:String,
  E_Number:Number,
  E_gender:String,
  E_dept:String,
  E_location:String
  
});

module.exports = mongoose.model('Student', studentSchema);


