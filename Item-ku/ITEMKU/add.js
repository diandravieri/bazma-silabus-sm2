const { addIdPayment, admin } = require("./sistem");

const validateNonEmptyInput = (input) => {
  const isValid = input.trim() !== "";
  if (!isValid) {
    console.log("Invalid input. Please enter a non-empty value.");
  }
  return isValid;
};

const validateNumberInput = (input) => {
  const isValid = /^\d+$/.test(input);
  if (!isValid) {
    console.log("Please enter number..");
  }
  return isValid;
};

const addID = async () => {
  const username = await getInput("Input your username: ");
  const game = await getInput("Input your Game Category: ");
  const item = await getInput("Choose what you want to buy: ");
  const amount = await getNumberInput("How much do you want to buy?(numbers qty only): ");
  const idgame = await getNumberInput("Input your Id game (only id numbers): ");
  const pay = await getInput("Select payment method: ");
  const notes = await getInput("Note to seller: ");

  // Add validation for each input
  if (
    validateNonEmptyInput(username) &&
    validateNonEmptyInput(game) &&
    validateNonEmptyInput(item) &&
    validateNumberInput(amount) &&
    validateNumberInput(idgame) &&
    validateNonEmptyInput(pay) &&
    validateNonEmptyInput(notes)
  ) {
    addIdPayment(username, game, item, amount, idgame, pay, notes);
  } else {
    console.log("Invalid input. Please make sure all fields are filled and have valid formats.");
  }
};

const getInput = async (prompt) => {
  let input;
  do {
    input = await admin(prompt);
  } while (!validateNonEmptyInput(input));
  return input;
};

const getNumberInput = async (prompt) => {
  let input;
  do {
    input = await admin(prompt);
  } while (!validateNumberInput(input));
  return input;
};

addID();
