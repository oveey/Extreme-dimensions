import React, { useState } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/architecture.css";
import Modal from "../component/Modal";
import Carousel from "../component/Carousel";
import { Footer } from "../component/Footer";
import { Typewriter } from "react-simple-typewriter";

export const Engineering = () => {
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
            Remodeling & Renovation{" "}
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
            At Xtreme Dimensions, we also specialize in transforming existing
            spaces into modern, functional, and aesthetically pleasing
            environments through our remodeling and renovation services. Whether
            enhancing residential homes, commercial properties, or institutional
            facilities, we focus on delivering innovative solutions that exceed
            client expectations..
          </p>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left" data-aos="fade-up">
            <h1>
              <span>01</span> Site Mapping and Drafting
            </h1>
            <p>
              Our site mapping and drafting services lay the foundation for
              precise project execution and planning. Key features include
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1721680199/Site_mapping_1_kzivdc.png"
              alt=""
            />
          </div>
          <div className="design__two__innercon__right" data-aos="fade-up">
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
                <h1>Topographic Surveys </h1>
                <p>
                  Conducting detailed surveys to map terrain and assess site
                  conditions, facilitating accurate project planning and design.
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
                <h1>Drafting Services</h1>
                <p>
                  Providing detailed architectural and engineering drawings that
                  serve as blueprints for construction, ensuring clarity and
                  precision in project execution.
                </p>
              </div>
            </div>
            {/* <div className="design__below__image__text">
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
                <h1>Space Planning</h1>
                <p>
                  Optimization of layouts to maximize spatial efficiency and
                  usability, ensuring every area serves its purpose effectively.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left" data-aos="fade-up">
            <h1>
              <span>02</span> Construction Management
            </h1>
            <p>
              We specialize in expert construction management services that
              optimize project efficiency and ensure quality outcomes. Our
              services include
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
          </div>
          <div className="design__two__innercon__right" data-aos="fade-up">
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
                <h1>Project Planning and Scheduling</h1>
                <p>
                  Developing comprehensive project plans and schedules that
                  outline milestones, timelines, and resource allocation,
                  ensuring projects stay on track and within budget.
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
                <h1>Contract Administration</h1>
                <p>
                  Managing contracts and subcontractors to ensure compliance
                  with project specifications and regulatory requirements,
                  fostering a collaborative and streamlined construction
                  process.
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
                <h1>Quality Control and Assurance</h1>
                <p>
                  Implementing rigorous quality control measures to monitor
                  construction progress, mitigate risks, and maintain the
                  highest standards of craftsmanship and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left" data-aos="fade-up">
            <h1>
              <span>03</span> Structural Engineering
            </h1>
            <p>
              Our structural engineering expertise encompasses the design and
              analysis of building structures to ensure structural integrity and
              safety. Services include
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1721679343/Structural_ybqvwc.png"
              alt=""
            />
          </div>
          <div className="design__two__innercon__right" data-aos="fade-up">
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
                <h1>Structural Analysis</h1>
                <p>
                  Conducting detailed structural analysis using advanced
                  methodologies to assess load-bearing capacities and optimize
                  structural design.
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
                <h1>Foundation Design</h1>
                <p>
                  Designing robust and stable foundations tailored to
                  site-specific conditions and project requirements, ensuring
                  long-term structural stability and durability.
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
                <h1>Design Validation</h1>
                <p>
                  Ensuring design accuracy and feasibility through detailed 3D
                  models, facilitating informed decision-making and project
                  planning.reating interior spaces that reflect style and
                  purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modal__section">
        <h1 className="modal__section__heading" data-aos="fade-up">
          See Our Completed Project On Engineering Construction
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
