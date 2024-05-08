import React from "react";
import styles from "./FormTitle.module.scss";

import frame from "@assets/input-field.png";

const FormTitle = ({ text }) => {
   return (
      <div className={styles.input_container}>
         <img className={styles.bg} src={frame} alt="error" />
         <p>{text}</p>
      </div>
   );
};

export default FormTitle;
