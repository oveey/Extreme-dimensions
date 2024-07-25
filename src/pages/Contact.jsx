import React, { useState } from "react";
import { Nav } from "../component/Nav";
import "../styles/contact.css";
import { Footer } from "../component/Footer";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_rue705e";
    const templateId = "template_f6obubi";
    const publicKey = "3aqOKs-aknVY0-1-8";

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "ovgraphic1@gmail.com",
        message: message,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setLastName("");
      setEmail("");
      setAddress("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="about__header__section">
        <div className="about__inner__con">
          <Nav />
          <div
            className="contact__header__text__con"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="about__header__text  contact__header">Contact us</h1>
            <p>Contact us Today for your next project !!</p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <div
          className="form__container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="form__main">
            <form onSubmit={handleSubmit}>
              <div className="input__con">
                <div className="name__form">
                  <label htmlFor="fname">First-name</label> <br />
                  <input
                    type="text"
                    id="fname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="name__form">
                  <label htmlFor="lname">Last-name</label> <br />
                  <input
                    type="text"
                    id="lname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__con">
                <div className="name__form">
                  <label htmlFor="num">Phone number</label> <br />
                  <input
                    type="text"
                    id="num"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="name__form">
                  <label htmlFor="add">Address</label> <br />
                  <input
                    type="text"
                    id="add"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="text__area__con">
                <label htmlFor="message">Message</label> <br />
                <textarea
                  id="message"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="form__btn">
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
            </form>
          </div>

          <div className="social__info__con">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.422084537781!2d7.930685574603667!3d5.03510003866872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57be8c2100ed%3A0xf591310c584c7b3c!2sPaul%20Bassey%20St%2C%20Uyo%20520103%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1721089920342!5m2!1sen!2sng"
              max-width="600"
              width="100%"
              height="300vh"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <a
              href="https://maps.app.goo.gl/Yf4MEbQBEFwZipKp6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720912394/Google_Maps_Widget_nmh5hb.png"
                alt="Google Maps"
              />
            </a> */}

            <div className="social__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="Social__title">
                <h4>Address</h4>
                <p> Address No. 3 Dan Bassey Strt. Uyo.</p>
              </div>
            </div>
            <div className="social__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="Social__title">
                <h4>Phone</h4>
                <p>08033555805</p>
              </div>
            </div>
            <div className="social__info">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="22"
                  height="22"
                >
                  <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                  <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                </svg>
              </p>

              <div className="Social__title">
                <h4>Gmail</h4>
                <p>Xtremedimensions16@gmail.com</p>
              </div>
            </div>
            {/* <div className="social__info">
              <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>
              </p>
              <p>@xtremedimension</p>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
