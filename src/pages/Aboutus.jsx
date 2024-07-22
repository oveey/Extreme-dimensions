import React from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/aboutus.css";
import { Footer } from "../component/Footer";
import { Typewriter } from "react-simple-typewriter";

export const Aboutus = () => {
  return (
    <>
      <section className="about__header__section">
        <div className="about__inner__con">
          <Nav />
          <h1 className="about__header__text" data-aos="fade-up">
            About us
          </h1>
        </div>
      </section>
      <section className="text__under__section">
        <div className="text__under__con">
          <p className="text__under">
            <Typewriter
              words={[
                "We are more than just architects and designers — we are creators of spaces that inspire, innovate, and endure. Based in Nigeria, our full-service architectural firm integrates a deep understanding of design principles with a commitment to excellence in every project we undertake",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </p>
        </div>
      </section>
      <div className="video__section" data-aos="zoom-in-up">
        <div className="video__con">
          <div className="inner__video__con">
            <video
              controls
              width="100%"
              poster="https://res.cloudinary.com/dw3vqhvte/image/upload/v1721564673/video_tdjzbk.png"
            >
              <source src="your-video-link.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <section className="engineering__con">
        <div
          className="engineering__img company__history__img"
          data-aos="fade-up"
        >
          <h1 className="img__header">Company History</h1>
          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351324/Company_ip3ept.png"
            alt=""
          />
        </div>
        <div
          className="engineering__text__con company__history__con"
          data-aos="fade-up"
        >
          <p>
            Established with a vision to redefine architectural standards,
            Xtreme Dimensions has grown to become a trusted name in the
            industry. Our portfolio showcases a diverse range of successful
            projects across residential, commercial, and institutional sectors.
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
              </p>{" "}
              <p>Decades Of Dedication</p>
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
              </p>{" "}
              <p>Your Reliable Architects</p>
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
              </p>{" "}
              <p>Building On trust With Company </p>
            </div>
          </div>
        </div>
      </section>

      <section className="engineering__con our__mission__section">
        <div className="engineering__img our__mission__img">
          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351344/mission_yfoufr.png"
            alt=""
          />
        </div>
        <div className="engineering__text__con  our__mission__text__con ">
          <div className="our__mission__main__text" data-aos="fade-up">
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
            </p>{" "}
            <h1>Our Approach</h1>
            <p>
              We blend creativity with technical expertise to deliver bespoke
              solutions tailored to meet the unique needs of each client. From
              conceptualization to completion, we uphold the highest standards
              of craftsmanship and attention to detail.
            </p>
            <div className="our__mission__main__text">
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
              </p>{" "}
              <h1>Our Mission</h1>
              <p className="our__mission__main__text">
                To transform ordinary spaces into extraordinary environments
                that enrich lives and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="engineering__section">
        <div className="engineering__con company__history__main__con">
          <div
            className="engineering__img company__history__img"
            data-aos="fade-up"
          >
            <h1 className="img__header">Meet the team </h1>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
          </div>
          <div
            className="engineering__text__con company__history__con  meet__the__team__con"
            data-aos="fade-up"
          >
            <p>
              Our team comprises passionate architects, designers, engineers,
              and project managers who collaborate closely to deliver
              exceptional results. With a commitment to quality and attention to
              detail, we ensure each project reflects our dedication to
              craftsmanship
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
