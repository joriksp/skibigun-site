import React from "react";
import styles from "./Button.module.scss";

import preorder_button from "@assets/slides/eng/preorder-button.png";
import preorder_button_clicked from "@assets/slides/eng/preorder-button-clicked.png";

const Button = ({ onClick, ordered }) => {
   return (
      <div className={styles.button_container}>
         <img
            src={ordered ? preorder_button_clicked : preorder_button}
            alt=""
         />
         <button onClick={onClick} type="submit"></button>
      </div>
   );
};

export default Button;
