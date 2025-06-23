// Ensure code runs after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  const line = document.getElementById("line");
  let angle = 0;

  // Continuously rotate the line
  setInterval(() => {
    angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
  }, 20);
});

// Highlight all <strong> elements in green
function highlight() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(el => {
    el.style.color = 'rgb(0, 128, 0)';
  });
}

// Revert all <strong> elements to black
function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(el => {
    el.style.color = 'rgb(0, 0, 0)';
  });
}
