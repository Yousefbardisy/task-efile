const mongoose = require("mongoose");
const validator = require("validator");

const Contact = mongoose.model("Contact", {
  
  
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: [50, "Name must not exceed 50 characters"],
    minlength: [2, "Name must not be less than 2 characters"],
    trim: true,
  },
  
  phone: {
    type: String,
    unique: true,
    required: [true, "You must have a phone"],
    validate: [validator.isMobilePhone, "Please provide a valid phone number"], // TODO UPDATE VALIDATION
  }, 
    address: {
      type: String,
    },
    notes: {
      type: String,
    },
 
  
});
module.exports = Contact;
