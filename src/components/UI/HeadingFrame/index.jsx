import React from "react";
import styles from "./HeadingFrame.module.scss";

import frame from "@assets/frame.png";
import glare from "@assets/glare.png";

const HeadingFrame = ({ children, style }) => {
   return (
      <div style={style} className={styles.heading}>
         <img className={styles.bg} src={frame} alt="frame" />
         <img className={styles.glare} src={glare} alt="glare" />
         <div>
            <h1>{children}</h1>
         </div>
      </div>
   );
};

export default HeadingFrame;
