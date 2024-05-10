import React from "react";
import styles from "./TextInput.module.scss";

import frame from "@assets/input-field.png";

const TextInput = ({ placeholder, type, name, onChange, error }) => {
   const bright = {
      filter: "drop-shadow(0 0 rgb(255 255 255 / 0.8)",
   };

   return (
      <div
         style={error !== "" ? bright : {}}
         className={styles.input_container}
      >
         <img className={styles.bg} src={frame} alt="error" />
         <input
            autoComplete="new-password"
            type={type || "text"}
            placeholder={placeholder || ""}
            name={name}
            id={name}
            onChange={onChange}
         />
      </div>
   );
};

export default TextInput;
