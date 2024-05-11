import React from "react";
import styles from "./HeadingFrame.module.scss";

import frame from "@assets/frame.png";
import glareImg from "@assets/glare.png";

const HeadingFrame = ({ children, style, glare = true, text, gradient }) => {
   const addstyle = {
      background: gradient,
      backgroundClip: "text",
      webkitBackgroundClip: "text",
   };

   return (
      <div style={style} className={styles.heading}>
         <img className={styles.bg} src={frame} alt="frame" />
         {glare && <img className={styles.glare} src={glareImg} alt="glare" />}
         <div>
            {text && (
               <img className={styles.imgtext} src={text} width={"75%"} />
            )}
            <h1 style={addstyle}>{children}</h1>
         </div>
      </div>
   );
};

export default HeadingFrame;
