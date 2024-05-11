import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import styles from "./ItemSelect.module.scss";

import CheckBox from "../CheckBox";

import FormTitle from "@/components/UI/FormTitle";

const ItemSelect = ({ items, onChange, selectAll, selected, locales }) => {
   const totalPrice = items.reduce((prev, cur) => {
      if (selected[cur.name]) {
         return prev + cur.price;
      }
      return prev;
   }, 0);

   const language = locales.getLanguage();

   const renderCheckboxes = () =>
      items.map((item, i) => (
         <CheckBox
            key={i}
            valute={language}
            id={item.name}
            label={item.name}
            price={item.price}
            checked={selected[item.name]}
            onChange={onChange}
         />
      ));

   return (
      <div>
         <FormTitle text={locales.formTitle} />
         <fieldset>
            {renderCheckboxes()}
            <CheckBox
               valute={language}
               id="all"
               label={locales.buyAll}
               price={items.reduce((prev, cur) => prev + cur.price, 0)}
               checked={
                  selected.SKIBISHOCK &&
                  selected.SKIBICOS &&
                  selected.SKIBIDRAGON
               }
               onChange={selectAll}
            />
         </fieldset>
         <CurrencyFormat
            value={totalPrice}
            displayType={"text"}
            thousandSeparator={" "}
            prefix={locales.totalHeading}
            renderText={(value) => (
               <h1 className={styles.total}>
                  <span className={styles.price}>{value}</span>{" "}
                  <span className={styles.ruble}>
                     {language === "ru" && " ₽"}
                  </span>
               </h1>
            )}
         />
      </div>
   );
};

export default ItemSelect;
