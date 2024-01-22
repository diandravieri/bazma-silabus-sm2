const { generateRandomId } = require('./generateIdPayment');
const fs = require('fs');
const readline = require("readline");

// membuat interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// cek file database/payment.json
const directory = './database';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

// cek jika folder data ada, buatkan file payment.json dengan bentuk array.
const checkFile = './database/payment.json';
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8');
}

const admin = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}



// menambah data baru
const todos = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const addIdPayment = (username, game, item, amount, idgame, pay, notes) => {
    const id = generateRandomId(3);

    // Konversi amount dan idgame ke tipe data number
    const amountNumber = Number(amount);
    const idgameNumber = Number(idgame);

    const todo = { id, username, game, item, amount: amountNumber, idgame: idgameNumber, pay, notes };
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file);
    dataTodos.push(todo);
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
    console.log(`-- Thank you for ordering [${item}], id payment ${id}, with username[${username}] and id game ${idgame}]! We are very excited to pack your order. Don't forget to check out our shop for more shopping, OK! --`);
    rl.close();
};



const getById = (id) => {
    // payment id
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id);

    if (findTodoId) {
        console.log(findTodoId);
    } else {
        console.log(`Payment id dengan ID INI ${id} tidak ditemukan.`);
    }

    rl.close();
}
// update id 
const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id);
  
    if (index !== -1) {
      dataTodos[index] = { ...dataTodos[index], ...updateTodo };
      fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
      console.log("Successfully updated id payment: " + id);
    } else {
      console.log(`Payment id dengan id ini ${id} tidak ditemukan`);
    }
  
    rl.close();
  }
  
  const findById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    return dataTodos.find(todo => todo.id === id);
  }


const deleteById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const filterTodoId = dataTodos.filter(todo => todo.id !== id);

    if (filterTodoId.length < dataTodos.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
        console.log(`Successfully delete id payment dengan id : ${id}`);
    } else {
        console.log(`Id payment dengan id ini ${id} tidak ditemukan`);
    }
    rl.close();
}

// menampilkan semua Data base
const getDatabase = () => {
    const readData = fs.readFileSync(checkFile, 'utf-8');
    const todos = JSON.parse(readData);
    console.log(todos);
    rl.close();
}

module.exports = {
    admin,
    todos,
    addIdPayment,
    updateById,
    deleteById,
    getById,
    getDatabase,
    findById
};
