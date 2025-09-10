import React from "react";
import styles from "./Explore.module.scss";
import { EWF1 } from "../../assets";

const Explore = () => {
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
            //   onClick={() => navigate("/")}
            //   className={currentPath === "/" ? styles.active : ""}
            />
            <img
              src={EWF1}
              alt="Frame"
            //   onClick={() => navigate("/")}
            //   className={currentPath === "/" ? styles.active : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
