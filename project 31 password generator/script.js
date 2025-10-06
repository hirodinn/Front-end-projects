const upperCaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const lowerCaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["/", "?", "<", ">", "{", "}", "|", "@", "!", "&"];

const generateButton = document.querySelector(".generate-password");
const passwordText = document.querySelector(".password-text");
generateButton.addEventListener("click", () => {
  const upperCaseCheck = document.querySelector(".uppercase").checked;
  const lowerCaseCheck = document.querySelector(".lowercase").checked;
  const numbersCheck = document.querySelector(".number").checked;
  const symbolsCheck = document.querySelector(".symbols").checked;

  let range = [];
  if (upperCaseCheck) range.push(upperCaseLetters);
  if (lowerCaseCheck) range.push(lowerCaseLetters);
  if (numbersCheck) range.push(numbers);
  if (symbolsCheck) range.push(symbols);
  if (!range.length) return;

  const len = document.querySelector(".length input").value;
  let password = "";
  let quotas = assignQuota(range.length, len);

  for (let i = 0; i < len; i++) {
    let current = returnRandom(0, range.length);
    password += range[current][returnRandom(0, range[current].length)];
    quotas[current]--;
    if (quotas[current] === 0) {
      quotas.splice(current, 1);
      range.splice(current, 1);
    }
  }

  passwordText.innerText = password;
});

function returnRandom(start, end) {
  return start + Math.floor(Math.random() * (end - start));
}

function assignQuota(n, total) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(1);
  }
  total -= n;
  for (let i = 0; i < n && total > 0; i++) {
    let rand = returnRandom(0, total + 1);
    arr[i] += rand;
    total -= rand;
  }
  arr[arr.length - 1] += total;
  return arr;
}

const copyButton = document.querySelector(".icon");
copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(passwordText.innerText)
    .then(() => alert("Copied to clipboard!"))
    .catch((err) => console.error("Failed to copy:", err));
});

