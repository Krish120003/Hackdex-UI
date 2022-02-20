import React from "react";
import styles from "../styles/Home.module.scss";
//import assets from "../assets"

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

            {/* Progress Section */}
            <div>
              {/* Section Info / Nav */}
              <div className={styles.progressTop}>
                <span>
                  <h2>Your Progress</h2>
                  <p>69%</p>
                </span>
                <div className={styles.progressBar}>
                  <div></div>
                </div>
                <div className={styles.progressButton}>
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00004 4.00002C8.00004 4.13263 7.94736 4.25981 7.85359 4.35358C7.75982 4.44734 7.63265 4.50002 7.50004 4.50002H1.70704L3.85404 6.64602C3.90053 6.69251 3.9374 6.7477 3.96256 6.80844C3.98772 6.86918 4.00067 6.93428 4.00067 7.00002C4.00067 7.06577 3.98772 7.13087 3.96256 7.19161C3.9374 7.25234 3.90053 7.30753 3.85404 7.35402C3.80755 7.40051 3.75236 7.43739 3.69162 7.46254C3.63088 7.4877 3.56578 7.50065 3.50004 7.50065C3.4343 7.50065 3.3692 7.4877 3.30846 7.46254C3.24772 7.43739 3.19253 7.40051 3.14604 7.35402L0.146039 4.35402C0.099476 4.30758 0.062533 4.2524 0.0373266 4.19165C0.0121201 4.13091 -0.000854492 4.06579 -0.000854492 4.00002C-0.000854492 3.93425 0.0121201 3.86913 0.0373266 3.80839C0.062533 3.74764 0.099476 3.69247 0.146039 3.64602L3.14604 0.646021C3.23993 0.552135 3.36726 0.49939 3.50004 0.49939C3.63282 0.49939 3.76015 0.552135 3.85404 0.646021C3.94793 0.739908 4.00067 0.867246 4.00067 1.00002C4.00067 1.1328 3.94793 1.26013 3.85404 1.35402L1.70704 3.50002H7.50004C7.63265 3.50002 7.75982 3.5527 7.85359 3.64647C7.94736 3.74024 8.00004 3.86741 8.00004 4.00002Z"
                        fill="#222941"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        transform="rotate(180 4 4)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00004 4.00002C8.00004 4.13263 7.94736 4.25981 7.85359 4.35358C7.75982 4.44734 7.63265 4.50002 7.50004 4.50002H1.70704L3.85404 6.64602C3.90053 6.69251 3.9374 6.7477 3.96256 6.80844C3.98772 6.86918 4.00067 6.93428 4.00067 7.00002C4.00067 7.06577 3.98772 7.13087 3.96256 7.19161C3.9374 7.25234 3.90053 7.30753 3.85404 7.35402C3.80755 7.40051 3.75236 7.43739 3.69162 7.46254C3.63088 7.4877 3.56578 7.50065 3.50004 7.50065C3.4343 7.50065 3.3692 7.4877 3.30846 7.46254C3.24772 7.43739 3.19253 7.40051 3.14604 7.35402L0.146039 4.35402C0.099476 4.30758 0.062533 4.2524 0.0373266 4.19165C0.0121201 4.13091 -0.000854492 4.06579 -0.000854492 4.00002C-0.000854492 3.93425 0.0121201 3.86913 0.0373266 3.80839C0.062533 3.74764 0.099476 3.69247 0.146039 3.64602L3.14604 0.646021C3.23993 0.552135 3.36726 0.49939 3.50004 0.49939C3.63282 0.49939 3.76015 0.552135 3.85404 0.646021C3.94793 0.739908 4.00067 0.867246 4.00067 1.00002C4.00067 1.1328 3.94793 1.26013 3.85404 1.35402L1.70704 3.50002H7.50004C7.63265 3.50002 7.75982 3.5527 7.85359 3.64647C7.94736 3.74024 8.00004 3.86741 8.00004 4.00002Z"
                        fill="#222941"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* Section Card */}
              <div className={styles.progressCard}>
                <div className={styles.progressCardImage}>
                  <div>
                    <img src={require("../assets/CSSImg.png")} alt="CSS" />
                  </div>
                </div>
                <div className={styles.progressCardContent}>
                  <h3>Styling Your Portfolio</h3>
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
