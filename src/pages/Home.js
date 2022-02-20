import React from "react";
import styles from "../styles/Home.module.scss";
//import assets from "../assets"

export default function Home() {
  return (
    <>
      <div className={styles.sidebar}>
        <div>P . . . . . . V . . . . . . P . . . . . . C</div>
        <div className={styles.settings}>S</div>
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

            {/* Progress Section */}
            <div>
              {/* Section Info / Nav */}
              <div></div>
              {/* Section Card */}
              <div className={styles.progressCard}>
                <div>img</div>
                <div>Content
                  <h3>Title</h3>
                  <span>
                    {/* Icon 1 */}
                    <p>4 Requirements</p>
                  </span>
                  <span>
                    {/* Icon 1 */}
                    <p>Due 2 AM</p>
                  </span>
                </div>
              </div>
            </div>

            {/* <div>
              <h2>Upcoming Workshops</h2>
              <div className={styles.miniVideoWrapper}>
                <h2>The Sight for Good Sites</h2>
                <img src="javaScriptImg.png" alt="JS img" />
                <p>Running 1030-1130</p>
                <p>Covers Design Thinking and Common</p>
                <p>Issues Covered by Futaba Sakura</p>
              </div>
              <div className={styles.miniVideoWrapper}>
                <h2>And Action! JavaScript Basics</h2>
              </div>
            </div>
            <div>
              <h2>Your Progress</h2>
              <div className={styles.miniVideoWrapper}></div>
            </div> */}
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
