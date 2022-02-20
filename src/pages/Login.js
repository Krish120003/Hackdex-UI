import React from "react";
import styles from "../styles/Login.module.scss";
import { Link, Navigate, useParams } from "react-router-dom";

export default function Login(props) {
  const params = useParams();
  console.log(params);
  if (params.data) {
    const data = JSON.parse(atob(params.data));
    console.log(data);
    if (data.username) {
      localStorage.setItem("e", JSON.stringify(data));
    }
  }
  return localStorage.getItem("e") === undefined ? (
    <>
      {/* <div dangerouslySetInnerHTML={iframe()}></div> */}

      <div className={styles.container}>
        <div>
          <svg
            width="612"
            height="247"
            viewBox="0 0 612 247"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0376 127.802L109.605 4.15963L128.627 18.8623L47.7622 123.483L152.383 204.347L137.68 223.369L14.0376 127.802Z"
              fill="#F5B61E"
              stroke="#F5B61E"
              stroke-width="5"
            />
            <path
              d="M585.056 139.569L503.893 6.02899L483.348 18.5157L552.025 131.511L439.029 200.188L451.516 220.733L585.056 139.569Z"
              fill="#F5B61E"
              stroke="#F5B61E"
              stroke-width="5"
            />
            <path
              d="M379.5 205L466.5 18H437L348 205H379.5Z"
              fill="#F5B61E"
              stroke="#F5B61E"
              stroke-width="5"
            />
            <path
              d="M303 204L294 18H412L322.82 204H303Z"
              fill="#5A60F3"
              stroke="#5A60F3"
              stroke-width="5"
            />
            <path
              d="M322.5 150.5V43H373.421L322.5 150.5Z"
              fill="white"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M184 204.5L149.5 18H177.5L188 100H251L245 18H271L281 204.5H258.5L251 128.5H193.5L204 204.5H184Z"
              fill="#5A60F3"
              stroke="#5A60F3"
              stroke-width="5"
            />
          </svg>
          <h1 align="center">
            Welcome to <b>HackDex</b>
          </h1>
          <a href="http://34.134.73.177/auth">Log in with Discord</a>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}
