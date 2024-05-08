import React from "react";
import styles from "./CheckBox.module.scss";
import CurrencyFormat from "react-currency-format";

interface Props {
   id: string;
   label: string;
   checked: boolean;
   price: number;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   valute: "en" | "ru";
}

const CheckBox: React.FC<Props> = ({
   id,
   label,
   checked,
   price,
   onChange,
   valute,
}) => {
   return (
      <div className={styles.item}>
         <input
            type="checkbox"
            id={id}
            name={id}
            checked={checked}
            onChange={onChange}
         />
         <label>{label}</label>
         <div className={styles.line}></div>
         <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={" "}
            renderText={(value) => (
               <p>
                  {valute === "en" && "$"} {value} {valute === "ru" && "₽"}
               </p>
            )}
         />
      </div>
   );
};

export default CheckBox;
