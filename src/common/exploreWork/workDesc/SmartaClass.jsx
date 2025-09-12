import React from "react";
import styles from "../Explore.module.scss";
import { EWB2 } from "../../../assets";

const SmartaClass = () => {
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
          <h1>SmartaClass</h1>
          <p>
            Smarta E_Learning Management System Interactive & Customizable:
            Smarta delivers user-friendly e-learning experiences tailored to
            diverse needs. Diverse Features: Includes live courses, skill
            training, and multi-language support for global users. Efficient
            Tools: Offers course management, real-time collaboration, and
            progress tracking. AI-Driven: Ensures engaging learning with
            responsive design and smart insights.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWB2} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default SmartaClass;
