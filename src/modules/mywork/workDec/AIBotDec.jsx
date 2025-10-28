import React from "react";
import styles from "../Work.module.scss";
import { DecWorkFrame4, DecWorkFrame5, DecWorkFrame6 } from "../../../assets";

const AIBotDec = () => {
  return (
    <>
      <div className={styles.dec_container}>
        <h1>AI ChatBot</h1>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_left}>
            <img src={DecWorkFrame6} alt="" />
          </div>
          <div className={styles.dec_container_content_right}>
            <h1>AI ChatBot</h1>
            <p>
              This project is an interactive AI-powered chatbot built with
              React.js and OpenAI’s GPT-3.5 Turbo model.There, I expanded my
              skills by integrating OpenAI APIs and developed an AI chatbot with
              audio features, allowing users to interact through both text and
              voice.
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

export default AIBotDec;
