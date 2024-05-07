import React from "react";
import styles from "./DragonFrame.module.scss";

import frame from "@assets/dragon-frame.png";

const DragonFrame = ({ children }) => {
   return (
      <div className={styles.frame}>
         <img className={styles.bg} src={frame} alt="frame" width={"100%"} />
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default DragonFrame;
