import React, { useState } from "react";
import styles from "./Form.module.scss";

import TextInput from "./TextInput";
import Button from "../Button";
import ItemSelect from "./ItemSelect";

const items = [
   {
      name: "SKIBISHOCK",
      price: 100,
   },
   {
      name: "SKIBICOS",
      price: 100,
   },
   {
      name: "SKIBIDRAGON",
      price: 100,
   },
];

const Form = () => {
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

   const handleFormSend = (event) => {
      event.preventDefault();
   };

   return (
      <div className={styles.form_container}>
         <form autoComplete="off">
            <ItemSelect
               items={items}
               selected={formData}
               onChange={handleFormChanged}
               selectAll={handleItemSelectAll}
            />
            <TextInput
               name={"e-mail"}
               placeholder={"Your e-mail address"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"phone"}
               placeholder={"Phone number"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"fname"}
               placeholder={"First name"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"lname"}
               placeholder={"Last name"}
               onChange={handleFormChanged}
            />
            <h1 className={styles.heading}>Shipping Address</h1>
            <TextInput
               name={"country"}
               placeholder={"Country"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"city"}
               placeholder={"City"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"state"}
               placeholder={"State"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"street"}
               placeholder={"Street"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"house"}
               placeholder={"Apartament/house"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"zip"}
               placeholder={"Zip"}
               onChange={handleFormChanged}
            />
            <TextInput
               name={"message"}
               placeholder={"Message"}
               onChange={handleFormChanged}
            />
            <Button onClick={handleFormSend} />
         </form>
      </div>
   );
};

export default Form;
