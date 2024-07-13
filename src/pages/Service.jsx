import React from "react";
import { Nav } from "../component/Nav";
import "../styles/service.css";
import { useState } from "react";
import { Consult } from "../component/ Consult";
import { Footer } from "../component/Footer";

export const Service = () => {
  return (
    <>
      <section className="about__header__section">
        <div className="about__inner__con">
          <Nav />
          <h1 className="about__header__text"> Our Service</h1>
        </div>
      </section>
      <section className="text__under__section">
        <div className="text__under__con">
          <p className="text__under">
            We offer a comprehensive range of architectural and design services
            tailored to meet the diverse needs of our clients. Our integrated
            approach combines creativity, technical expertise, and client
            collaboration to deliver innovative and sustainable solutions.
          </p>
        </div>
      </section>
      <section className="triple__image__section"></section>
      <section className="service__section">
        <div className="service__inner">
          <div className="service__text__con">
            <h1>
              <span>01</span> Architectural Designs
            </h1>
            <div className="service__text__tb">
              <p>
                We specialize in crafting bespoke architectural designs that
                seamlessly blend creativity, functionality, and aesthetic
                appeal. With a deep understanding of architectural principles
                and a commitment to excellence, we transform spaces into
                exceptional environments that inspire and endure.
              </p>
              <a href="/architectural" className="btn__link">
                <div className="btn service__btn">
                  <p>Learn more architecture</p>
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
                  </p>{" "}
                </div>
              </a>
            </div>
          </div>
          <div className="service__box__con">
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Interior Designs</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Exterior Designs</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>3D Rendering</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service__inner">
          <div className="service__text__con">
            <h1>
              <span>02</span> Engineering
            </h1>
            <div className="service__text__tb">
              <p>
                Our engineering services is aimed at ensuring seamless
                construction processes and project success. With a focus on
                technical expertise, innovation, and client collaboration, we
                deliver reliable engineering solutions that meet the highest
                industry standards.
              </p>
              <a href="/engineering" className="btn__link">
                <div className="btn service__btn">
                  <p>Learn more on engineering </p> 
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
                  </p>                </div>
              </a>
            </div>
          </div>
          <div className="service__box__con">
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Site mapping and Drafting</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Construction Management</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Structural Engineering</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service__inner">
          <div className="service__text__con">
            <h1>
              <span>03</span> Landscaping
            </h1>
            <div className="service__text__tb">
              <p>
                we specialize in creating captivating outdoor spaces that
                enhance the aesthetic appeal, functionality, and sustainability
                of environments. Our landscaping services integrate creativity,
                technical expertise, and environmental stewardship to transform
                outdoor areas into harmonious and inviting landscapes.
              </p>
              <a href="/landscaping" className="btn__link">
                <div className="btn service__btn">
                  <p>Learn more on landscaping</p>
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
                  </p>                </div>
              </a>
            </div>
          </div>
          <div className="service__box__con">
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Interior Designs</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Interior Designs</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Interior Designs</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service__inner">
          <div className="service__text__con">
            <h1>
              <span>04</span> Remodeling & Renovation
            </h1>
            <div className="service__text__tb">
              <p>
                We also specialize in transforming existing spaces into modern,
                functional, and aesthetically pleasing environments through our
                remodeling and renovation services. Whether enhancing
                residential homes, commercial properties, or institutional
                facilities, we focus on delivering innovative solutions that
                exceed client expectations..
              </p>
              <a href="/remodeling" className="btn__link">
                <div className="btn service__btn">
                  <p>Learn more on remodeling </p>
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
                  </p>                </div>
              </a>
            </div>
          </div>
          <div className="service__box__con">
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Residential Remodeling</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Commercial Renovations</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
            <div className="service__box__content">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720459717/image_1_c5imb8.png"
                alt=""
              />
              <div className="content">
                <h1>Institutional Facilities</h1>
                <p>
                  Our interior design services are tailored to create
                  personalized and functional interiors that elevate living or
                  working spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Consult />
      <Footer />
    </>
  );
};
