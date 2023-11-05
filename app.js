/* document.getElementById("count-el").innerText = 6; //html changed by the code in JS without touching or clicking anything */

/* const choices = [1, 3, 5, 6, 12, 7];
const randomIndex = 0 + Math.floor(Math.random() * choices.length);
newRandomNumber = choices[randomIndex]; */
let count = 0;

function increment() {
  /* document.getElementById("count-el").innerText = 6; */
  count = count + 1;
  document.getElementById("count-el").innerText = count;
}
function save() {
  document.getElementById("save-el").innerText = count;
  document.getElementById("count-el").innerText = 0;
}
