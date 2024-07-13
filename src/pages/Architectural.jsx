import React, { useState } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/architecture.css";
import Modal from "../component/Modal";
import Carousel from "../component/Carousel";
import { Footer } from "../component/Footer";

export const Architectural = () => {
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
          <h1 className="about__header__text">Architectural Designs</h1>
        </div>
      </section>
      <section className="text__under__section">
        <div className="text__under__con">
          <p className="text__under">
            We specialize in crafting bespoke architectural designs that
            seamlessly blend creativity, functionality, and aesthetic appeal.
            With a deep understanding of architectural principles and a
            commitment to excellence, we transform spaces into exceptional
            environments that inspire and endure.
          </p>
        </div>
      </section>

      <section className="design-section">
        <div className="design__inner__con">
          <div className="design__right__con">
            <h1>Interior Designs</h1>
            <p>
              Our interior design services are tailored to create personalized
              and functional interiors that elevate living or working spaces.
              Whether designing residential homes, commercial offices, or
              institutional settings, we focus on:
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
          </div>
          <div className="design__left__con">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
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
                <h1>Concept Development</h1>
                <p>
                  From initial sketches to detailed design plans, we
                  conceptualize interiors that align with the client's vision
                  and functional requirements.
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
                <h1>Material Selection</h1>
                <p>
                  Careful consideration of materials to enhance durability,
                  aesthetics, and sustainability, ensuring each selection
                  contributes to the overall design integrity
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
                <h1>Space Planning</h1>
                <p>
                  Optimization of layouts to maximize spatial efficiency and
                  usability, ensuring every area serves its purpose effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left">
            <h1>Exterior Designs</h1>
            <p>
              Our expertise extends to crafting captivating exteriors that
              enhance the architectural character and sustainability of
              buildings and landscapes. Key services include:
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
                <h1>Facade Design</h1>
                <p>
                  Creating visually striking facades that not only enhance curb
                  appeal but also complement the architectural style and
                  functionality of the building.
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
                <h1>Outdoor Space</h1>
                <p>
                  Designing outdoor environments that seamlessly integrate with
                  interior spaces, promoting connectivity and enhancing overall
                  property aesthetics.
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
                <h1>Sustainable Practices</h1>
                <p>
                  Incorporating eco-friendly materials and sustainable design
                  principles to minimize environmental impact while promoting
                  energy efficiency and longevity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design-section">
        <div className="design__inner__con">
          <div className="design__right__con">
            <h1>3D Rendering</h1>
            <p>
              We leverage advanced 3D rendering technology to provide realistic
              visualizations and immersive experiences of architectural designs.
              Our 3D rendering services include:
            </p>
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
          </div>
          <div className="design__left__con">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720351364/Team_zbx8gm.png"
              alt=""
            />
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
                <h1>Visualization Services</h1>
                <p>
                  Creating high-quality 3D renders that vividly portray
                  architectural concepts and design details, allowing clients to
                  visualize the final product with precision
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
                <h1>Virtual Walkthroughs</h1>
                <p>
                  Interactive presentations that enable clients to explore and
                  experience spaces virtually, providing a realistic preview
                  before construction begins.
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
        <h1 className="modal__section__heading">
          See Our Completed Project On Architectural Designs
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
