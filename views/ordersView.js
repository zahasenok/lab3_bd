const prompt = require('prompt-sync')({ sigint: false });
const ItemMenuView = require('./menu')

module.exports = function(entity){
    const operation = ItemMenuView.menu();
    console.log('Operation')
    switch (operation) {
        case '1':
            const email_create = prompt('Enter customer`s email : ');
            const dd_create = prompt('Enter delivery day : ')
            const mm_create = prompt('Enter delivery month : ')
            const yyyy_create = prompt('Enter delivery year : ')
            const deliveryDate_create = dd_create + '/' + mm_create + '/' + yyyy_create;
            entity.add(email_create, deliveryDate_create);
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
            const email_update = prompt('Enter customer`s email : ');
            const dd_update = prompt('Enter delivery day : ')
            const mm_update = prompt('Enter delivery month : ')
            const yyyy_update = prompt('Enter delivery year : ')
            const deliveryDate_update = dd_update + '/' + mm_update + '/' + yyyy_update;
            entity.updateItem(id_update, email_update, deliveryDate_update)
        break;
        case '5':
            const id_delete = prompt("Enter id : ");
            entity.deleteItem(id_delete)
        break;
        default:
            break;
    }
}