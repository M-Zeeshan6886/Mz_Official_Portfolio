import React, { useEffect } from "react";
import { Navbar } from "../../common";
import styles from "./About.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";

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
    </>
  );
};

export default About;
