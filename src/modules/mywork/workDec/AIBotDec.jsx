import React from "react";
import styles from "../Work.module.scss";
import {
  DecWorkFrame4,
  DecWorkFrame5,
  DecWorkFrame6,
  DecWorkFrame7,
} from "../../../assets";

const AIBotDec = () => {
  return (
    <>
      <div className={styles.dec_container}>
        <h1>AI ChatBot</h1>
        <div className={styles.dec_container_content}>
          <div className={styles.dec_container_content_left}>
            <div className={styles.dec_container_content_left_Box}>
              <img src={DecWorkFrame6} alt="" />
            </div>
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
            <h1>AI Chatbot</h1>
            <p>
              Users can send messages, listen to the bot’s responses, and manage
              their chat history seamlessly. With features like persistent local
              storage, speech synthesis, and an intuitive interface, the chatbot
              offers a smart and engaging communication experience.
            </p>
          </div>
          <div className={styles.dec_container_content_left}>
            <div className={styles.dec_container_content_left_Box}>
              <img src={DecWorkFrame7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBotDec;
