const fs = require('fs');

async function createFile() {
    try {
        await fs.promises.writeFile('File.txt', 'Hi! There');
        console.log('File has been created successfully');
    }
    catch (error){
        console.error('Error while creating file ', error);
    }
}
createFile();