module.exports = app => {
    const cars = require("../controllers/car-renting.controller.js");

    var router = require("express").Router();

    //Create a new Car
    router.post("/" , cars.create);

    //Retrieve all cars
    router.get("/", cars.findAll);

    //Retrieve a single car with id
    router.get("/:id" , cars.findOne);

    //update a car with id
    router.put("/:id" , cars.update);

    //delete a car with id
    router.delete("/:id" , cars.delete);

    app.use('/api/car-renting', router);
};