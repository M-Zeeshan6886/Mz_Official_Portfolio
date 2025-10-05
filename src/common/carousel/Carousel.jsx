import React from "react";
import styles from "./Carousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cyberLogo, eliteLogo, EWF5 } from "../../assets";
// import { Client1, Client2, Client3, Client4 } from "../../assets";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    //     appendDots: dots => (
    //       <div>
    //         <ul style={{ margin: "0px" }}> {dots} </ul>
    //       </div>
    //     ),
    //     customPaging: i => (
    //       <div className={styles.customDot}></div>
    //     ),
  };

  return (
    <>
      <div className={styles.client_feedback}>
        <div className={styles.client_feedback_content}>
          <div className={styles.client_feedback_content_top}>
            <h2>Relavent</h2>
            <span>Experience</span>
            {/* <h1>TESTIMONIALS</h1> */}
          </div>
          <div className={styles.client_feedback_content_bottom}>
            <div className={styles.slider_container}>
              <Slider {...settings}>
                <div>
                  <div className={styles.slideView}>
                    <div className={styles.slideView_content}>
                      <div className={styles.slideView_content_left}>
                        <img src={EWF5} alt="Photo" />
                      </div>
                      <div className={styles.slideView_content_right}>
                        <h1>Full Stack Developer</h1>
                        <h3>Peri Studios -- Full-time</h3>
                        <span>DEC 2023 - Prensent 1 yr 6 mons</span>
                        <p>
                          E-Learning Management System, Smart Building
                          Management System, Rental Management System,
                          E-Commerce Management System & Service Navigation
                          System
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideView}>
                    <div className={styles.slideView_content}>
                      <div className={styles.slideView_content_left}>
                        <img src={cyberLogo} alt="Photo" />
                      </div>
                      <div className={styles.slideView_content_right}>
                        <h1>Front End Developer</h1>
                        <h3>Cyber Advance Solutions -- Full-time</h3>
                        <span>Sep 2023 - Feb 2024 6 mons</span>
                        <p>
                          OpenAI System | AI ChatBot & Service Navigation System
                          | Portfolios
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideView}>
                    <div className={styles.slideView_content}>
                      <div className={styles.slideView_content_left}>
                        <img src={eliteLogo} alt="Photo" />
                      </div>
                      <div className={styles.slideView_content_right}>
                        <h1>Internship</h1>
                        <h3>Elite IT Team -- Full-time</h3>
                        <span>Feb 2023 - Aug 2023 6 mons</span>
                        <p>
                          Service Navigation System | Elite Website, Email
                          Signature System | Signature Website
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
