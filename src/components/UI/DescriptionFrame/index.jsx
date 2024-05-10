import React from "react";
import styles from "./DescriptionFrame.module.scss";

const DescriptionFrame = ({ children, x, y, frame, width }) => {
   const additionalStyles = {
      left: `${x}%`,
      top: `${y}%`,
      width: `${width}%`,
   };

   return (
      // <div className={styles.frame} style={additionalStyles}>
      //    <img className={styles.bg} src={frame} alt="frame" width={"100%"} />
      //    <div className={styles.content}>{children}</div>
      // </div>
      <img className={styles.frame} src={frame} style={additionalStyles} />
   );
};

export default DescriptionFrame;
