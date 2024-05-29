//all express related functions
const express = require('express');
const morgan = require('morgan');

const app = express();

//route handlers
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const bidRoutes = require('./routes/bidRoutes');
const auctionRoutes = require('./routes/carRoutes');

//middlewares
app.use(express.json()); //--gives me access to req boyd
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

//api endpoints
app.use('/api/v4/users', userRoutes);
app.use('/api/v4/cars', carRoutes);
app.use('/api/v4/auctions', auctionRoutes);
app.use('/api/v4/bids', bidRoutes);

module.exports = app;
