import React from "react";
import styles from "./Section.module.scss";

const Section = ({ image, children }) => {
   return (
      <div className={styles.section}>
         <img className={styles.bg} src={image} alt="something went wrong" />
         {children && <div className={styles.content}>{children}</div>}
      </div>
   );
};

export default Section;
