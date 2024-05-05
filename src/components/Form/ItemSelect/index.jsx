import React, { useState } from "react";

import styles from "./ItemSelect.module.scss";

import CheckBox from "../CheckBox";
import heading from "@assets/slides/eng/chooseaskibigun.png";
import CurrencyFormat from "react-currency-format";

const ItemSelect = ({ items, onChange, selectAll, selected }) => {
   const totalPrice = items.reduce((prev, cur) => {
      if (selected[cur.name]) {
         return prev + cur.price;
      }
      return prev;
   }, 0);

   return (
      <div>
         <img src={heading} alt="choose a skibigun" width="100%" />
         <fieldset>
            {items.map((item, i) => (
               <CheckBox
                  key={i}
                  id={item.name}
                  label={item.name}
                  price={item.price}
                  checked={selected[item.name]}
                  onChange={onChange}
               />
            ))}
            <CheckBox
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
            prefix={"Total price $"}
            renderText={(value) => <h1 className={styles.total}>{value}</h1>}
         />
      </div>
   );
};

export default ItemSelect;
