const {getById,admin}  = require("./sistem");


const todoId = async () => {
  const id = await admin("Masukkan paymentID: ");
  getById(id);
}

todoId();