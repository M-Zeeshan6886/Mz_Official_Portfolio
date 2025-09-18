import React, { useEffect } from "react";
import { Navbar } from "../../common";
import styles from "./About.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import { EWF5, EWF7, EWF8 } from "../../assets";

const About = () => {
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.about_hero}>
        <div className={styles.about_hero_content}>
          <div className={styles.about_hero_content_left}>
            <span>Hi my name is </span>
            <h1>Muhammad Zeeshan Zafar</h1>
            <h3>
              I am a Passionate Developer with Data Enthusiasm, leveraging over
              two years of experience to drive strategic decisions and business
              growth. My expertise spans SQL, Power BI, API integration, and
              full-stack development, with a strong focus on front-end
              technologies such as HTML, CSS, Bootstrap, ReactJS, and
              JavaScript, as well as back-end development.
            </h3>
            <h3>
              I am continuously expanding my skill set, particularly in hybrid
              application development, with a focus on building scalable,
              data-driven solutions. My goal is to harness the power of data and
              technology to deliver innovative, high-impact solutions that drive
              business success.
            </h3>
            <h3>
              <b>2 years</b> of professional experience in Full Stack Developer
              || React JS || JavaScript || Bootstrap || Sass || HTML5 CSS3
              <br /> Data Analyst || Data Engineer || SQL || Power BI ||
            </h3>
            <button className={styles.animated_button}>
              <p className={styles.button_inner}>
                <MdOutlineFileDownload style={{ fontSize: "2rem" }} />
                Resume
              </p>
            </button>
          </div>
          <div className={styles.about_hero_content_right}></div>
        </div>
      </div>
      <div className={styles.experience_container}>
        <div className={styles.experience_container_content}>
          <div className={styles.experience_container_content_top}>
            <h2>Relavent</h2>
            <h1>
              <span className={styles.primaryOutline}>Experience </span>
            </h1>
          </div>
          <div className={styles.experience_container_content_bottom}>
            <ExCard
              title="Full Stack Developer"
              comName="Peri Studios -- Full-time"
              dates="DEC 2023 - Prensent 1 yr 6 mons"
              P1="E-Learning Management System | SmartaClass"
              P2="Smart Building Management System | Suren"
              P3="Rental Management System | Sand Caddie"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

const ExCard = (props) => {
  return (
    <>
      <div className={styles.excard_container}>
        <div className={styles.excard_container_content}>
          <img src={EWF5} alt="Logo" />
          <div className={styles.excard_container_content_right}>
            <h1>{props.title}</h1>
            <h3>{props.comName}</h3>
            <span>{props.dates}</span>
            <br />
            <br />
            <p>Project : {props.P1}</p>
            <p>Project : {props.P2}</p>
            <p>Project : {props.P3}</p>
            <p>Project : E-Commerce Management System | Rug Bazaar</p>
          </div>
        </div>
      </div>
    </>
  );
};
