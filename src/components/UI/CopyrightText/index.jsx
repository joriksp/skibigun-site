import React from "react";
import styles from "./CopyrightText.module.scss";

const CopyrightText = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default CopyrightText;
