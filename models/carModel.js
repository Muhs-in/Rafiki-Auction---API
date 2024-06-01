const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: { type: String, required: [true, 'specify make of the car'] },
  model: { type: String, required: [true, 'specify model of the car'] },
  year: {
    type: Date,
    required: [true, 'specify the year of manufacture of the car'],
  },
  bodyType: {
    type: String,
    required: true,
    validate: {
      validator: (value) => Boolean(value),
      message: 'Please specify the body type of the car.',
    },
    enum: [
      'Sedan',
      'SUV',
      'Coupe',
      'Hatchback',
      'Truck',
      'Van',
      'Motorcycle',
      'Other',
    ],
  },
  mileage: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        return value >= 0;
      },
      message: 'Mileage must be a non-negative number',
    },
  },
  engine: { type: String, required: [true, 'specify engine type'] },
  transmission: {
    type: String,
    required: [true, 'specify the transmission type'],
    enum: ['automatic', 'single-speed automatic', 'manual'],
  },
  color: { type: String, required: [true, 'specify color of the car'] },
  interiorColor: {
    type: String,
    required: [true, 'specify the interior color of the car'],
  },
  description: {
    type: String,
    required: [true, 'specify the description of the car'],
  },
  images: {
    type: [String],
    required: [true, 'specify the images of the car'],
  },
  features: {
    type: [String],
    required: true,
    enum: [
      'Airbags',
      'Air Conditioning',
      'Cruise Control',
      'Power Steering',
      'Forward Collision Warning',
      'Parking Sensors',
      'Anti-lock Braking System',
      'Power Locks',
      'Lane Departure Warning',
      'Traction Control',
    ],
  },
  damages: {
    type: [String],
    required: false,
    default: 'No damages on the car',
  },
  startingBid: {
    type: Number,
    required: [true, 'specify the starting bid amount'],
    min: 0,
  },
  auction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auction',
  },
  bids: { type: [mongoose.Schema.Types.ObjectId], ref: 'Bid' },

  sold: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
