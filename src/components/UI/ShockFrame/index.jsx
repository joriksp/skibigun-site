import React from "react";
import styles from "./DescriptionFrame.module.scss";

import frame from "@assets/shock-frame.png";

const DescriptionFrame = ({ children, x, y }) => {
   const additionalStyles = {
      left: `${x}%`,
      right: `${y}%`,
   }

   return (
      <div className={styles.frame} style={additionalStyles}>
         <img className={styles.bg} src={frame} alt="frame" width={"100%"} />
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default DescriptionFrame;
