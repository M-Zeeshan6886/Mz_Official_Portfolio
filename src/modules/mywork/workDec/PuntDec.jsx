import React from "react";
import styles from "../Work.module.scss";
import {
  DecWorkFrame1,
  DecWorkFrame2,
  DecWorkFrame4,
  DecWorkFrame5,
  EWB3,
  EWB4,
} from "../../../assets";

const PuntDec = () => {
  return (
    <>
      <div className={styles.dec_container}>
        <h1>Punt – Meme Coin Dashboard</h1>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_left}>
            <img src={EWB4} alt="" />
          </div>
          <div className={styles.dec_container_content_right}>
            <h1>Punt</h1>
            <p>
              A React-based web application that provides real-time insights and
              filtering tools for tracking meme coins. The app features a
              responsive and modern UI built with SCSS modules, custom-styled
              components, and React Router for seamless navigation.
            </p>
          </div>
        </div>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_right}>
            <h1>Meme Coins</h1>
            <p>
              The Punt Meme Coin Platform allows users to explore, analyze, and
              engage with trending meme cryptocurrencies in a visually
              interactive way. Users can easily browse through various meme
              coins, view their details, and decide whether to Pass or Punt on
              them with a single click.
            </p>
          </div>
          <div className={styles.dec_container_content_left}>
            <img src={DecWorkFrame4} alt="" />
          </div>
        </div>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_left}>
            <img src={DecWorkFrame5} alt="" />
          </div>
          <div className={styles.dec_container_content_right}>
            <h1>Punted Coins</h1>
            <p>
              The Punted Coins Dashboard provides users with a clear and
              organized overview of all the meme coins they’ve chosen to punt.
              With its clean interface and responsive design, users can
              seamlessly toggle between Punt and Punted views to manage or
              review their active and past punts. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PuntDec;
