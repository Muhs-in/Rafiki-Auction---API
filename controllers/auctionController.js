const Auction = require('./../models/auctionModel');

exports.createAuction = async (req, res) => {
  try {
    const auction = await Auction.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { auction },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.status(200).json({
      status: 'success',
      data: { auctions },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.getAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { auction },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.updateAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { auction },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.deleteAuction = async (req, res) => {
  try {
    await Auction.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
