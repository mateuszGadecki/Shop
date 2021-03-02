import React, { Component } from "react";

import classes from "./CustomerData.module.css";
import Input from "../../../components/UI/Input/Input";
import Title from "../../../components/UI/Title/Title";
import Button from "../../../components/UI/Button/Button";

class CustomerData extends Component {
  render() {
    return (
      <div>
        <div className={classes.customerDataTitle}>
          <Title>Dane odbiorcy przesyłki</Title>
        </div>

        <div className={classes.customerDataInputs}>
          <div className={classes.customerDataForm}>
            <Input label="Imię" />
            <Input label="Nazwisko" />
            <Input label="Adres e-mail" />
            <Input label="Numer Telefonu" />
          </div>
          <div className={classes.customerDataForm}>
            <Input label="Miejscowość" />
            <Input label="Kod pocztowy" />
            <Input label="Ulica" />
            <Input label="Numer domu/mieszkania" />
          </div>
        </div>
        <div className={classes.customerDataSubmit}>
          <Button type="submit">KUPUJĘ I PŁACĘ</Button>
        </div>
      </div>
    );
  }
}

export default CustomerData;
