import React, { useEffect, useState } from 'react';
import './welcome.css';

const messages = [
  'Welcome to our official website for toys',
  "Don't miss the offer, register today",
  "This is maybe your last chance, don't miss it",
];

const Welcome = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;

    if (isTyping) {
      const fullText = messages[currentMessageIndex];
      if (displayedText.length < fullText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 200);
      } else {
        setIsTyping(false);
        erasingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, 3000);
      }
    } else {
      if (displayedText.length > 0) {
        erasingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        }, 100);
      } else {
        setIsTyping(true);
        setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [displayedText, isTyping, currentMessageIndex]);

  return (
    <div className="welcome-container">
      <div className="welcome-text">{displayedText}</div>
    </div>
  );
};

export default Welcome;
