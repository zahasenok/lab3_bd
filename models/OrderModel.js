const Sequelize  = require("sequelize");
const UUID = require('uuid-int');

module.exports = function (sequelize) {

  const Order = sequelize.define("order", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    customer_email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    delivery_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
  });

  Order.add = (customer_email, delivery_date) => {
    const id = UUID(0).uuid();
    Order.create({ id, customer_email, delivery_date})
      .then((res) => console.log(res))
      .catch(console.error);
    }

    Order.readAll = () => {
        Order.findAll()
        .then(res => console.log(res))
        .catch(err => console.error(err))     
    };

    Order.readById = (id) => {
        Order.findByPk(id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    Order.updateItem = (id, customer_email, delivery_date) => {
      Order.update({ customer_email, delivery_date }, { 
          where: { id: id } 
        })
          .then(() => console.log("Successfully updated"))
          .catch(err => console.error(err))
    }

    Order.deleteItem = (id) => {
      Order.destroy({where : {id : id}})
        .then(() => console.log('Successfully removed Order with id ', id))
        .catch(err => console.error(err))
    }
  

  console.log("\nsuccessfully generated");

  return Order;
};