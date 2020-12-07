const prompt = require('prompt-sync')({ sigint: true });

const menu = () => {
    console.clear()
    console.log('1. Create\n2. Read\n3. Read By ID \n4. Update \n5. Delete')
    return prompt();
}

module.exports = {menu : menu};