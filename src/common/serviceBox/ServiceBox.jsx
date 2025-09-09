import React from "react";
import styles from "./ServiceBox.module.scss";

const ServiceBox = ({ ImgIcon, title, para, backContent }) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        {/* Front */}
        <div className={`${styles.sBox} ${styles.front}`}>
          <div className={styles.sBox_content}>
            <img src={ImgIcon} alt="Icons" className={styles.serviceIcons} />
            <h1>{title}</h1>
          </div>
        </div>

        {/* Back */}
        <div className={`${styles.sBox} ${styles.back}`}>
          <div className={styles.sBox_content}>
            <h1>{title}</h1>
            <p>{backContent || para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
