import React from "react";
import { Navbar } from "../../common";
import styles from "./Home.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import { heroBanner } from "../../assets";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.hero_section}>
        <div className={styles.hero_section_content}>
          {/* Left side */}
          <motion.div
            className={styles.hero_section_content_left}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className={styles.greeting}>Hi, my name is</span>
            <h1 className={styles.name}>Muhammad Zeeshan Zafar</h1>
            <p className={styles.role}>I am a Full Stack Developer.</p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={styles.resumeBtn}
            >
              <MdOutlineFileDownload />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Right side */}
          <motion.div
            className={styles.hero_section_content_right}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={styles.imageCard}
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className={styles.glow}></div>
              <img src={heroBanner} alt="heroBanner" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
