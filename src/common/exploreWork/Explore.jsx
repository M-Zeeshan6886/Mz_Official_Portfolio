import React from "react";
import styles from "./Explore.module.scss";
import { EWF1, EWF2, EWF3, EWF4, EWF5, EWF6, EWF7, EWF8 } from "../../assets";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className={styles.exploreWork_container}>
        <div className={styles.exploreWork_container_content}>
          <span>MY PORTFOLIO</span>
          <h1>
            <span>EXPLORE</span> <h2>MY</h2> WORK
          </h1>
          <div className={styles.exploreWork_container_content_scroller}>
            <img
              src={EWF1}
              alt="Frame"
              onClick={() => navigate("/")}
              className={currentPath === "/" ? styles.active : ""}
            />
            <img
              src={EWF4}
              alt="Frame"
              onClick={() => navigate("/caddie")}
              className={currentPath === "/caddie" ? styles.active : ""}
            />
            <img
              src={EWF3}
              alt="Frame"
              onClick={() => navigate("/suren")}
              className={currentPath === "/suren" ? styles.active : ""}
            />
            <img
              src={EWF2}
              alt="Frame"
              onClick={() => navigate("/smartaclass")}
              className={currentPath === "/smartaclass" ? styles.active : ""}
            />
            <img
              src={EWF6}
              alt="Frame"
              onClick={() => navigate("/aichatbot")}
              className={currentPath === "/aichatbot" ? styles.active : ""}
            />
            <img
              src={EWF7}
              alt="Frame"
              //   onClick={() => navigate("/")}
              //   className={currentPath === "/" ? styles.active : ""}
            />
            <img
              src={EWF8}
              alt="Frame"
              //   onClick={() => navigate("/")}
              //   className={currentPath === "/" ? styles.active : ""}
            />
            <img
              src={EWF5}
              alt="Frame"
              //   onClick={() => navigate("/")}
              //   className={currentPath === "/" ? styles.active : ""}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Explore;
