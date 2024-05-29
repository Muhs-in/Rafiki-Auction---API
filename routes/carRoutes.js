const express = require('express');
const router = express.Router();
const carController = require('./../controllers/carController');

router.route('/').get(carController.getAllCars).post(carController.createCar);
router
  .route('/:id')
  .get(carController.getCar)
  .patch(carController.updateCar)
  .delete(carController.deleteCar);

module.exports = router;
