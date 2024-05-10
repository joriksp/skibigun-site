import React from "react";
import styles from "./ShockText.module.scss";

import skibishock from "@assets/skibishock-title.png";

const ShockText = () => {
   return (
      <svg
         width="100%"
         height="100%"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
      >
         <foreignObject
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/1999/xhtml"
         >
            <div className={styles.content}>
               <img src={skibishock} alt={"SKIBISHOCK"} width={"58%"} />
               <p>
                  ударь током своих врагов.
                  <br />
                  Сила тысячи молний спрятана
                  <br />
                  в этом SKIBIGUN.
                  <br />
                  SKIBISHOCK может перехватывать
                  <br />
                  энергию молний и заряжать ими своё
                  <br />
                  лезвие. SKIBISHOCK осветит
                  <br />
                  самый темный и опасный путь.
               </p>
            </div>
         </foreignObject>
      </svg>
   );
};

export default ShockText;
