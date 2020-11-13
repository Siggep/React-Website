import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>We live to enable dreams,</span>
            </div>
            <div className="line">
              <span>what is your dream?</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/about-us">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
