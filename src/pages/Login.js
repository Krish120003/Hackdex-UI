import React from "react";
import styles from "../styles/Login.module.scss";

export default function Login(props) {
  return (
    <>
      {/* <div dangerouslySetInnerHTML={iframe()}></div> */}
      <div className={styles.container}>
        <div>
          <h1>
            Welcome to <b>HackDex</b>
          </h1>
          <button>Log in with Discord</button>
        </div>
      </div>
    </>
  );
}
