import React, { useEffect } from "react";
import { Footer, Navbar } from "../../common";
import styles from "./About.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import { cyberLogo, eliteLogo, EWF5 } from "../../assets";

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

      <div className={styles.bulb_section}>
        <div className={styles.bulb_section_top}>
          <h1>
            WHY
            <span>I</span>
            <h2>STARTED</h2>
          </h1>
          <p>
            I'm not just about developing software. We generate breakthrough
            solutions that rewrite the digital rules by igniting creative
            encounters.{" "}
          </p>
        </div>
        <div className={styles.bulb_section_content}>
          {/* <img src={BulbFrame} alt="frame" /> */}
          <div className={styles.bulb_section_content_rw1}>
            <div className={styles.bulb_section_content_rw1_left}>
              <h1>01</h1>
              <h2>Problem</h2>
              <p>
                I'm not just about developing software. I generate breakthrough
                solutions that rewrite the digital rules by igniting creative
                encounters.{" "}
              </p>
            </div>
            <div className={styles.bulb_section_content_rw1_right}>
              <h1>03</h1>
              <h2>Framework</h2>
              <p>
                I'm not just about developing software. I generate breakthrough
                solutions that rewrite the digital rules by igniting creative
                encounters.
              </p>
            </div>
          </div>
          <div className={styles.bulb_section_content_rw1}>
            <div className={styles.bulb_section_content_rw1_left}>
              <h1>02</h1>
              <h2>Foundation of development</h2>
              <p>
                Peri Studios is not just about developing software. We generate
                breakthrough solutions that rewrite the digital rules by
                igniting creative encounters.
              </p>
            </div>
            <div className={styles.bulb_section_content_rw1_right}>
              <h1>04</h1>
              <h2>Benefits</h2>
              <p>
                Peri Studios is not just about developing software. We generate
                breakthrough solutions that rewrite the digital rules by
                igniting creative encounters.
              </p>
            </div>
          </div>
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
            <div className={styles.experience_container_content_bottom_cardBox}>
              <ExCard
                Img={EWF5}
                title="Full Stack Developer"
                comName="Peri Studios -- Full-time"
                dates="DEC 2023 - Prensent 1 yr 6 mons"
                P1="Project : E-Learning Management System | SmartaClass"
                P2="Project : Smart Building Management System | Suren"
                P3="Project : Rental Management System | Sand Caddie"
                P4="Project : E-Commerce Management System | Rug Bazaar"
                P5="Project : Service Navigation System | Peri Studios"
              />
            </div>
            <ExCard
              Img={cyberLogo}
              title="Front End Developer"
              comName="Cyber Advance Solutions -- Full-time"
              dates="Sep 2023 - Feb 2024  6 mons"
              P1="Project : OpenAI System | AI ChatBot "
              P2="Project : Service Navigation System | Portfolios"
            />
            <ExCard
              Img={eliteLogo}
              title="Internship"
              comName="Elite IT Team -- Full-time"
              dates="Feb 2023 - Aug 2023  6 mons"
              P1="Project : Service Navigation System | Elite Website "
              P2="Project : Email Signature System | Signature Website"
            />
          </div>
        </div>
      </div>
      <div className={styles.marketing_section}>
        <div className={styles.marketing_section_content}>
          <h3>MAKING THE RIGHT CHOICES</h3>
          <h1>
            <span>LET'S</span> START YOUR
          </h1>
          <h2>
            <span>DIGITAL</span> BUSINESS
          </h2>
          <div className={styles.marketing_section_content_mailBox}>
            <input type="email" placeholder="Enter your email address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

const ExCard = (props) => {
  return (
    <>
      <div className={styles.excard_container}>
        <div className={styles.excard_container_content}>
          <img src={props.Img} alt="Logo" />
          <div className={styles.excard_container_content_right}>
            <h1>{props.title}</h1>
            <h3>{props.comName}</h3>
            <span>{props.dates}</span>
            <br />
            <br />
            <p>{props.P1}</p>
            <p> {props.P2}</p>
            <p>{props.P3}</p>
            <p> {props.P4}</p>
            <p> {props.P5}</p>
          </div>
        </div>
      </div>
    </>
  );
};
