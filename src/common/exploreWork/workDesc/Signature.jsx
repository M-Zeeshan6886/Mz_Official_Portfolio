import React from "react";
import styles from "../Explore.module.scss";
import { EWB4, EWF8 } from "../../../assets";

const Signature = () => {
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
          <h1>Email Signature Design Platform</h1>
          <p>
            Designed and developed a responsive web interface that allows users
            to create personalized email signatures. The platform features
            multiple modern, professional signature templates with customizable
            layouts, social media integration, and contact details. Focused on
            user-friendly design, accessibility, and clean visual hierarchy to
            ensure a seamless experience for both personal and business use.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWF8} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default Signature;
