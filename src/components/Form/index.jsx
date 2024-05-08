import React, { useState } from "react";
import styles from "./Form.module.scss";

import TextInput from "./TextInput";
import Button from "../Button";
import ItemSelect from "./ItemSelect";
import LocalizedStrings from "react-localization";

const items = [
   {
      name: "SKIBISHOCK",
      price: 1000,
   },
   {
      name: "SKIBICOS",
      price: 1000,
   },
   {
      name: "SKIBIDRAGON",
      price: 1000,
   },
];

const Form = ({ lang }) => {
   const [formData, setFormData] = useState({
      SKIBISHOCK: false,
      SKIBICOS: false,
      SKIBIDRAGON: false,
      "e-mail": "",
      phone: "",
      fname: "",
      lname: "",
      country: "",
      city: "",
      state: "",
      street: "",
      house: "",
      zip: "",
      message: "",
   });
   const [isOrdered, setOrdered] = useState(false);

   let strings = new LocalizedStrings({
      en: {
         totalHeading: "Total price $ ",
         emailPlaceholder: "Your e-mail address",
         phonePlaceholder: "Phone number",
         fnamePlaceholder: "First name",
         lnamePlaceholder: "Last name",
         shippingAddressHeading: "Shipping Address",
         countryPlaceholder: "Country",
         cityPlaceholder: "City",
         statePlaceholder: "State",
         streetPlaceholder: "Street",
         housePlaceholder: "House",
         zipPlaceholder: "Zip",
         messagePlaceholder: "Message",
         buyAll: "Buy all",
      },
      ru: {
         totalHeading: "Итого ",
         emailPlaceholder: "Ваш адрес эл. почты",
         phonePlaceholder: "Номер телефона",
         fnamePlaceholder: "Имя",
         lnamePlaceholder: "Фамилия",
         shippingAddressHeading: "Адрес доставки",
         countryPlaceholder: "Страна",
         cityPlaceholder: "Город",
         statePlaceholder: "Регион",
         streetPlaceholder: "Улица",
         housePlaceholder: "Квартира/дом",
         zipPlaceholder: "Почтовый индекс",
         messagePlaceholder: "Сообщение",
         buyAll: "КУПИТЬ ВСЁ",
      },
   });

   if (lang) {
      strings.setLanguage(lang);
   }

   const handleFormChanged = (event) => {
      const { name, type, checked, value } = event.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   const handleItemSelectAll = (event) => {
      const { name, checked } = event.target;
      setFormData((prev) => ({
         ...prev,
         SKIBISHOCK: checked,
         SKIBICOS: checked,
         SKIBIDRAGON: checked,
      }));
   };

   const totalPrice = items.reduce((prev, cur) => {
      if (formData[cur.name]) {
         return prev + cur.price;
      }
      return prev;
   }, 0);

   const handleFormSend = (event) => {
      event.preventDefault();
      if (isOrdered) {
         return;
      }
      setOrdered(true);
      console.table({ ...formData, sum: totalPrice });
   };

   return (
      <div className={styles.form_container}>
         <form autoComplete="off">
            <ItemSelect
               items={items}
               selected={formData}
               onChange={handleFormChanged}
               selectAll={handleItemSelectAll}
               locales={strings}
            />
            <TextInput
               name={"e-mail"}
               placeholder={strings.emailPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"phone"}
               placeholder={strings.phonePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"fname"}
               placeholder={strings.fnamePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"lname"}
               placeholder={strings.lnamePlaceholder}
               onChange={handleFormChanged}
            />
            <h1 className={styles.heading}>{strings.shippingAddressHeading}</h1>
            <TextInput
               name={"country"}
               placeholder={strings.countryPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"city"}
               placeholder={strings.cityPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"state"}
               placeholder={strings.statePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"street"}
               placeholder={strings.streetPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"house"}
               placeholder={strings.housePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"zip"}
               placeholder={strings.zipPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"message"}
               placeholder={strings.messagePlaceholder}
               onChange={handleFormChanged}
            />
            <Button
               onClick={handleFormSend}
               ordered={isOrdered}
               locale={lang}
            />
         </form>
      </div>
   );
};

export default Form;
