import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import styles from "./ItemSelect.module.scss";

import CheckBox from "../CheckBox";

import heading from "@assets/slides/eng/chooseaskibigun.png";
import headin_rus from "@assets/slides/rus/chooseaskibigun.png";

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
         <img
            src={language === "en" ? heading : headin_rus}
            alt="choose a skibigun"
            width="100%"
         />
         <fieldset>
            {renderCheckboxes()}
            <CheckBox
               valute={language}
               id="all"
               label="Buy all"
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
            thousandSeparator={true}
            prefix={locales.totalHeading}
            renderText={(value) => (
               <h1 className={styles.total}>
                  {value}
                  {language === "ru" && " ₽"}
               </h1>
            )}
         />
      </div>
   );
};

export default ItemSelect;
