const prompt = require('prompt-sync')({ sigint: false });
const ItemMenuView = require('./menu')

module.exports = function(entity){
    const operation = ItemMenuView.menu();
    console.log('Operation')
    switch (operation) {
        case '1':
            const name_create = prompt('Enter name : ');
            const availability_create = prompt('Enter availability : ');
            const price_create = prompt("Enter price : ");
            entity.add(name_create, availability_create, price_create);
            break;
        case '2':
            entity.readAll();
        break;
        case '3':
            const id_pk = prompt('Enter ID : ');
            entity.readById(id_pk);
        break;
        case '4':
            const id_update = prompt("Enter id : ");
            const name_update = prompt('Enter name : ');
            const availability_update = prompt('Enter availability : ');
            const price_update = prompt('Enter price : ');
            entity.updateItem(id_update, name_update, availability_update, price_update)
        break;
        case '5':
            const id_delete = prompt("Enter id : ");
            entity.deleteItem(id_delete)
        break;
        default:
            break;
    }
}