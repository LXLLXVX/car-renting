const { DESCRIBE } = require("sequelize/lib/query-types");

module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define('Car', {
    model: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return Car;
};