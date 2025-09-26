import React from "react";
import { Navbar } from "../../common";
import styles from "./Work.module.scss";
import { Outlet } from "react-router-dom";

const Work = () => {
  return (
    <>
      <Navbar />
      <div className={styles.work_hero}>
        <div className={styles.work_hero_content}>
          <h1>
            My <span>Work </span>
          </h1>
          <p>
            🚀 Showcasing my web development projects built with modern
            technologies. 🌐 From responsive UI/UX to dynamic applications, each
            project highlights my skills. 💡 Focused on creating clean,
            user-friendly, and impactful digital solutions.
          </p>
          <div className={styles.work_hero_content_top}>
            <button>Punt App</button>
            <button>Signature</button>
            <button>Peri Studios</button>
            <button>Rug Bazaar</button>
            <button>Sand Caddie</button>
            <button>Suren</button>
            <button>SmartaClass</button>
            <button>AI ChatBot</button>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Work;
