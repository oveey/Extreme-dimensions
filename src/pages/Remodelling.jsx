import React, { useState } from "react";
import { Nav } from "../component/Nav";
import { Footer } from "../component/Footer";
import { Link } from "react-router-dom";
import "../styles/architecture.css";
import Modal from "../component/Modal";
import Carousel from "../component/Carousel";
import { Typewriter } from "react-simple-typewriter";

export const Remodelling = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeImages, setActiveImages] = useState([]);

  const images = [
    {
      key: "set1",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio13_sfye5n.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625633/Portfolio12_nzpy9p.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625632/Portfolio11_g66x3q.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625631/Portfolio4_m7ihjd.pngg",
      ],
      mainT: "Luxurious Hotel",
      smallT: "lagos Nigeria",
    },
    {
      key: "set2",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625632/Portfolio11_g66x3q.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625629/Portfolio3_gk7p33.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625631/Portfolio4_m7ihjd.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set3",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625631/Portfolio4_m7ihjd.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625631/Portfolio4_m7ihjd.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set4",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625633/Portfolio12_nzpy9p.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set5",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625629/Portfolio2_zu5dkb.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625633/Portfolio12_nzpy9p.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set6",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625629/Portfolio17_gcsv92.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625633/Portfolio12_nzpy9p.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set7",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625636/Portfolio5_gvw6rl.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625633/Portfolio12_nzpy9p.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set8",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625635/Portfolio14_b2p3ld.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
    {
      key: "set9",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio10_ocforq.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625628/Portfolio15_ey798w.png",
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1720625634/Portfolio9_weodxk.png",
      ],
      mainT: "Beautiful Hotel",
      smallT: "lagos ,Nigeria",
    },
  ];

  const openModal = (urls) => {
    setActiveImages(urls);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className="about__header__section">
        <div className="about__inner__con">
          <Nav />
          <h1 className="about__header__text" data-aos="fade-up">
            {" "}
            Engineering Designs{" "}
          </h1>
        </div>
      </section>
      <section className="text__under__section">
        <div className="text__under__con">
          <p className="text__under" data-aos="fade-up">
            {/* <Typewriter
              words={[
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              deleteSpeed={10}
              delaySpeed={1000}
            /> */}
            Our engineering services is aimed at ensuring seamless construction
            processes and project success. With a focus on technical expertise,
            innovation, and client collaboration, we deliver reliable
            engineering solutions that meet the highest industry standards...",
          </p>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left">
            <h1>
              <span>01</span>Residential Remodeling
            </h1>
            <p>
              Our residential remodeling services are tailored to meet the
              unique needs and preferences of homeowners, enhancing living
              spaces to reflect personal style and functionality. Key services
              include
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1721678314/resident_dx1yma.png"
              alt=""
            />
          </div>
          <div className="design__two__innercon__right">
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Kitchen and Bathroom Renovations </h1>
                <p>
                  Transforming kitchens and bathrooms with modern amenities,
                  stylish fixtures, and efficient layouts to optimize
                  functionality and aesthetics.
                </p>
              </div>
            </div>
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Interior Upgrades</h1>
                <p>
                  Upgrading interior spaces with new flooring, lighting,
                  cabinetry, and finishes to enhance comfort and visual appeal.
                </p>
              </div>
            </div>
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Home Additions</h1>
                <p>
                  Designing and constructing new additions to expand living
                  areas and accommodate growing family needs while seamlessly
                  integrating with existing structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left">
            <h1>
              <span>02</span> Commercial Renovations
            </h1>
            <p>
              We specialize in revitalizing commercial spaces to optimize
              functionality, efficiency, and appeal, creating environments that
              support business objectives and enhance customer experiences.
              Services include
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1721677747/commercial_xosuot.png"
              alt=""
            />
          </div>
          <div className="design__two__innercon__right">
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Office Interiors</h1>
                <p>
                  Designing and renovating office interiors to foster
                  productivity, collaboration, and employee well-being through
                  strategic space planning and modern design concepts.
                </p>
              </div>
            </div>
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Retail Spaces</h1>
                <p>
                  Transforming retail environments with innovative layouts,
                  attractive displays, and customer-centric designs to enhance
                  brand identity and customer engagement.
                </p>
              </div>
            </div>
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Hospitality Upgrades</h1>
                <p>
                  Renovating hospitality venues such as hotels, restaurants, and
                  resorts to create inviting atmospheres that elevate guest
                  experiences and drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left">
            <h1>
              <span>03</span> Institutional Facilities
            </h1>
            <p>
              We provide renovation solutions for institutional facilities such
              as schools, healthcare facilities, and community centers, focusing
              on improving functionality, safety, and sustainability. Services
              include
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
          </div>
          <div className="design__two__innercon__right">
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1> Educational Spaces </h1>
                <p>
                  Upgrading classrooms, libraries, and administrative areas with
                  modern amenities and technology integration to support
                  learning and growth.
                </p>
              </div>
            </div>
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Healthcare Environments</h1>
                <p>
                  Enhancing healthcare facilities with patient-friendly designs,
                  efficient workflows, and infection control measures to promote
                  healing and well-being.
                </p>
              </div>
            </div>
            <div className="design__below__image__text">
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
              <div className="design__text">
                <h1>Community Spaces</h1>
                <p>
                  Renovating community centers, religious buildings, and public
                  spaces to serve the needs of diverse communities and enhance
                  social connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modal__section">
        <h1 className="modal__section__heading" data-aos="fade-up">
          See Our Completed Project On Remodeling & Renovation Designs
        </h1>
        <div className="carousel__modal">
          <div className="app">
            {images.map((imageSet) => (
              <div
                key={imageSet.key}
                onClick={() => openModal(imageSet.urls)}
                className="image__con"
              >
                {/* <img src={imageSet.urls[0]} alt="" /> */}
                <div
                  style={{ backgroundImage: `url(${imageSet.urls[0]})` }}
                  className="b__img"
                >
                  <div className="inside__image__text">
                    <h1>{imageSet.mainT}</h1>
                    <p>{imageSet.smallT}</p>
                  </div>
                </div>
              </div>
            ))}
            <Modal show={showModal} onClose={closeModal}>
              {activeImages.length > 0 && <Carousel images={activeImages} />}
            </Modal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
