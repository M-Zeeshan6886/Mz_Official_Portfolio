import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { IoLogoWhatsapp } from "react-icons/io";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("name is Required"),
  });
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
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                }}
                validate={{
                  email: "",
                  name: "",
                }}
              >
                {(formik) => (
                  <div>
                    <Form>
                      <FormInput
                        label="Name"
                        name="name"
                        type="text"
                        place="Enter your name"
                      />
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        place="Enter your email"
                      />
                    </Form>
                  </div>
                )}
              </Formik>
              <div
                className={
                  styles.footer_container_content_right_services_innerContent
                }
              >
                <label for="textarea">Message</label>
                <textarea id="textarea" required></textarea>
                <button className={styles.btnSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.footer_container_copyright}>
          mzxeeshuu@gmail.com ||{" "}
          <IoLogoWhatsapp className={styles.social_icons} /> +923085433524
        </p>
      </div>
    </>
  );
};

export default Footer;
