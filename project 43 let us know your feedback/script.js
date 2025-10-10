let feedback = "Satisfied";
const emojis = document.querySelectorAll(".emoji");
const button = document.querySelector("button");

emojis.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    feedback = emoji.querySelector("p").innerText;
    emojis.forEach((e) => {
      e.classList.remove("active");
    });
    emoji.classList.add("active");
  });
});

button.addEventListener("click", () => {
  document.body.innerHTML = `<div class="message">
      <h1>❤️</h1>
      <h3>Thank You</h3>
      <h3>FeedBack ${feedback}</h3>
      <h4></h4>
      <h4>We'll use your feedback to improve our</h4>
      <h4>Customer support</h4>
    </div>`;
});
