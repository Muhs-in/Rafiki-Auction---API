const Car = require('../models/carModel');
const fs = require('fs');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, './../config.env'),
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(console.log('Database connection successful'));

// //read the file
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async () => {
  try {
    await Car.create(data);
    console.log('Car data added successfully');
  } catch (error) {
    console.log('Error adding the car', error);
  }
};

const deleteData = async () => {
  try {
    await Car.deleteMany();
    console.log('Car data deleted successfully');
  } catch (error) {
    console.log('Error deleting the car', error);
  }
};

if (process.argv[2] === '--import') {
  importData();
}

if (process.argv[2] === '--delete') {
  deleteData();
}
