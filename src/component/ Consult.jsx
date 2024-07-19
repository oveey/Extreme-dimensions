import React, { useState } from "react";
import "../styles/consult.css";
import { Link } from "react-router-dom";

export const Consult = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to server or perform client-side validation
    console.log("Form submitted with:", { name, email, message });
    // You can add further logic for handling form submission, like sending data to an API

    // Close the popup after submission
    closePopup();
  };
  return (
    <>
      <section className="consult__section">
        <div className="consult" data-aos="zoom-in-up">
          <h1>Ready to work with us now ? </h1>
          <h3>Schedule a free consultation with us now</h3>
          <div onClick={openPopup} className="btn consult__btn">
            <p>Book a Free Consultation</p>
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                width="22"
                height="22"
              >
                <path
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup__overlay">
          <div className="popup">
            <div className="popup__form__con">
              <div className="popup__header">
                <h2>Book a Free Consultation</h2>
                <button onClick={closePopup} className="close__btn">
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="consultation__form">
                <div className="Popup__main">
                  <div className="pop__input__con">
                    <div className="name__form">
                      <label htmlFor="fname">First-name</label> <br />
                      <input type="text" name="" id="fname" />
                    </div>
                    <div className="name__form">
                      <label htmlFor="lname">Last-name</label> <br />
                      <input type="text" name="" id="lname" />
                    </div>
                  </div>
                  <div className="pop__input__con">
                    <div className="name__form">
                      <label htmlFor="num">Phone number</label> <br />
                      <input type="number" name="" id="num" />
                    </div>
                    <div className="name__form">
                      <label htmlFor="add">Address</label> <br />
                      <input type="address" name="" id="add" />
                    </div>
                  </div>
                  <div className="pop__input__con">
                    <div className="name__form">
                      <label htmlFor="num">Date and time</label> <br />
                      <input type="number" name="" id="num" />
                    </div>
                    <div className="name__form">
                      <label htmlFor="add">Type of consultation</label> <br />
                      <input type="address" name="" id="add" />
                    </div>
                  </div>
                  <div className="pop__input__con__single">
                    <label htmlFor="">Optional</label>
                    <br />
                    <input type="text" />
                  </div>
                </div>
                <div className="pop__message__con">
                  <div className="pop__text__area__con">
                    <label htmlFor="message">Message</label> <br />
                    <textarea
                      name=""
                      id="message"
                      cols="10"
                      rows="20"
                    ></textarea>
                  </div>
                  <button className="form__btn pop_btn">
                    <p>Send Message</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="20"
                      height="20"
                    >
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
