import React, { useState } from "react";

import styles from "./ItemSelect.module.scss";

import CheckBox from "../CheckBox";
import heading from "@assets/slides/eng/chooseaskibigun.png";
import CurrencyFormat from "react-currency-format";

const ItemSelect = ({ items, onChange, selectAll, selected, locales }) => {
   const totalPrice = items.reduce((prev, cur) => {
      if (selected[cur.name]) {
         return prev + cur.price;
      }
      return prev;
   }, 0);

   const renderCheckboxes = () =>
      items.map((item, i) => (
         <CheckBox
            key={i}
            locale={locales.getLanguage()}
            id={item.name}
            label={item.name}
            price={item.price}
            checked={selected[item.name]}
            onChange={onChange}
         />
      ));

   return (
      <div>
         <img src={heading} alt="choose a skibigun" width="100%" />
         <fieldset>
            {renderCheckboxes()}
            <CheckBox
               locale={locales.getLanguage()}
               id="all"
               label="All"
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
                  {locales.getLanguage() === "ru" && " ₽"}
               </h1>
            )}
         />
      </div>
   );
};

export default ItemSelect;
