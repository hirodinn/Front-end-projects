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

