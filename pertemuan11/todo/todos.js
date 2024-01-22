const {generateRandomId} = require('./generateRandomId');
const fs = require('fs')
const readline = require("readline");

// membuat interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // cek file db/todo.json
  const directory = './database'
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
  
  // cek jika folder data ada, buatkan file todo.json dengan bentuk array.
  const checkFile = './database/todo.json'
  if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8');
  }
  
  const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
      rl.question(question, (answer) => {
        resolve(answer)
      });
    });
  }
// menambah data baru
  const todos = () =>{
    const fileTodos = fs.readFileSync(checkFile,'utf-8');
    const data = JSON.parse(fileTodos);
    console.log(data);
  }

  const storeTodo = (title, description, status) => {
    const id = generateRandomId(10)
    const todo = { id, title, description, status }
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file);
    dataTodos.push(todo);
    fs.writeFileSync("database/todo.json", JSON.stringify(dataTodos));
    console.log("-- Thank You for submit todos --");
    rl.close();
  }

  const getById = (id) => {
    // TODO
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === todoId);
  
    if (findTodoId) {
      console.log(findTodoId);
    } else {
      console.log(`Todo dengan ID INI ${findTodoId} tidak ditemukan.`);
    }
  
    rl.close();
  }

const updateById = (id,updateTodo) => {
  const file = fs.readFileSync(checkFile, 'utf-8');
  const dataTodos = JSON.parse(file);
  const index = dataTodos.findIndex(todo => todo.id === id);

  if(index !== -1) {
    dataTodos[index] = {...dataTodos[index],...updateTodo};
    fs.writeFileSync(checkFile,JSON.stringify(dataTodos));
    console.log("Succesfully updated todo: " + id)
  } else {
    console.log(`Todo dengan id ini ${id} tidak ditemukan`);
  }
  rl.close();
}

  const deleteById = (id) => {
  const file = fs.readFileSync(checkFile, 'utf-8');
  const dataTodos = JSON.parse(file);
  const filterTodoId = dataTodos.filter(todo => todo.id !== id);

  if (filterTodoId.length < dataTodos.length){
    fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
    console.log(`Successfully delete todo: ${id}`);
  } else {
    console.log(`Todo dengan id ini ${id} tidak ditemukan`);
  }
  rl.close();
  }



  module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    updateById,
    deleteById,
  };