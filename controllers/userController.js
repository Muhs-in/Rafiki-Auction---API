const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    //-> do later --- Hash password
    res.status(201).json({
      status: 'success',
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  if (!users) {
    next(new AppError(`There are no users`, 404));
  }
  res.status(200).json({
    status: 'success',
    data: { users },
  });
});

exports.getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    next(new AppError(`There is no user with id:${req.params.id}`, 404));
  }
  res.status(200).json({
    status: 'success',
    data: { user },
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id);
  if (!user) {
    next(new AppError(`Cannot update user with id:${req.params.id}`, 400));
  }
  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
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
