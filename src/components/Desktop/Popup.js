import React, { useEffect, useRef, useState } from "react";
import "../../styles/Popup.css"; 

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className={`popup-container ${showMessage ? "message-mode" : ""}`} ref={popupRef}>
        {!showMessage ? (
          <img
            src={`${process.env.PUBLIC_URL}/oggymeme.png`}
            className="popup-meme"
            alt="meme"
            onClick={() => setShowMessage(true)}
          />
        ) : (
          <div className="popup-message">
            <h2 className="popup-title">👀Hey! This is my digital playground!</h2>
            <p className="popup-text">
              Where bugs are investigated, features evolve, and curiosity drives everything. 🧠⚙️ 
            </p>
            <p className="popup-text">
              🚀 Go ahead. Click around. Explore. Break things(politely).
            </p>
            <button className="popup-close-btn" onClick={onClose}>
              🚀 Go Ahead!
            </button>
          </div>

        )}
      </div>
    </div>
  );
};

export default Popup;
