import React from "react";
import styles from "../Work.module.scss";
import { DecWorkFrame1, EWB3 } from "../../../assets";

const SurenDec = () => {
  return (
    <>
      <div className={styles.dec_container}>
        <h1>Smart Building Management System</h1>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_left}>
            <img src={EWB3} alt="" />
          </div>
          <div className={styles.dec_container_content_right}>
            <h1>Suren</h1>
            <p>
              The Smart Building Management System is an advanced platform
              designed to streamline device, zone, and lighting management
              within modern infrastructures. Built with React.js and SCSS
              modules, the system provides an intuitive interface for managing
              devices, doors/gates, zones, and lighting systems with ease.
            </p>
          </div>
        </div>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_right}>
            <h1>Building</h1>
            <p>
              The Smart Building Management System features an Add New Building
              module that allows users to effortlessly register and manage new
              building entries. Through this feature, users can input key
              details such as building name, floors, elevator count, lighting,
              and door systems.
            </p>
          </div>
          <div className={styles.dec_container_content_left}>
            <img src={DecWorkFrame1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SurenDec;
