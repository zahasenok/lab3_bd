const Sequelize  = require("sequelize");
const UUID = require('uuid-int');

module.exports = function (sequelize) {

  const Department = sequelize.define("department", {
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

  Department.add = (name) => {
    const id = UUID(0).uuid();
    Department.create({ id, name })
      .then((res) => console.log(res))
      .catch(console.error);
    }

    Department.readAll = () => {
        Department.findAll()
        .then(res => console.log(res))
        .catch(err => console.error(err))     
    };

    Department.readById = (id) => {
        Department.findByPk(id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    Department.updateDepartment = (id, name) => {
      Department.update({ name, availability, price }, { 
          where: { id: id } 
        })
          .then(() => console.log("Successfully updated"))
          .catch(err => console.error(err))
    }

    Department.deleteDepartment = (id) => {
      Department.destroy({where : {id : id}})
        .then(res => console.log('Successfully removed Department with id ', id))
        .catch(err => console.error(err))
    }
  

  console.log("\nsuccessfully generated");

  return Department;
};