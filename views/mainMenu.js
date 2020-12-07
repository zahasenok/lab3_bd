const prompt = require('prompt-sync')();
const ItemModel = require('../models/ItemModel');
const ItemsView = require('./itemsView')
const CategoryModel = require('../models/CategoryModel')
const CategoriesView = require('./categoriesView')
const DepartmentModel = require('../models/DepartmentModel')
const DepartmentsView = require('./departmentsView')
const OrderModel = require('../models/OrderModel')
const OrdersView = require('./ordersView');
const { exit } = require('process');


const mainMenu = (sequelize) => {
    console.log('1. Items\n2. Categories\n3. Departments\n4. Orders')
    const operation = prompt();
    switch (operation) {
        case '1':
            console.clear();
            ItemsView(ItemModel(sequelize));
        break;
        case '2':
            console.clear();
            CategoriesView(CategoryModel(sequelize));
        break;

        case '3':
            console.clear();
            DepartmentsView(DepartmentModel(sequelize));
        break;

        case '4':
            console.clear();
            OrdersView(OrderModel(sequelize))
        break;
        default:
            exit();
    }
}

module.exports = { mainMenu : mainMenu } 
