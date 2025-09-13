import React from "react";
import styles from "../Explore.module.scss";
import { EWB4 } from "../../../assets";

const Punt = () => {
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
          <h1>Punt – Meme Coin Dashboard</h1>
          <p>
            A React-based web application that provides real-time insights and
            filtering tools for tracking meme coins. The app features a
            responsive and modern UI built with SCSS modules, custom-styled
            components, and React Router for seamless navigation.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWB4} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default Punt;
