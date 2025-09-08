import React from "react";
import { Navbar, ServiceBox } from "../../common";
import styles from "./Home.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  heroBanner,
  SIcon1,
  SIcon2,
  SIcon3,
  SIcon4,
  SIcon5,
  SIcon6,
} from "../../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Explore from "../../common/exploreWork/Explore";

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
      <div className={styles.service_container}>
        <div className={styles.service_container_content}>
          <div className={styles.service_container_content_top}>
            <h2>Expertise In</h2>
            <h1>
              These <span className={styles.primaryOutline}>Technologies </span>
            </h1>
            <p>
              I'm not just about developing software. I generate breakthrough
              solutions that rewrite the digital rules by igniting creative
              encounters. Let's collaborate to create innovative experiences
              that surpass expectations.
            </p>
          </div>
          <div className={styles.service_container_content_bottom}>
            <ServiceBox
              ImgIcon={SIcon1}
              title="React JS"
              para="Build scalable, responsive web apps with reusable components and smooth user experiences."
            />
            <ServiceBox
              ImgIcon={SIcon2}
              title="JavaScript"
              para="Write clean, modern JavaScript to power fast, interactive, and reliable applications. "
            />
            <ServiceBox
              ImgIcon={SIcon3}
              title="Bootstrap"
              para="Create responsive, consistent layouts that look great across all devices."
            />
            <ServiceBox
              ImgIcon={SIcon4}
              title="HTML5"
              para="Craft clean, accessible designs with structured code and modern styling."
            />
            <ServiceBox
              ImgIcon={SIcon5}
              title="CSS3"
              para="Craft clean, accessible designs with structured code and modern styling."
            />
            <ServiceBox
              ImgIcon={SIcon6}
              title="SASS"
              para="Craft clean, accessible designs with structured code and modern styling."
            />
          </div>
        </div>
      </div>
      <Explore />
    </>
  );
};

export default Home;


