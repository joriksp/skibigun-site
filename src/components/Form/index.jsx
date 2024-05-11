import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

import TextInput from "./TextInput";
import Button from "../Button";
import ItemSelect from "./ItemSelect";
import LocalizedStrings from "react-localization";

// const items = [
//    {
//       name: "SKIBISHOCK",
//       price: 1000,
//    },
//    {
//       name: "SKIBICOS",
//       price: 1000,
//    },
//    {
//       name: "SKIBIDRAGON",
//       price: 1000,
//    },
// ];

// const buyAllPrice = 2500;

const Form = ({ lang }) => {
   const [isOrdered, setOrdered] = useState(false);
   const [items, setItems] = useState([]);
   const [buyAllPrice, setBuyAllPrice] = useState(0);

   const {
      register,
      handleSubmit,
      watch,
      getValues,
      setValue,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      fetch("http://skibigun-api.vercel.app/getprices", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ lang }),
      })
         .then((response) => response.json())
         .then((data) => {
            setItems(data.items);
            setBuyAllPrice(data.forAll);
         })
         .catch((error) => {
            console.error(error);
            alert("Error");
         });
   }, []);

   const [total, setTotal] = useState(0);
   const [selected, setSelected] = useState({
      SKIBISHOCK: false,
      SKIBICOS: false,
      SKIBIDRAGON: false,
   });

   useEffect(() => {
      if (selected.SKIBISHOCK && selected.SKIBICOS && selected.SKIBIDRAGON) {
         return setTotal(buyAllPrice);
      }

      setTotal(
         items.reduce((acc, item) => {
            if (selected[item.name]) {
               acc += item.price;
            }
            return acc;
         }, 0)
      );

      console.log(selected);
   }, [selected]);

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
         zipPlaceholder: "Zip code",
         messagePlaceholder: "Message",
         buyAll: "BUY ALL",
         formTitle: "Choose a SKIBIGUN",
         fillAllError: "Fill in all the fields",
         formInfo:
            "Fill in the purchase order form, our manager will contact you by email for payment.",
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
   lang && strings.setLanguage(lang);

   const onSubmit = (data) => {
      if (isOrdered) return;

      console.table({ ...data, sum: total, ...selected, lang });

      fetch("http://skibigun-api.vercel.app/sendorder", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ ...data, sum: total, ...selected, lang }),
      })
         .then((response) => response.json())
         .then((data) => {
            setOrdered(true);
            alert(`Order sent successfully!`);
         })
         .catch((error) => {
            console.error("Error sending order:", error);
            alert("Error sending order. Please try again.");
         });
   };

   const handleItemSelect = (event, { name, price }) => {
      const checked = event.target.checked;

      setSelected((prev) => ({ ...prev, [name]: checked }));
   };

   const handleItemSelectAll = (event) => {
      const { checked } = event.target;

      setSelected({
         SKIBISHOCK: checked,
         SKIBICOS: checked,
         SKIBIDRAGON: checked,
      });
   };

   return (
      <div className={styles.form_container}>
         <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <ItemSelect
               items={items}
               selected={selected}
               onSelect={handleItemSelect}
               onSelectAll={handleItemSelectAll}
               locales={strings}
               totalPrice={total}
               sumPrice={buyAllPrice}
            />
            <TextInput
               {...register("email", { required: true })}
               error={errors?.email}
               placeholder={strings.emailPlaceholder}
            />
            <TextInput
               {...register("phone", { required: true })}
               error={errors?.phone}
               placeholder={strings.phonePlaceholder}
            />
            <TextInput
               {...register("fname", { required: true })}
               error={errors?.fname}
               placeholder={strings.fnamePlaceholder}
            />
            <TextInput
               {...register("lname", { required: true })}
               error={errors?.lname}
               placeholder={strings.lnamePlaceholder}
            />
            {lang == "ru" && (
               <TextInput
                  {...register("surname")}
                  error={errors?.surname}
                  placeholder={strings.surnamePlaceholder}
               />
            )}

            <h1 className={styles.heading}>{strings.shippingAddressHeading}</h1>

            <TextInput
               {...register("country", { required: true })}
               error={errors?.country}
               placeholder={strings.countryPlaceholder}
            />
            <TextInput
               {...register("city", { required: true })}
               error={errors?.city}
               placeholder={strings.cityPlaceholder}
            />
            <TextInput
               {...register("state")}
               error={errors?.state}
               placeholder={strings.statePlaceholder}
            />
            <TextInput
               {...register("street")}
               error={errors?.street}
               placeholder={strings.streetPlaceholder}
            />
            <TextInput
               {...register("house")}
               error={errors?.house}
               placeholder={strings.housePlaceholder}
            />
            <TextInput
               {...register("zip")}
               error={errors?.zip}
               placeholder={strings.zipPlaceholder}
            />
            <TextInput
               {...register("message")}
               error={errors?.message}
               placeholder={strings.messagePlaceholder}
            />

            <Button type="submit" ordered={isOrdered} locale={lang} />

            {lang === "ru" ? (
               <p className={styles.info}>
                  Заполните форму для покупки, наш менеджер
                  <br />
                  свяжется с вами по электронной почте для оплаты.
               </p>
            ) : (
               <p className={styles.infoen}>
                  Fill in the purchase order form, our manager
                  <br />
                  will contact you by email for payment.
               </p>
            )}
         </form>
      </div>
   );
};

export default Form;
