import React, { useState } from "react";
import styles from "./Form.module.scss";

import TextInput from "./TextInput";
import Button from "../Button";
import ItemSelect from "./ItemSelect";
import LocalizedStrings from "react-localization";
import { useForm } from "react-hook-form";

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
      SKIBISHOCK: true,
      SKIBICOS: false,
      SKIBIDRAGON: false,
      email: "",
      phone: "",
      fname: "",
      lname: "",
      surname: "",
      country: "",
      city: "",
      state: "",
      street: "",
      house: "",
      zip: "",
      message: "",
   });
   const [isOrdered, setOrdered] = useState(false);
   const [error, setError] = useState("");

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => console.log(data);

   let strings = new LocalizedStrings({
      en: {
         totalHeading: "Total price $ ",
         emailPlaceholder: "Your e-mail address",
         phonePlaceholder: "Phone number",
         fnamePlaceholder: "First name",
         lnamePlaceholder: "Last name",
         surnamePlaceholder: "Surname",
         shippingAddressHeading: "Shipping Address",
         countryPlaceholder: "Country",
         cityPlaceholder: "City",
         statePlaceholder: "State",
         streetPlaceholder: "Street",
         housePlaceholder: "House",
         zipPlaceholder: "Zip",
         messagePlaceholder: "Message",
         buyAll: "BUY ALL",
         formTitle: "Choose a SKIBIGUN",
         fillAllError: "Fill in all the fields",
         formInfo:
            "Full out the purchase order form, our manager will contact you by email for payment.",
      },
      ru: {
         totalHeading: "Итого ",
         emailPlaceholder: "Ваш адрес эл. почты",
         phonePlaceholder: "Номер телефона",
         fnamePlaceholder: "Имя",
         lnamePlaceholder: "Фамилия",
         surnamePlaceholder: "Отчество",
         shippingAddressHeading: "Адрес доставки",
         countryPlaceholder: "Страна",
         cityPlaceholder: "Город",
         statePlaceholder: "Регион",
         streetPlaceholder: "Улица",
         housePlaceholder: "Квартира/дом",
         zipPlaceholder: "Почтовый индекс",
         messagePlaceholder: "Сообщение",
         buyAll: "Купить все",
         formTitle: "Выбери свой SKIBIGUN",
         fillAllError: "Заполните все поля",
         formInfo:
            "Заполните форму для покупки, наш менеджер свяжется с вами по электронной почте для оплаты.",
      },
   });

   if (lang) {
      strings.setLanguage(lang);
   }

   const handleFormChanged = (event) => {
      const { name, type, checked, value } = event.target;
      setError("");
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   const handleItemSelectAll = (event) => {
      const { checked } = event.target;
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

   const validate = () => {
      let errors = [];
      for (let key of Object.keys(formData)) {
         if (formData[key] === "" || formData[key] === undefined) {
            if (!(key === "surname" && lang === "en")) {
               errors.push({
                  field: key,
                  msg: "Required",
               });
            }
         }
      }
      return errors;
   };

   const handleFormSend = (event) => {
      event.preventDefault();

      if (isOrdered) return;

      const errors = validate();

      if (errors.length) {
         console.dir(errors);
         setError(strings.fillAllError);
         return;
      }

      setOrdered(true);
      console.table({ ...formData, sum: totalPrice });

      fetch("http://skibigun-api.vercel.app/sendorder", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ ...formData, sum: totalPrice }),
      })
         .then((response) => response.json())
         .then((data) => {
            alert(`Order sent successfully!`);
         })
         .catch((error) => {
            console.error("Error sending order:", error);
            alert("Error sending order. Please try again.");
         });
   };

   return (
      <div className={styles.form_container}>
         <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <ItemSelect
               items={items}
               selected={formData}
               onChange={handleFormChanged}
               selectAll={handleItemSelectAll}
               locales={strings}
            />
            <TextInput
               error={error}
               name={"email"}
               placeholder={strings.emailPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"phone"}
               placeholder={strings.phonePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"fname"}
               placeholder={strings.fnamePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"lname"}
               placeholder={strings.lnamePlaceholder}
               onChange={handleFormChanged}
            />
            {lang == "ru" && (
               <TextInput
                  error={error}
                  name={"surname"}
                  placeholder={strings.surnamePlaceholder}
                  onChange={handleFormChanged}
               />
            )}
            <h1 className={styles.heading}>{strings.shippingAddressHeading}</h1>
            <TextInput
               error={error}
               name={"country"}
               placeholder={strings.countryPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"city"}
               placeholder={strings.cityPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"state"}
               placeholder={strings.statePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"street"}
               placeholder={strings.streetPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"house"}
               placeholder={strings.housePlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"zip"}
               placeholder={strings.zipPlaceholder}
               onChange={handleFormChanged}
            />
            <TextInput
               error={error}
               name={"message"}
               placeholder={strings.messagePlaceholder}
               onChange={handleFormChanged}
            />
            <Button
               onClick={handleFormSend}
               ordered={isOrdered}
               locale={lang}
            />
            {lang === "ru" ? (
               <p className={styles.info}>
                  Заполните форму для покупки, наш менеджер
                  <br />
                  свяжется с вами по электронной почте для оплаты.
               </p>
            ) : (
               <p className={styles.infoen}>
                  Full out the purchase order form, our manager
                  <br />
                  will contact you by email for payment.
               </p>
            )}
         </form>
      </div>
   );
};

export default Form;
