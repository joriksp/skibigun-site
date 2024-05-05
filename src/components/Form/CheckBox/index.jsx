import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ id, label, checked, price, onChange }) => {
   return (
      <div className={styles.item}>
         <div className={styles.checkbox}>
            <input
               type="checkbox"
               id={id}
               name={id}
               checked={checked}
               onChange={onChange}
            />
            <label>{label}</label>
         </div>
         <div className={styles.line}></div>
         <p>{price}$</p>
      </div>
   );
};

export default CheckBox;
