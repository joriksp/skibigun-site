import React from "react";
import styles from "./CopyrightText.module.scss";

const CopyrightText = ({ children, locale }) => {
   return (
      <p className={locale === "ru" ? styles.min : styles.text}>{children}</p>
   );
};

export default CopyrightText;
