//all express related functions
const express = require('express');
const morgan = require('morgan');

//local modules
const AppError = require('./utils/appError');
const errorHandler = require('./controllers/errorController');

const app = express();

//route handlers
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const bidRoutes = require('./routes/bidRoutes');
const auctionRoutes = require('./routes/auctionRoutes');

//middlewares
app.use(express.json()); //--gives me access to req boyd
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

//api endpoints
app.use('/api/v4/users', userRoutes);
app.use('/api/v4/cars', carRoutes);
app.use('/api/v4/auctions', auctionRoutes);
app.use('/api/v4/bids', bidRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
