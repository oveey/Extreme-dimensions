import React from "react";
import { Nav } from "../component/Nav";
import "../styles/contact.css";
import { Footer } from "../component/Footer";

export const Contact = () => {
  return (
    <>
      <section className="about__header__section">
        <div className="about__inner__con">
          <Nav />
          <div className="contact__header__text__con">
            <h1 className="about__header__text  contact__header">
              Contact us Today for your next project
            </h1>
            <p>
              Call or submit our online form to request an estimate or for
              general questions about U.S. Certified Contractors and our
              services. We look forward to serving you!
            </p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <div className="form__container">
          <div className="form__main">
            <form action="">
              <div className="input__con">
                <div className="name__form">
                  <label htmlFor="">First-name</label> <br />
                  <input type="text" name="" id="" />
                </div>
                <div className="name__form">
                  <label htmlFor="">Last-name</label> <br />
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="input__con">
                <div className="name__form">
                  <label htmlFor="">Phone number</label> <br />
                  <input type="text" name="" id="" />
                </div>
                <div className="name__form">
                  <label htmlFor="">Address</label> <br />
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="text__area__con">
                <label htmlFor="">Message</label> <br />
                <textarea name="" id="" cols="300" rows="18"></textarea>
              </div>
              <button className="form__btn">
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
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720912394/Google_Maps_Widget_nmh5hb.png"
              alt=""
            />
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
              <p>No. 3 Dan Bassey Strt. Uyo.</p>
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
              <p>08033555805</p>
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

              <p>Xtremedimensions16@gmail.com</p>
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
