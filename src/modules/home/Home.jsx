import React from "react";
import { Navbar } from "../../common";
import styles from "./Home.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import { heroBanner } from "../../assets";

const Home = () => {
    
  return (
    <>
      <Navbar />
      <div className={styles.hero_section}>
        <div className={styles.hero_section_content}>
          <div className={styles.hero_section_content_left}>
            <span>Hi my name is </span>
            <h1>Muhammad Zeeshan Zafar</h1>
            <p>I am a Full Stack Developer.</p>
            <button className={styles.animated_button}>
              <p className={styles.button_inner}>
                <MdOutlineFileDownload style={{ fontSize: "2rem" }} />
                Resume
              </p>
            </button>
          </div>
          <div className={styles.hero_section_content_right}>
            <img src={heroBanner} alt="heroBanner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
