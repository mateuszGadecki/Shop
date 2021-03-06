import React from "react";

import classes from "./AccountInfo.module.css";
import Title from "../../UI/Title/Title";

const accountInfo = (props) => {
  let accountInfo;
  if (props.accountData) {
    const data = props.accountData;
    accountInfo = (
      <div className={classes.dataContainer}>
        <ul className={classes.dataList}>
          <li>Imię: {data.firstName}</li>
          <li>Nazwisko: {data.lastName}</li>
          <li>Adres email: {data.email}</li>
          <li>Numer telefonu: {data.phoneNumber}</li>
          <li>Adres</li>
          <li>Miasto: {data.city}</li>
          <li>Kod pocztowy: {data.zip}</li>
          <li>Ulica: {data.street}</li>
          <li>Numer domu/mieszkania: {data.houseNumber}</li>
        </ul>
      </div>
    );
  } else {
    <div className={classes.noData}>Brak danych</div>;
  }
  return (
    <div className={classes.accountInfo}>
      <div className={classes.accountInfoTitle}>
        <Title fontSize="2.3rem">Szczegóły Konta</Title>
      </div>
      {accountInfo}
    </div>
  );
};

export default accountInfo;
