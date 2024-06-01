const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: [true, 'specify the auction start date'] },
  endDate: { type: Date, required: [true, 'specify the auction end date'] },

  status: {
    type: String,
    default: 'upcoming',
    enum: ['upcoming', 'active', 'complete'],
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
