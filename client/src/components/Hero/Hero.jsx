import React from "react";
import "./Hero.scss";
import { AiOutlineCheckCircle} from 'react-icons/ai';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__top">Special Offer Now $10</div>
        <div className="hero__bottom">
          <div className="hero__bottom__left">
            <h2>BEST WEB HOSTING SERVER</h2>
            <h3>CREATE YOUR DOMAIN STARTED</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="hero__bottom__left__span">
                <div className="hero__bottom__left__span_1">
                    <AiOutlineCheckCircle style={{color:"white"}}/>Summo tamquam.
                </div>
                <div className="hero__bottom__left__span_1">
                    <AiOutlineCheckCircle/>Summo tamquam.
                </div>
                <div className="hero__bottom__left__span_1">
                    <AiOutlineCheckCircle/>Summo tamquam.
                </div>
                <div className="hero__bottom__left__span_1">
                    <AiOutlineCheckCircle/>Summo tamquam.
                </div>
            </div>
            <button>STARTED NOW</button>
          </div>
          <div className="hero__bottom__right">
            <img
              src="https://preview.colorlib.com/theme/drimo/drimo/img/banner/server-shap.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
