const Car = require('../models/carModel');

exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newCar,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: 'success',
      results: cars.length,
      data: { cars },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      car,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      data: { updatedCar },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
