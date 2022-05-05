// const os = require("os");
// const memory = os.freemem();
// console.log(memory);
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Quel est ton age ?");
rl.on("line", (input) => {
  input = parseInt(input, 10);
  if (input >= 18) {
    console.log("Tu peux rentrer dans le bar! Amuse toi bien!");
  } else {
    console.log("Désolé tu es trop jeune, tu rentre chez ta mère!!");
  }
  rl.close();
});
