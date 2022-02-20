import React from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.sidebar}>
        
        PROFIL
        VIDOS
        PROJCTS
        CLENDR

        SETIn
        </div>
      <div className={styles.centerC}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div>
              <h1><b>Hello,</b> NAME</h1>
              <p className={styles.subHead}>StormHack 2023</p>
            </div>
            <div>
              <h2>Upcoming Workshops</h2>
            </div>
            <div>
              <h2>Your Progress</h2>
            </div>
            </div>
          <div className={styles.right}>
            <h3>What's Happening?</h3>
            <div className={styles.videoWrapper}>
            <iframe src="https://www.youtube.com/embed/bdBokxiLAjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>S
    </>
  );
}
