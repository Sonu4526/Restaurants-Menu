const Sequelize = require('sequelize');

var sequelize = new Sequelize("mywork", "root", " ", {
    host: "localhost",
    dialect: "mysql",
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;