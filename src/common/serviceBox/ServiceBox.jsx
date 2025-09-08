import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./ServiceBox.module.scss";

const ServiceBox = ({ ImgIcon, title, para, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={styles.flipCard}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}
        <div className={styles.sBox}>
          <div className={styles.sBox_content}>
            <img src={ImgIcon} alt="Icons" className={styles.serviceIcons} />
            <h1>{title}</h1>
          </div>
        </div>

        {/* Back Side */}
        <div className={`${styles.sBox} ${styles.back}`}>
          <div className={styles.sBox_content}>
            <h1>{title}</h1>
            <p></p>
            <p>{backContent || `${para}`}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ServiceBox;
