//all things server related
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(`${__dirname}/config.env`),
});

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(console.log('Database connection successful'));

app.listen(PORT, '127.0.0.1', () => {
  console.log(`server running on port ${PORT}`);
});
