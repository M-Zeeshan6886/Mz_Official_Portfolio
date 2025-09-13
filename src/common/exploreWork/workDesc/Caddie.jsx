import React from "react";
import styles from "../Explore.module.scss";
import { EWF4 } from "../../../assets";

const Caddie = () => {
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
          <h1>SandCaddie</h1>
          <p>
            Rental Management Application Created a user-friendly platform for
            managing rental bookings, deliveries, and returns. Integrated Formik
            and Yup for dynamic form validation. Designed reusable components
            for scalability while working in an agile environment.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWF4} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default Caddie;
