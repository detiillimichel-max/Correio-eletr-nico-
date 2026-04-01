import { useState } from 'react';

export const ChatInput = () => {
  const [text, setText] = useState('');

  return (
    <div className="chat-input-area">
      <div className="chat-pill">
        <button className="icon-btn"><i className="fas fa-plus"></i></button>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Sua vibe..." 
        />
        <div className="icon-group">
          <button className="icon-btn"><i className="fas fa-microphone"></i></button>
          <button className="icon-btn" onClick={() => window.open('https://meet.google.com/new')}><i className="fas fa-video"></i></button>
        </div>
      </div>
      <button className="send-button"><i className="fas fa-paper-plane"></i></button>
    </div>
  );
};
