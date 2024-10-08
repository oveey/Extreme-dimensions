import React, { useState } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import Carousel from "../component/Carousel";
import { Footer } from "../component/Footer";
import "../styles/architecture.css";
import { images } from "../data";
import "../styles/portfolio.css";

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [tabImages, setTabImages] = useState(images);
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (tabName) => {
    if (tabName === "all") {
      setTabImages(images);
    } else if (tabName === "arch") {
      setTabImages(images.filter((archImage) => archImage.category === "arch"));
    } else if (tabName === "landscaping") {
      setTabImages(
        images.filter((landImage) => landImage.category === "landscaping")
      );
    } else if (tabName === "engineer") {
      setTabImages(
        images.filter((engImage) => engImage.category === "engineer")
      );
    } else if (tabName === "remodel") {
      setTabImages(
        images.filter((remoImage) => remoImage.category === "remodel")
      );
    }
    setActiveButton(tabName);
  };

  console.log(images);

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
            Gallery
          </h1>
        </div>
      </section>
      {/* <section className="text__under__section">
        <div className="text__under__con">
          <p className="text__under" data-aos="fade-up">
        
            From luxurious residential villas to cutting-edge commercial
            complexes, each project reflects our passion for design excellence
            and our dedication to surpassing client expectations.Explore our
            portfolio to see how we have transformed visions into reality.,
          </p>
        </div>
      </section> */}

      <section className="modal__section">
        {/* <h1 className="modal__section__heading" data-aos="fade-up">
          See All Our Completed Projects
        </h1> */}
        <div className="heading__con">
          <button
            className={`heading__btn ${activeButton === "all" ? "active" : ""}`}
            onClick={() => handleClick("all")}
          >
            Interior
          </button>
          <button
            className={`heading__btn ${
              activeButton === "landscaping" ? "active" : ""
            }`}
            onClick={() => handleClick("landscaping")}
          >
            Exterior
          </button>
          <button
            className={`heading__btn ${
              activeButton === "remodel" ? "active" : ""
            }`}
            onClick={() => handleClick("remodel")}
          >
            Foundation
          </button>
          <button
            className={`heading__btn ${
              activeButton === "engineering" ? "active" : ""
            }`}
            onClick={() => handleClick("engineering")}
          >
            Security
          </button>
          <button
            className={`heading__btn ${
              activeButton === "architectural" ? "active" : ""
            }`}
            onClick={() => handleClick("architectural")}
          >
            3D Rendering{" "}
          </button>
        </div>
        <div className="carousel__modal">
          <div className="app">
            {tabImages?.map((imageSet) => (
              <div key={imageSet.key} onClick={() => openModal(imageSet.urls)}>
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
