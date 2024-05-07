import React from "react";
import styles from "./IntroText.module.scss";

const IntroText = ({ children }) => {
   return <p className={styles.text}>{children}</p>;
};

export default IntroText;
