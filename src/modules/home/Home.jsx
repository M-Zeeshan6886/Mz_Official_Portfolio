import React from "react";
import { Navbar } from "../../common";
import styles from "./Home.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import { heroBanner } from "../../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className={styles.social_container}>
        <div className={styles.social_container_content}>
          <FaGithub
            className={styles.social_icons}
            onClick={() =>
              window.open("https://github.com/M-Zeeshan6886", "_blank")
            }
          />

          <FaLinkedin
            className={styles.social_icons}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/zeeshan-zafar-b61262200/",
                "_blank"
              )
            }
          />
          <FaXTwitter
            className={styles.social_icons}
            onClick={() => window.open("https://x.com/MzXeeshuu", "_blank")}
          />
          <hr />
        </div>
      </div>
      <div className={styles.social_container2}>
        <div className={styles.social_container2_content}>
          <p>mzxeeshuu@gmail.com</p>
          <hr />
        </div>
      </div>
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
