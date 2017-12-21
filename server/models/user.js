const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Our Model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

// Create Model class
const ModelClass = mongoose.model('user', userSchema);


// Export Model
module.exports = ModelClass;
