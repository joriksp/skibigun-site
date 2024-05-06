import React from "react";
import styles from "./Button.module.scss";

import preorder_button from "@assets/slides/eng/preorder-button.png";
import preorder_button_clicked from "@assets/slides/eng/preorder-button-clicked.png";
import preorder_button_rus from "@assets/slides/rus/preorder-button.png";
import preorder_button_clicked_rus from "@assets/slides/rus/preorder-button-clicked.png";

const Button = ({ onClick, ordered, locale }) => {
   const bg =
      locale === "ru"
         ? ordered
            ? preorder_button_clicked_rus
            : preorder_button_rus
         : ordered
         ? preorder_button_clicked
         : preorder_button;

   return (
      <div className={styles.button_container}>
         <img src={bg} alt="" />
         <button onClick={onClick} type="submit"></button>
      </div>
   );
};

export default Button;
