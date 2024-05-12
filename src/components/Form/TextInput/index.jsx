import React, { forwardRef } from "react";
import styles from "./TextInput.module.scss";

import frame from "@assets/input-field.png";

const TextInput = forwardRef(({ placeholder, error, ...props }, ref) => {
   const bright = {
      filter: "drop-shadow(rgb(255, 0, 0) 0px 0px) saturate(1.7)",
      WebkitFilter: "drop-shadow(rgb(255, 0, 0) 0px 0px) saturate(1.7)",
   };

   return (
      <div className={styles.input_container} style={error && bright}>
         <img className={styles.bg} src={frame} alt="error" />
         <input placeholder={placeholder || ""} {...props} ref={ref} />
      </div>
   );
});

export default TextInput;
