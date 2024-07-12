import React from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { Footer } from "../component/Footer";

export const Home = () => {
  return (
    <>
      <section className="header__section">
        <div className="header__inner__con">
          <Nav />
          <div className="header__text__con">
            <h1 className="header__text">
              Redefining Luxury Living <span>Through Architectural </span>
              Brilliance
            </h1>
          </div>
          <div className="header__mini__text">
            <div className="consultation__con">
              <p className="consultation__text">
                we don’t just build structures; we craft experiences that
                resonate with beauty, functionality, and enduring quality.
              </p>

              <a href="" className="btn__link">
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
              </a>
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
                href="https://www.instagram.com"
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
          <div className="inner__video__con"></div>
        </div>
      </div>
      <section className="who__section">
        <div className="who__inner__con">
          <div className="who__more__info">
            <div className="who_left_con">
              <h1 className="who__head__text">Who we are</h1>
              <div className="img__con">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278165/picture_1_wqmmkw.png"
                  alt=""
                />
              </div>
            </div>

            <div className="who__text__con">
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

              <a href="" className="btn__link learn">
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
            <h1 className="project__big_t">1995</h1>
            <p>Year of Establishment</p>
          </div>
          <div className="project__info">
            <h1 className="project__big_t">190+</h1>
            <p>PROJECTS & COUNTING</p>
          </div>
          <div className="project__info final">
            <h1 className="project__big_t">31</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </section>
      <section className="our-service__section">
        <div className="our__service__con">
          <h1 className="our__service__heading">Our Services</h1>
          <div className="service__inner__con">
            <div className="service__left__con">
              <h1>Architectural Designs</h1>
              <p>
                We design spaces that blend functionality with aesthetics,
                including
              </p>
              <div className="service__image">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278166/picture_2_z64tle.png"
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
        </div>
        <div className="engineering__con">
          <div className="engineering__img">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278168/picture_3_ykcxht.png"
              alt=""
            />
          </div>
          <div className="engineering__text__con">
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
        <div className="engineering__con landscaping">
          <div className="engineering__img">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278172/picture_5_x9qxor.png"
              alt=""
            />
          </div>
          <div className="engineering__text__con">
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
        <div className="engineering__con ">
          <div className="engineering__img">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278166/picture_4_drvlfg.png"
              alt=""
            />
          </div>
          <div className="engineering__text__con">
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
          <div className="build__header">
            <h1>WHAT WE BUILD</h1>
            <a href="">
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
            <div className="big__image">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278173/picture_6_eyx5tg.png"
                alt=""
              />
            </div>
            <div className="double__Image">
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
      <Footer />
    </>
  );
};
