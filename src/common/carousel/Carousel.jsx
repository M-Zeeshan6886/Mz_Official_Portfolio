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
            <h2>WHAT THEY SAY ABOUT US</h2>
            <span>CLIENT'S</span>
            <h1>TESTIMONIALS</h1>
          </div>
          <div className={styles.client_feedback_content_bottom}>
            <div className={styles.slider_container}>
              <Slider {...settings}>
                <div>
                  <div className={styles.slideView}>
                    <div className={styles.slideView_content}>
                      <div className={styles.slideView_content_left}>
                        <img src={EWF5} alt="Photo" />
                        <h1>Phillip</h1>
                        <p>Director at Vivint Smart Home</p>
                      </div>
                      <div className={styles.slideView_content_right}>
                        <p>
                          "Hassan and his team were great to work with. They
                          helped us take an idea of I phone App and bring it to
                          life. They helped us through design functionality and
                          more.”
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
                        <h1>Geogrge Lee</h1>
                        <p>C.E.O & Founder of 247 Pro</p>
                      </div>
                      <div className={styles.slideView_content_right}>
                        <p>
                          "Peri studios took a challenge of developing a complex
                          social system with many features, marketplace, online
                          posting and integrating APIs with many platforms and a
                          robust backend panel for us.”
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
                        <h1>Davin</h1>
                        <p>C.E.O & Founder of Dr. Hr & Co</p>
                      </div>
                      <div className={styles.slideView_content_right}>
                        <p>
                          "Peri studios took a challenge of developing a complex
                          social system with many features, marketplace, online
                          posting and integrating APIs with many platforms and a
                          robust backend panel for us.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideView}>
                    <div className={styles.slideView_content}>
                      <div className={styles.slideView_content_left}>
                        <img src={EWF5} alt="Photo" />
                        <h1>Daphne Magna</h1>
                        <p>Founder of Tough Convos</p>
                      </div>
                      <div className={styles.slideView_content_right}>
                        <p>
                          "Peri studios has done a fantastic job on design. I am
                          happy to work with them for the dev side of my
                          project. Communication is fine. Highly recommended for
                          design and develop projects, Thanks!”
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
