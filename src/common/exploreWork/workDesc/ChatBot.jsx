import React from "react";
import styles from "../Explore.module.scss";
import { EWF6 } from "../../../assets";

const ChatBot = () => {
  return (
    <>
      <div
        className={styles.exploreWork_container_content_scroller_detailsProject}
      >
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_left
          }
        >
          <h1>AI ChatBot</h1>
          <p>
            This project is an interactive AI-powered chatbot built with
            React.js and OpenAI’s GPT-3.5 Turbo model. The chatbot provides
            intelligent, context-aware responses by maintaining a complete
            conversation history.
          </p>
        </div>
        <div
          className={
            styles.exploreWork_container_content_scroller_detailsProject_right
          }
        >
          <img src={EWF6} alt="fram2" />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
