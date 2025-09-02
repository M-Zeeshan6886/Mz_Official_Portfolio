import React from "react";
import { Navbar } from "../../common";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.hero_section}>
        <div className={styles.hero_section_content}>
          <div className={styles.hero_section_content_left}>
            <h1>Muhammad Zeeshan Zafar</h1>
          </div>
          <div className={styles.hero_section_content_right}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
