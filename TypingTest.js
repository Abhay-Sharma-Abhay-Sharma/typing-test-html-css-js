let timer;
let timeLeft = 180; // 3 minutes in seconds
let typingStarted = false;

const quote = document.getElementById('quote');
const inputBox = document.getElementById('inputBox');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');

startBtn.addEventListener('click', function() {
  startTypingTest();
});

submitBtn.addEventListener('click', function() {
  endTypingTest();
});

function startTypingTest() {
  const quotes = [
    'The quick brown fox jumps over the lazy dog',
    'Practice makes perfect',
    'Abhay is a very good Person',
    'Jai Mahakal , Jai Shree Ram'
    // Add more quotes as needed
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];

  startBtn.style.display = 'none';
  submitBtn.style.display = 'block';
  inputBox.disabled = false;
  inputBox.focus();

  timer = setInterval(function() {
    timeLeft--;
    if (timeLeft <= 0) {
      endTypingTest();
    }
  }, 1000);

  typingStarted = true;
}

function endTypingTest() {
  clearInterval(timer);
  inputBox.disabled = true;
  startBtn.style.display = 'block';
  submitBtn.style.display = 'none';
  typingStarted = false;
  timeLeft = 180; // Reset time for the next test

  // Your logic to check the typed text against the displayed text and provide feedback can go here
  const typedText = inputBox.value.trim();
  const displayedText = quote.textContent.trim();
  if (typedText === displayedText) {
    feedback.textContent = 'Correct!';
  } else {
    feedback.textContent = 'Incorrect!';
  }
  inputBox.value = '';
  quote.textContent = '';
}
