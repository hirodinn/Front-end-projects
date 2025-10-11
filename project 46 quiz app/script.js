class GenerateQuestion {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

const questions = [
  new GenerateQuestion(
    "Which language runs in a web browser?",
    ["Java", "C", "Pyhon", "JavaScript"],
    "3"
  ),
  new GenerateQuestion(
    "What does CSS stand for?",
    [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    "1"
  ),
  new GenerateQuestion(
    "What does HTML stand for?",
    [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    "0"
  ),
  new GenerateQuestion(
    "What year was Javascript launched?",
    [1996, 1995, 1994, "none of the above"],
    "1"
  ),
];

let current = 0;
let score = 0;
const container = document.querySelector(".container");


