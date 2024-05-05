import React from "react";
import styles from "./TextInput.module.scss";

import frame from "@assets/input-field.png";

const TextInput = ({ placeholder, type, name, onChange }) => {
   return (
      <div className={styles.input_container}>
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
