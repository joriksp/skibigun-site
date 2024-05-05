import React from "react";
import styles from "./Slide.module.scss";

const Slide = ({ image, children }) => {
   return (
      <div className={styles.slide}>
         <img className={styles.bg} src={image} alt="something went wrong" />
         {children && <div className={styles.content}>{children}</div>}
      </div>
   );
};

export default Slide;
