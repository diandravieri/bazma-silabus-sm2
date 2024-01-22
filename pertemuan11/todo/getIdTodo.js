const { getById } = require("./todos");
const { todoQuestion } = require("./todos");

const todoId = async () => {
  const id = await todoQuestion("Masukkan ID todo: ");
  getById(id);
}

todoId();