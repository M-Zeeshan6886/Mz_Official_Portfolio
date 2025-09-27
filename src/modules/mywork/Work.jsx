import React from "react";
import { Navbar } from "../../common";
import styles from "./Work.module.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

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
            <button
              onClick={() => navigate("/mywork")}
              className={currentPath === "/mywork" ? styles.active : ""}
            >
              Punt App
            </button>
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
