// Array of messages to display
const messages = [
    "Heeeyyyyyyyy Jonas... 🌸✨",
    "You really have a way of making a woman feel seen 😘",
    "It's attractive how you care for women effortlessly ❤️",
    "The event is $100 (The one on Sunday). 😭",
    "You don't want my pretty face behind bars 😭 do you?",
    "But only *if* you're nice to me first... 😘",
    "Byeeeeeeeeee 💜💜",
    "Your Dick between my hands.......😁😩"
  ];
  
  let currentIndex = 0;
  
  // DOM Elements
  const speechBubble = document.getElementById("speech-bubble");
  const nextButton = document.getElementById("next-btn");
  const refreshButton = document.getElementById("refresh-btn");
  
  // Function to update the speech bubble text
  function updateSpeech() {
    speechBubble.textContent = messages[currentIndex];
  }
  
  // Event listener for the "Next" button
  nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < messages.length) {
      updateSpeech();
    } else {
      // Display end message and show the refresh button
      speechBubble.textContent = "This is the end of the presentation, Daddy! 🤤";
      nextButton.style.display = "none";
      refreshButton.style.display = "inline-block";
    }
  });
  
  // Event listener for the "Refresh" button
  refreshButton.addEventListener("click", () => {
    currentIndex = 0;
    updateSpeech();
    nextButton.style.display = "inline-block";
    refreshButton.style.display = "none";
  });
  
  // Initialize the speech bubble with the first message
  updateSpeech();
  