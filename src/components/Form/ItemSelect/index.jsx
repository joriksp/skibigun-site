import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import styles from "./ItemSelect.module.scss";

import CheckBox from "../CheckBox";

import FormTitle from "@/components/UI/FormTitle";

const ItemSelect = ({
   items,
   selected,
   onSelect,
   onSelectAll,
   locales,
   totalPrice,
   sumPrice,
}) => {
   const lang = locales.getLanguage();

   const renderCheckboxes = () =>
      items.map((item, i) => (
         <CheckBox
            key={i}
            valute={lang}
            label={item.name}
            price={item.price}
            checked={selected[item.name]}
            onChange={(event) =>
               onSelect(event, { name: item.name, price: item.price })
            }
         />
      ));

   return (
      <div>
         <FormTitle text={locales.formTitle} />
         <fieldset>
            {renderCheckboxes()}
            <CheckBox
               valute={lang}
               id="all"
               label={locales.buyAll}
               price={sumPrice}
               checked={Object.values(selected).every(
                  (param) => param !== false
               )}
               onChange={onSelectAll}
            />
         </fieldset>
         <CurrencyFormat
            value={totalPrice}
            displayType={"text"}
            thousandSeparator={" "}
            prefix={false}
            renderText={(value) => (
               <h1 className={styles.total}>
                  <span className={styles.prefix}>{locales.totalHeading}</span>{" "}
                  <span className={styles.price}>
                     {lang === "en" && <span className={styles.dollar}>$</span>}{" "}
                     <span className={styles.sum}>{value}</span>{" "}
                     {lang === "ru" && <span className={styles.ruble}>₽</span>}
                  </span>
               </h1>
            )}
         />
      </div>
   );
};

export default ItemSelect;
