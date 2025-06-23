const line = document.getElementById("line");
let angle = 0;

setInterval(() => {
  angle += 2;
  line.style.transform = `rotate(${angle}deg)`;
}, 20);

// highlight bold words
function highlight() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(el => {
    el.style.color = 'rgb(0, 128, 0)'; // Green
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(el => {
    el.style.color = 'rgb(0, 0, 0)'; // Black
  });
}