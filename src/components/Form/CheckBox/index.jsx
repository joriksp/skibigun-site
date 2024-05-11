import React, { forwardRef } from "react";
import styles from "./CheckBox.module.scss";
import CurrencyFormat from "react-currency-format";

const CheckBox = forwardRef(
   ({ id, label, checked, price, onChange, valute, ...props }, ref) => {
      return (
         <div className={styles.item}>
            <input
               type="checkbox"
               ref={ref}
               {...props}
               onChange={onChange}
               checked={checked}
            />
            <label>{label}</label>
            <div className={styles.line}></div>
            <CurrencyFormat
               value={price}
               displayType={"text"}
               thousandSeparator={""}
               renderText={(value) => (
                  <p>
                     {valute === "en" && "$"}
                     {value}{" "}
                     <span className={styles.ruble}>
                        {valute === "ru" && " ₽"}
                     </span>
                  </p>
               )}
            />
         </div>
      );
   }
);

export default CheckBox;
