import React from "react";
import styles from "../Work.module.scss";
import { EWB3 } from "../../../assets";

const SurenDec = () => {
  return (
    <>
      <div className={styles.dec_container}>
        <h1>Smart Building Management System</h1>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_left}>
            <img src={EWB3} alt="" />
          </div>
          <div className={styles.dec_container_content_right}></div>
        </div>
      </div>
    </>
  );
};

export default SurenDec;
