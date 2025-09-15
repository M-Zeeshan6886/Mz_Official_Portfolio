import React from "react";
import styles from "../Explore.module.scss";
import { EWB5 } from "../../../assets";

const PeriStudio = () => {
  return (
    <>
      <div
        className={styles.exploreWork_container_content_scroller_detailsProject}
      >
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_left
          }
        >
          <h1>Peri Studios</h1>
          <p>
            It’s a service navigation system where users can click a category,
            see its details dynamically on the same page, with smooth scrolling
            for better UX.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWB5} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default PeriStudio;
