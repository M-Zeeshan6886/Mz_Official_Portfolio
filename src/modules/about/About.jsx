import React, { useEffect } from 'react'
import { Navbar } from '../../common';
import styles from "./About.module.scss";

const About = () => {
    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <>
    <Navbar />
    <div className={styles.about_hero}>
        <div className={styles.about_hero_content}>
            <div className={styles.about_hero_content_left}>

            </div>
            <div className={styles.about_hero_content_right}></div>
        </div>
    </div>
    </>
  )
}

export default About