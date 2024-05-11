import React from "react";
import styles from "./IntroTextRus.module.scss";

const IntroTextRus = ({ children }) => {
   return <p className={styles.text}>{children}</p>;
};

export default IntroTextRus;
