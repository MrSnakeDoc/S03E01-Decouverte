const readline = require("readline");
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const questions = [
  "Quel est ton prénom ?",
  "Quel est ton nom ?",
  "Quelle est ton adresse ?",
  "Quel est ton code postal ?",
  "Quelle est ta ville ?",
  "Quel est ton numéro de tel ?",
];
const answers = [
  `Ton prenom est `,
  `Ton nom est `,
  `Ton adresse est `,
  `Ton code postal est `,
  `Ta ville est `,
  `Ton numéro de tel est `,
];
let fullAnswers = [];
(async () => {
  for (const [index, item] of questions.entries()) {
    // asking question one by one
    fullAnswers.push(
      await new Promise((resolve) => {
        rl.question(item, (answer) => {
          console.log(answers[index] + answer);
          resolve(answers[index] + answer);
        });
      })
    );
  }

  // close at the end
  rl.close();

  console.log(fullAnswers);
})();
