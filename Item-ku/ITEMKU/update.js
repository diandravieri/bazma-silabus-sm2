const { updateById, findById, admin } = require("./sistem");

const validateInput = (input) => {
  return input.trim() !== "";
};

const update = async () => {
  let id;
  let existingRecord;

  do {
    id = await admin("Input your id payment: ");

    // Validate if the id exists in the database
    existingRecord = findById(id);
    if (!existingRecord) {
      console.log("Invalid id. Record not found.");

      const retry = await admin("Do you want to retry? (yes/no): ");
      if (retry.toLowerCase() !== "yes") {
        console.log("Update operation canceled.");
        process.exit();
      }
    }
  } while (!existingRecord);

  // Variables to update
  const fieldsToUpdate = [
    "username",
    "game",
    "item",
    "amount",
    "idgame",
    "payment method",
    "notes for seller"
  ];

  const updates = {};

  for (const newupdate of fieldsToUpdate) {
    const updateField = await admin(`Do you want to update ${newupdate}? (yes/no): `);

    if (updateField.toLowerCase() === "yes") {
      const value = await admin(`Input new value for ${newupdate}: `);

      // Validasi input
      if (validateInput(value)) {
        updates[newupdate] = value;
      } else {
        console.log(`Invalid input for ${newupdate}. Please make sure the field is filled.`);
        process.exit();
      }
    }
  }

  // Call updateById with the selected fields to update
  updateById(id, updates);
  
};

update();
const test = "test git hub";
