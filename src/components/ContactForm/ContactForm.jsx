import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("Shree");
  const [email, setEmail] = useState("shreevardhanbhosale24hrs");
  const [text, setText] = useState("hello");

  const onSubmit = e => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            text={`VIA SUPPORT CHAT`}
            icon={<MdMessage fontSize={`24px`} />}
          />
          <Button text={`VIA CALL`} icon={<FaPhoneAlt fontSize={`24px`} />} />
        </div>
        <Button
          isoutline={true}
          text={`VIA EMAIL FORM`}
          icon={<MdEmail fontSize={`24px`} />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}>
            <Button text={`Submit`} />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/24X7.svg" alt="Contact Service" />
      </div>
    </section>
  );
};

export default ContactForm;
