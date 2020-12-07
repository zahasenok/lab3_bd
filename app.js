const MainMenuView = require('./views/mainMenu');
const Sequelize = require("sequelize");
const config = {
    "dialect" :"postgres"
    }
const sequelize = new Sequelize("lab3", "postgres", "postgres", config);

sequelize.sync()
  .then()
  .catch(console.error);

MainMenuView.mainMenu(sequelize)