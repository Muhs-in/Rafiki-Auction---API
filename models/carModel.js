const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Date,
  bodyType: String,
  mileage: Number,
  engine: String,
  transmission: String,
  color: String,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
