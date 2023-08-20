const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Function to display a message in the chatbox
function displayMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle user input and chatbot responses
function handleUserInput() {
  const userMessage = userInput.value;
  displayMessage('You', userMessage);

  // Replace this logic with your custom chatbot logic
  // For this example, we'll respond with a fixed message
//   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];
  const chatbotResponse = 'Hi! I am your chatbot. How can I help you today?';
  // var chatbotResponse ='';
//     switch (chatbotResponse) {
//         case 'Hi':
//             chatbotResponse = 'Hi! How are you'
//             break;
//         case 'who created you?':
//             chatbotResponse = 'Great Team at XSEED Education'
//             break;
//         case 'what is your name':
//             chatbotResponse = 'I am Virtual Agent!'
//             break;    
//         case 'Do you know coding':
//             chatbotResponse = 'I am new and still learning'
//             break;
//         case 'what day is today':
//             chatbotResponse =  day  
//             break;         
//         default:
//             chatbotResponse = 'Sorry I am not able to understand'
//             break;
//     }
  setTimeout(() => {
    displayMessage('ChatBot', chatbotResponse);
  }, 500);

  userInput.value = ''; // Clear user input after handling
}

// Add event listener for user input
userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
