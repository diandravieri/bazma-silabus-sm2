const { addIdPayment, updateById, deleteById, getById, getDatabase, admin } = require("./sistem");

const showMenu = async () => {
  console.log("=== Home ===");
  console.log("1. Add Record");
  console.log("2. Update Record");
  console.log("3. Delete Record");
  console.log("4. Get Record by ID");
  console.log("5. Get All Records");
  console.log("6. Exit");

  const choice = await admin("Choose an option (1-6): ");
  return choice;
};

const home = async () => {
  let choice;

  do {
    choice = await showMenu();

    switch (choice) {
      case "1":
        await addIdPayment();
        break;
      case "2":
        await updateById();
        break;
      case "3":
        await deleteById();
        break;
      case "4":
        await getById();
        break;
      case "5":
        await getDatabase();
        break;
      case "6":
        console.log("Exiting...");
        process.exit();
      default:
        console.log("Invalid choice. Please choose a number from 1 to 6.");
    }
  } while (choice !== "6");
};

home();
