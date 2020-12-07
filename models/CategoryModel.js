const Sequelize  = require("sequelize");
const UUID = require('uuid-int');

module.exports = function (sequelize) {

  const Category = sequelize.define("category", {
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
  });

  Category.add = (name) => {
    const id = UUID(0).uuid();
    Category.create({ id, name })
      .then((res) => console.log(res))
      .catch(console.error);
    }

    Category.readAll = () => {
        Category.findAll()
        .then(res => console.log(res))
        .catch(err => console.error(err))     
    };

    Category.readById = (id) => {
        Category.findByPk(id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    Category.updateCategory = (id, name) => {
      Category.update({ name, availability, price }, { 
          where: { id: id } 
        })
          .then(() => console.log("Successfully updated"))
          .catch(err => console.error(err))
    }

    Category.deleteCategory = (id) => {
      Category.destroy({where : {id : id}})
        .then(res => console.log('Successfully removed Category with id ', id))
        .catch(err => console.error(err))
    }
  

  console.log("\nsuccessfully generated");

  return Category;
};