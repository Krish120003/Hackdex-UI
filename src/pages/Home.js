import React from "react";
import styles from "../styles/Home.module.scss";
//import assets from "../assets"
import SubmissionCard from "../components/SubmissionCard";

export default function Home() {
  return (
    <>
      <div className={styles.sidebar}>
        {/* <img src={require("../assets/CSSImg.png")} alt="CSS" />
        <img src={require("../assets/CSSImg.png")} alt="CSS" />
        <img src={require("../assets/CSSImg.png")} alt="CSS" />
        <img src={require("../assets/CSSImg.png")} alt="CSS" /> */}
        <div className={styles.settingsImg}>
          {/* S<img src={require("../assets/CSSImg.png")} alt="CSS" /> */}
        </div>
      </div>
      <div className={styles.centerC}>
        <div className={styles.container}>
          <div className={styles.left}>
            {/* Title / Welcome */}
            <div>
              <h1>
                <b>Hello,</b> NAME
              </h1>
              <p className={styles.subHead}>Welcome to StormHacks 2023!</p>
            </div>

            {/* Workshop Section */}
            <div>
              <h2>Upcoming Workshops</h2>
              <div className={styles.contentCardWrapper}>
                <div className={styles.contentImage}>
                  <div>
                    <img src={require("../assets/CSSImg.png")} alt="CSS" />
                  </div>
                </div>
                <div className={styles.contentText}>
                  <h2>Learn Flask in a Flash! Flash Intro</h2>
                  <p>Running 1030-1130</p>
                  <p>Covers Design Thinking and Common</p>
                  <p>Issues Covered by Futaba Sakura</p>
                </div>
              </div>
              <div className={styles.contentCardWrapper}>
                <div className={styles.contentImage}>
                  <div>
                    <img src={require("../assets/CSSImg.png")} alt="CSS" />
                  </div>
                </div>
                <div className={styles.contentText}>
                  <h2>And Action! JavaScript Basics</h2>
                  <p>Running 1030-1130</p>
                  <p>Covers Design Thinking and Common</p>
                  <p>Issues Covered by Futaba Sakura</p>
                </div>
              </div>
            </div>
            {/* Progress Section */}
            <SubmissionCard />
          </div>
          <div className={styles.right}>
            <h3>What's Happening?</h3>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/bdBokxiLAjs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
