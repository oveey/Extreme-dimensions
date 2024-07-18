import React, { useEffect, useState } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { Consult } from "../component/ Consult";
import { Footer } from "../component/Footer";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

export const Home = () => {
  const [CounterOn, setCounterOn] = useState(false); // Initialize state

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

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  return (
    <>
      <section className="header__section">
        <div className="header__inner__con">
          <Nav />
          <div className="header__text__con">
            <h1 className="header__text">
              <Typewriter
                words={[
                  "Redefining Luxury Living Through Architectural Brilliance",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>

          <div className="header__mini__text">
            <div
              className="consultation__con"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <p className="consultation__text">
                We don’t just build structures; we craft experiences that
                resonate with beauty, functionality, and enduring quality.
              </p>

              <button onClick={openPopup} className="btn__link">
                <div className="btn">
                  <p>Book a Free Consultation</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="22"
                      height="22"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
              </button>
            </div>
            <div className="socials__icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304488/Facebook_wthbhy.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304509/Twitter_qsgqcb.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/xtremedimension/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304498/Instagram_vlkpa4.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="video__section">
        <div className="video__con">
          <div className="inner__video__con">
            <video controls width="100%">
              <source src="your-video-link.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <section className="who__section">
        <div className="who__inner__con">
          <div className="who__more__info">
            <div className="who_left_con" data-aos="fade-up">
              <h1 className="who__head__text">Who We Are</h1>
              <div className="img__con">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278165/picture_1_wqmmkw.png"
                  alt=""
                />
              </div>
            </div>

            <div
              className="who__text__con"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <p className="who__info__text">
                Xtreme Dimensions is a leading architectural firm based in
                Nigeria, specializing in creating exceptional spaces that blend
                creativity with practicality. We are dedicated to transforming
                visions into reality through innovative design solutions and
                meticulous craftsmanship. Our integrated approach combines
                architecture, interiors, engineering, and landscaping to deliver
                innovative and sustainable solutions. At Xtreme Dimensions, we
                don’t just build structures; we craft experiences that resonate
                with beauty, functionality, and enduring quality.
              </p>

              <a href="service" className="btn__link learn">
                <div className="btn who_link">
                  <p>Learn more about us</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="22"
                      height="22"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="projects__section">
        <div className="projects__con">
          <div className="project__info">
            <h1 className="project__big_t">
              <CountUp start={0} end={1995} duration={5} />
            </h1>
            <p>YEAR OF ESTABLISHMENT</p>
          </div>
          <div className="project__info">
            <h1 className="project__big_t">
              <CountUp start={0} end={5000} duration={5} />
            </h1>
            <p>PROJECTS & COUNTING</p>
          </div>
          <div className="project__info final">
            <h1 className="project__big_t">
              <CountUp start={0} end={30} duration={5} />
            </h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </section>
      <section className="our-service__section">
        <div className="our__service__con">
          <h1 className="our__service__heading">Our Services</h1>
          <div className="engineering__con landscaping">
            <div className="engineering__img" data-aos="fade-up">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278172/picture_5_x9qxor.png"
                alt=""
              />
            </div>
            <div className="engineering__text__con" data-aos="fade-up">
              <h1>Architectural Designs</h1>
              <p>
                We design spaces that blend functionality with aesthetics,
                including
              </p>
              <div className="list__con">
                <div className="list__item">
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                    >
                      <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>Interior Designs</p>
                </div>
                <div className="list__item">
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                    >
                      <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>Exterior Designs</p>
                </div>
                <div className="list__item">
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                    >
                      <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>3D Rendering </p>
                </div>
              </div>
              <a href="Engineering" className="btn__link learn">
                <div className="btn who_link">
                  <p>Learn more </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="22"
                      height="22"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="service__inner__con">
            {/* <div className="service__left__con">
              <h1>Architectural Designs</h1>
              <p>
                We design spaces that blend functionality with aesthetics,
                including
              </p>
              <div className="service__image">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278168/picture_3_ykcxht.png"
                  alt=""
                />
              </div>
            </div>
            <div className="service__right__con">
              <div className="service__image">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278166/picture_2_z64tle.png"
                  alt=""
                />
              </div>
              <div className="list__con">
                <div className="list__item">
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                    >
                      <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>Interior Designs</p>
                </div>
                <div className="list__item">
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                    >
                      <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>Exterior Designs</p>
                </div>
                <div className="list__item">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                    >
                      <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>3D Rendering</p>
                </div>
              </div>
              <a href="Architectural" className="btn__link learn">
                <div className="btn who_link">
                  <p>Learn more </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="22"
                      height="22"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </div> */}
          </div>
        </div>
        <div className="engineering__con">
          <div className="engineering__img" data-aos="fade-up">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278172/picture_5_x9qxor.png"
              alt=""
            />
          </div>
          <div className="engineering__text__con" data-aos="fade-up">
            <h1>Engineering</h1>
            <p>
              We provide reliable engineering solutions for seamless
              construction processes, focusing on
            </p>
            <div className="list__con">
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Site mapping and drafting</p>
              </div>
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Construction</p>
              </div>
            </div>
            <a href="Engineering" className="btn__link learn">
              <div className="btn who_link">
                <p>Learn more </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="22"
                    height="22"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="engineering__con landscaping">
          <div className="engineering__img" data-aos="fade-up">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278172/picture_5_x9qxor.png"
              alt=""
            />
          </div>
          <div className="engineering__text__con" data-aos="fade-up">
            <h1>Landscaping</h1>
            <p>
              Our expertise extends to outdoor spaces, enhancing environments
              through landscaping
            </p>
            <div className="list__con">
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Conceptual Design</p>
              </div>
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Plant Selection</p>
              </div>
            </div>
            <a href="Landscaping" className="btn__link learn">
              <div className="btn who_link">
                <p>Learn more </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="22"
                    height="22"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="engineering__con ">
          <div className="engineering__img" data-aos="fade-up">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278166/picture_4_drvlfg.png"
              alt=""
            />
          </div>
          <div className="engineering__text__con" data-aos="fade-up">
            <h1>Remodeling and Renovations</h1>
            <p>We transform existing spaces into modern, functional areas.</p>
            <div className="list__con">
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Institutional Facilities</p>
              </div>
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Commercial Renovations</p>
              </div>
              <div className="list__item">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <circle cx="12" cy="12" r="9.75" fill="#E7E7E7" />
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M15.61 10.186a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p>Residential Remodeling</p>
              </div>
            </div>
            <a href="" className="btn__link learn">
              <div className="btn who_link">
                <p>Learn more </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="22"
                    height="22"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="build__section">
        <div className="build__inner__con">
          <div className="build__header" data-aos="fade-down">
            <h1>WHAT WE BUILD</h1>
            <a href="/portfolio">
              <div className="btn">
                <p>View our portfolio</p>
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
            </a>
          </div>
          <div className="build__image__con">
            <div
              className="big__image"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278173/picture_6_eyx5tg.png"
                alt=""
              />
            </div>

            <div className="double__Image" data-aos="fade-up">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278172/picture_8_ysqijx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278169/picture_7_fiox2t.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Consult />
      <Footer />

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
