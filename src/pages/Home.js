import React from "react";
import styles from "../styles/Home.module.scss";
//import assets from "../assets"
import SubmissionCard from "../components/SubmissionCard";

export default function Home() {
  return (
    <>
      <div className={styles.sidebar}>
        <img src={require("../assets/profileIcon.png")} alt="CSS" />
        <img src={require("../assets/videoIcon.png")} alt="CSS" />
        <img src={require("../assets/folderHd.png")} alt="CSS" />
        <img src={require("../assets/calenderIcon.png")} alt="CSS" />

        <div className={styles.settingsImg}>
          <img src={require("../assets/settingsIcon.png")} alt="CSS" />
        </div>
      </div>
      <div className={styles.centerC}>
        <div className={styles.container}>
          <div className={styles.left}>
            {/* Title / Welcome */}
            <div className={styles.splitter}>
              <div>
                <h1>
                  <b>Hello,</b> {JSON.parse(localStorage.getItem("e")).username}
                </h1>
                <p className={styles.subHead}>Welcome to StormHacks 2023!</p>
              </div>
              <div className={styles.imge}>
                <img
                  src={`https://cdn.discordapp.com/avatars/${
                    JSON.parse(localStorage.getItem("e")).id
                  }/${JSON.parse(localStorage.getItem("e")).avatar}.webp`}
                ></img>
              </div>
            </div>

            {/* Workshop Section */}
            <div>
              <h2>Upcoming Workshops</h2>
              <div className={styles.contentCardWrapper}>
                <div className={styles.contentImage}>
                  <div>
                    <img
                      src={require("../assets/FlaskLogo.png")}
                      height="90em"
                      width="90em"
                      alt="CSS"
                    />
                  </div>
                </div>
                <div className={styles.contentText}>
                  <h2>Learn Flask in a Flash</h2>
                  <p>Running 1030-1130</p>
                  <p>Covers Login Framework</p>
                </div>
              </div>
              <div className={styles.contentCardWrapper}>
                <div className={styles.contentImage}>
                  <div>
                    <img
                      src={require("../assets/javaScriptImg.png")}
                      height="90em"
                      width="90em"
                      alt="CSS"
                    />
                  </div>
                </div>
                <div className={styles.contentText}>
                  <h2>And Action! JavaScript Intro</h2>
                  <p>Running 1300-1430</p>
                  <p>Covers Variables, Events & More!</p>
                </div>
              </div>
            </div>
            {/* Progress Section */}
            <SubmissionCard />
          </div>
          <div className={styles.right}>
            <h3>What's Happening?</h3>
            <p>
              Join the introduction to Flask, where you will learn about
              creating log in, register, and post management for websites.
            </p>
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
