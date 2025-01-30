// Get elements
const heyThere = document.getElementById('heyThere');
const ummMessage = document.getElementById('ummMessage');
const countdownElement = document.getElementById('countdown');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseMessage = document.getElementById('responseMessage');
const noButton = document.getElementById('noButton');

// Show "Umm... 🥺" after 3 seconds
setTimeout(() => {
  heyThere.style.display = 'none'; // Hide "Hey there"
  ummMessage.classList.remove('hidden'); // Show "Umm... 🥺"

  // Start countdown after "Umm... 🥺" appears
  setTimeout(() => {
    ummMessage.style.display = 'none'; // Hide "Umm... 🥺"
    countdownElement.classList.remove('hidden'); // Show countdown

    let countdown = 10;
    const countdownInterval = setInterval(() => {
      countdown--;
      countdownElement.textContent = countdown;

      if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownElement.style.display = 'none'; // Hide countdown
        valentineQuestion.classList.remove('hidden'); // Show Valentine question
      }
    }, 1000);
  }, 3000); // Wait 3 seconds before starting countdown
}, 3000); // Wait 3 seconds before showing "Umm... 🥺"

// Button logic
document.getElementById('yesButton').addEventListener('click', function() {
  responseMessage.classList.remove('hidden');
  valentineQuestion.classList.add('hidden'); // Hide buttons after clicking
});

// Make the "No" button escape when hovered over
noButton.addEventListener('mouseover', function() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
});