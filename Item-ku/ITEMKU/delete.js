const { deleteById, findById, admin } = require('./sistem');

const deleteTodo = async () => {
  let id;
  let existingRecord;

  do {
    id = await admin("Masukkan id todo yang ingin di hapus:");

    // Validasi apakah id tersebut ada di database
    existingRecord = findById(id);
    if (!existingRecord) {
      console.log("Invalid id. Record not found.");

      const retry = await admin("Do you want to retry? (yes/no): ");
      if (retry.toLowerCase() !== "yes") {
        console.log("Delete operation canceled.");
        process.exit();
      }
    }
  } while (!existingRecord);

  deleteById(id);
};

deleteTodo();
