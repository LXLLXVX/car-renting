const db = require('../models');
const Car = db.carrenting;
const Op = db.Sequelize.Op;

// Create and save a new car
exports.create = async (req, res) => {
  if (!req.body || !req.body.model || !req.body.description) {
    return res.status(400).send({ message: "Model and description are required." });
  }

  const car = {
    model: req.body.model,
    description: req.body.description
  };

  try {
    const data = await Car.create(car);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the car."
    });
  }
};

// Show all cars from the database
exports.findAll = async (req, res) => {
  try {
    const data = await Car.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving cars."
    });
  }
};

// Find a car by its id
exports.findOne = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (car) {
      res.send(car);
    } else {
      res.status(404).send({ message: "Car not found." });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving the car."
    });
  }
};

// Update a car by its id
exports.update = async (req, res) => {
  try {
    const [updated] = await Car.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCar = await Car.findByPk(req.params.id);
      res.send(updatedCar);
    } else {
      res.status(404).send({ message: "Car not found." });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while updating the car."
    });
  }
};

// Delete a car by its id
exports.delete = async (req, res) => {
  try {
    const deleted = await Car.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.send({ message: "Car deleted successfully." });
    } else {
      res.status(404).send({ message: "Car not found." });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while deleting the car."
    });
  }
};