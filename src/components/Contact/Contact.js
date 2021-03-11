import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./Contact.module.css";
import Input from "../UI/Input/Input";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";

const Contact = (props) => {
  const history = useHistory();
  const submitHandler = () => {
    let path = "proceed";

    history.push(path);
  };

  return (
    <div className={classes.Contact}>
      <form className={classes.contactForm}>
        <Title>Skontaktuj się z nami!</Title>
        <span className={classes.margin}></span>
        <div className={classes.inputContactUs}>
          <Input label="Imię" />
        </div>
        <div className={classes.inputContactUs}>
          <Input label="Adres email" />
        </div>
        <div className={classes.group}>
          <textarea required />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label>Wiadomość</label>
        </div>
        <Button clicked={submitHandler} type="submit">
          Wyślij
        </Button>
      </form>
      <div className={classes.addressData}>
        <Title>Adres siedziby</Title>
        <p>Gdynia 81-159</p>
        <p>ul. Starowiejska 287/2A</p>
        <Title>Numer Telefonu</Title>
        <p>123-456-789</p>
        <Title>Adres email</Title>
        <p>flume@flume.com</p>
        <Title>Godziny otwarcia</Title>
        <p>Poniedziałek - Piątek: 8 - 16</p>
        <p>Sobota, Niedziela: Nieczynne</p>
      </div>
    </div>
  );
};

export default Contact;
