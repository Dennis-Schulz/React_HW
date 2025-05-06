import React from "react";
import styles from "../styles/Content.module.css";
import logoApple from "../assets/svg/Apple.svg";
import logoGoogle from "../assets/svg/Google.svg";
import logoX from "../assets/svg/X.svg";

const Content = () => {
  return (
    <div className={styles.content}>
      <a href="*">
        Sign in <br />   with
      </a>
      <div className={styles.icons}>
        <img className={styles.iconImg} src={logoApple} alt="logoApple" />
        <img className={styles.iconImg} src={logoGoogle} alt="logoGoogle" />
        <img className={styles.iconImg} src={logoX} alt="logoX" />
      </div>
    </div>
  );
};

export default Content;
