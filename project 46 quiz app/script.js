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

function choosed() {
  const radios = document.querySelectorAll("input");
  let check;
  radios.forEach((radio) => {
    if (radio.checked) check = radio;
  });
  return check;
}

function loadContainer() {
  container.innerHTML = `<h2>${questions[current].question}</h2>
      <form>
        <input type="radio" name="choice" value="0" />
        <label>${questions[current].choices[0]}</label>
        <br />
        <input type="radio" name="choice" value="1" />
        <label>${questions[current].choices[1]}</label>
        <br />
        <input type="radio" name="choice" value="2" />
        <label>${questions[current].choices[2]}</label>
        <br />
        <input type="radio" name="choice" value="3" />
        <label>${questions[current].choices[3]}</label>
      </form>
      <button>Submit</button>`;
  loadEventListenerButton();
}

function loadEventListenerButton() {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const answered = choosed();
    console.log(answered.value);
    if (answered) {
      if (answered.value === questions[current].answer) {
        score++;
        console.log("correct");
      }
      current++;
      if (current === 4) loadFinal();
      else loadContainer();
    }
  });
}


