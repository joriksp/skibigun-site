import React from "react";
import styles from "./ShockFrame.module.scss";

import frame from "@assets/shock-frame.png";

const ShockFrame = ({ children }) => {
   return (
      <div className={styles.frame}>
         <img className={styles.bg} src={frame} alt="frame" width={"100%"} />
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default ShockFrame;
