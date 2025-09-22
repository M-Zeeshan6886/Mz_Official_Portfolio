import React from "react";
import { Navbar } from "../../common";
import styles from "./Work.module.scss";

const Work = () => {
  return (
    <>
      <Navbar />
      <div className={styles.work_hero}>
        <div className={styles.work_hero_content}>
          <h1>
            My <span>Work </span>
          </h1>
          
        </div>
      </div>
    </>
  );
};

export default Work;
