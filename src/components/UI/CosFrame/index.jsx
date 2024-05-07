import React from "react";
import styles from "./CosFrame.module.scss";

import frame from "@assets/cos-frame.png";

const CosFrame = ({ children }) => {
   return (
      <div className={styles.frame}>
         <img className={styles.bg} src={frame} alt="frame" width={"100%"} />
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default CosFrame;
