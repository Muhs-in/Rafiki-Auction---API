const express = require('express');
const router = express.Router();
const auctionController = require('./../controllers/auctionController');

router
  .route('/')
  .get(auctionController.getAllAuctions)
  .post(auctionController.createAuction);
router
  .route('/:id')
  .get(auctionController.getAuction)
  .patch(auctionController.updateAuction)
  .delete(auctionController.deleteAuction);

module.exports = router;
