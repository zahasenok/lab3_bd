const Sequelize  = require("sequelize");
const UUID = require('uuid-int');

module.exports = function (sequelize) {

  const Item = sequelize.define("item", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    availability: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
  });

  Item.add = (name, availability, price) => {
    const id = UUID(0).uuid();
    Item.create({ id, name, availability, price})
      .then((res) => console.log(res))
      .catch(console.error);
    }

    Item.readAll = () => {
        Item.findAll()
        .then(res => console.log(res))
        .catch(err => console.error(err))     
    };

    Item.readById = (id) => {
        Item.findByPk(id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    Item.updateItem = (id, name, availability, price) => {
      Item.update({ name, availability, price }, { 
          where: { id: id } 
        })
          .then(() => console.log("Successfully updated"))
          .catch(err => console.error(err))
    }

    Item.deleteItem = (id) => {
      Item.destroy({where : {id : id}})
        .then(res => console.log('Successfully removed item with id ', id))
        .catch(err => console.error(err))
    }
  

  console.log("\nsuccessfully generated");

  return Item;
};