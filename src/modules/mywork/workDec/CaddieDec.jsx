import React from "react";
import styles from "../Work.module.scss";
import { DecWorkFrame7, DecWorkFrame8 } from "../../../assets";

const CaddieDec = () => {
  return (
    <>
      <div className={styles.dec_container2}>
        <h1>Sand Caddie</h1>
        <div className={styles.dec_container2_content}>
          <div className={styles.dec_container2_content_left}>
            <div className={styles.dec_container2_content_left_Box}>
              <img src={DecWorkFrame8} alt="" />
            </div>
          </div>
          <div className={styles.dec_container2_content_right}>
            <h1>Sand Caddie</h1>
            <p>
              A modern, responsive web application designed for Sand Caddie, an
              electric motorized beach wagon rental service. Built using
              React.js, Vite, and SCSS, the platform delivers a fast, seamless
              experience for users to book rentals, explore partnerships, and
              connect with the brand.
            </p>
          </div>
        </div>
        <div className={styles.dec_container2_content}>
          <div className={styles.dec_container2_content_right}>
            <h1>AI Chatbot</h1>
            <p>
              Users can send messages, listen to the bot’s responses, and manage
              their chat history seamlessly. With features like persistent local
              storage, speech synthesis, and an intuitive interface, the chatbot
              offers a smart and engaging communication experience.
            </p>
          </div>
          <div className={styles.dec_container2_content_left}>
            <div className={styles.dec_container2_content_left_Box}>
              <img src={DecWorkFrame7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaddieDec;
