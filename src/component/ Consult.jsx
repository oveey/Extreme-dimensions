import React from "react";
import "../styles/consult.css";
import { Link } from "react-router-dom";

export const Consult = () => {
  return (
    <>
      <section className="consult__section">
        <div className="consult">
          <h1>Ready to work with us now ? </h1>
          <h3>Schedule a free consultation with us now</h3>
          <a href="">
              <div className="btn consult__btn">
                <p>Book a Free Consultation</p>
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
      </section>
    </>
  );
};
