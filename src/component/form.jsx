import React, { useState } from 'react';
import '../styles/form.css';

const FormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-popup-container">
      <button className="open-popup-btn" onClick={togglePopup}>
        Open Form
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-popup-btn" onClick={togglePopup}>
              &times;
            </button>
            <form className="popup-form">
              <h2>Contact Us</h2>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Message:
                <textarea name="message"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
