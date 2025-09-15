import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets";

const Footer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_content}>
          <div className={styles.footer_container_content_left}>
            <img src={Logo} alt="logo" onClick={() => navigate("/")} />
            <p>DESIGNING YOUR VISION DEVELOPING YOUR SUCCESS</p>
            <div className={styles.footer_container_content_left_socialBox}>
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
            </div>
          </div>
          <div className={styles.footer_container_content_right}>
            <div className={styles.footer_container_content_right_links}>
              <h1>QUICK LINKS</h1>
              <div>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About Us</button>
                <button onClick={() => navigate("/mywork")}>My Work</button>
                {/* <button onClick={() => navigate("/portfolio")}>Portfolio</button> */}
                <button>Contact Us</button>
              </div>
            </div>
            <div className={styles.footer_container_content_right_services}>
              {/* Form here */}
            </div>
          </div>
        </div>
        <p className={styles.footer_container_copyright}>
          mzxeeshuu@gmail.com
        </p>
      </div>
    </>
  );
};

export default Footer;
