import React from 'react'
require('./vs.css')
function VA() {
  return (
    <div>
        <div class="chatbot-container">
    <div class="chatbox">
      <div id="chat-messages"></div>
      <input type="text" id="user-input" placeholder="Type your message..." />
    </div>
    <script src={require('./vs')}></script>
  </div>
    </div>
  )
}

export default VA