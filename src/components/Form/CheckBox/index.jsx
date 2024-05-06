import React from "react";
import styles from "./CheckBox.module.scss";
import CurrencyFormat from "react-currency-format";

const CheckBox = ({ id, label, checked, price, onChange, locale }) => {
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
         <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => (
               <p>
                  {value}
                  {locale === "en" ? "$" : "₽"}
               </p>
            )}
         />
      </div>
   );
};

export default CheckBox;
