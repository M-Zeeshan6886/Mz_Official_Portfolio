import React from "react";
import styles from "../Explore.module.scss";
import { EWB3 } from "../../../assets";

const Suren = () => {
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
          <h1>Suren</h1>
          <p>
            The Smart Building Management System is an advanced platform
            designed to streamline device, zone, and lighting management within
            modern infrastructures. Built with React.js and SCSS modules, the
            system provides an intuitive interface for managing devices,
            doors/gates, zones, and lighting systems with ease.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWB3} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default Suren;
