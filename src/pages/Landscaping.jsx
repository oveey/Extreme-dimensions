import React, { useState } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import Carousel from "../component/Carousel";
import { Footer } from "../component/Footer";
import "../styles/architecture.css";
import { images } from "../data";



export const Landscaping = () => {
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
          <h1 className="about__header__text">Landscaping</h1>
        </div>
      </section>
      <section className="text__under__section">
        <div className="text__under__con">
          <p className="text__under">
          At Xtreme Dimensions, we specialize in creating captivating outdoor spaces that enhance the aesthetic appeal, functionality, and sustainability of environments. Our landscaping services      </p>
        </div>
      </section>

      <section className="design__two">
        <div className="design__two__innercon">
          <div className="design__two__innercon__left">
            <h1><span>01</span> Landscape Design</h1>
            <p>
            Landscape design services focus on creating tailored outdoor environments that complement architectural designs and enrich the overall aesthetic appeal of properties. Key features include:            </p>
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
                <h1>Conceptual Design </h1>
                <p>
                Developing innovative and sustainable landscape concepts that harmonize with architectural styles and client preferences.
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
                <h1>Plant Selection</h1>
                <p>
                Expert selection of flora and fauna to enhance biodiversity, promote sustainability, and create visually appealing landscapes.
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
                <h1>Hardscape Design</h1>
                <p>
                Integrating durable and aesthetically pleasing hardscape elements such as pathways, patios, and retaining walls to define and enhance outdoor spaces.
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
                <h1>Water Features</h1>
                <p>
                Designing and integrating water features such as ponds, fountains, and waterfalls to add tranquility and visual interest to outdoor environments.
                </p>
              </div>

              
            </div>
            
          </div>
        </div>
      </section>

      <section className="modal__section">
        <h1 className="modal__section__heading">
          See Our Completed Project On Landscaping Designs
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
