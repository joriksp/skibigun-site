import React from "react";
import styles from "./Button.module.scss";

import preorder_button from "@assets/slides/eng/preorder-button.png";

const Button = ({ onClick }) => {
   return (
      <div className={styles.button_container}>
         <img src={preorder_button} alt="" />
         <button onClick={onClick} type="submit"></button>
      </div>
   );
};

export default Button;
