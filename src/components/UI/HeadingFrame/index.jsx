import React from "react";
import styles from "./HeadingFrame.module.scss";

import frame from "@assets/frame.png";
import glareImg from "@assets/glare.png";

const HeadingFrame = ({ children, style, glare = true }) => {
  return (
    <div style={style} className={styles.heading}>
      <img className={styles.bg} src={frame} alt="frame" />
      {glare && <img className={styles.glare} src={glareImg} alt="glare" />}
      <div>
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default HeadingFrame;
