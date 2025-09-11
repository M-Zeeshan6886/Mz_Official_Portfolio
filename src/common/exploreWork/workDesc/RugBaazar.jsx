import React from "react";
import styles from "../Explore.module.scss";
import { EWB1 } from "../../../assets";

const RugBaazar = () => {
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
          <h1>RUG BAZAAR</h1>
          <p>
            Rug Bazaar is a specialized e-commerce platform designed for users
            in the UK to explore and purchase a wide variety of rugs. Developed
            by Pero Studios, the platform offers an extensive selection of
            high-quality rugs, ranging from traditional to contemporary designs,
            ensuring that customers find the perfect piece to enhance their
            homes. The website features secure and seamless payment flows,
            providing a smooth and enjoyable shopping experience.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWB1} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default RugBaazar;
