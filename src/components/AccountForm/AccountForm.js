import React, { Component } from "react";

import classes from "./AccountForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

class AccountForm extends Component {
  state = {
    register: false,
  };

  showRegisterForm = () => {
    this.setState({ register: true });
  };

  showLogInForm = () => {
    this.setState({ register: false });
  };

  render() {
    let formContent;
    if (this.state.register) {
      formContent = (
        <div className={classes.registerContainer}>
          <div>
            <div className={classes.AccountFormTitle}>
              <Title fontSize="3.3rem">Rejestracja</Title>
            </div>
          </div>
          <div className={classes.input}>
            <Input background="#fff" label="Twoje Imię" />
          </div>
          <div className={classes.input}>
            <Input background="#fff" label="Login" />
          </div>
          <div className={classes.input}>
            <Input background="#fff" label="Hasło" />
          </div>
          <div className={classes.buttonsContainer}>
            <div className={classes.buttonContainer}>
              <p>Posiadasz konto?</p>
              <button
                onClick={this.showLogInForm}
                className={classes.AccountFormButton}
              >
                Zaloguj Się
              </button>
            </div>
            <div className={classes.buttonContainer}>
              <Button>Zarejestruj Się</Button>
            </div>
          </div>
        </div>
      );
    } else {
      formContent = (
        <div className={classes.logInContainer}>
          <div>
            <div className={classes.AccountFormTitle}>
              <Title fontSize="3.3rem">Logowanie</Title>
            </div>
          </div>
          <div className={classes.input}>
            <Input background="#fff" label="Login" />
          </div>
          <div className={classes.input}>
            <Input background="#fff" label="Hasło" />
          </div>
          <div className={classes.buttonsContainer}>
            <div className={classes.buttonContainer}>
              <p>Nie posiadasz konta?</p>
              <button
                onClick={this.showRegisterForm}
                className={classes.AccountFormButton}
              >
                Zarejestruj się
              </button>
            </div>
            <div className={classes.buttonContainer}>
              <Button>Zaloguj Się</Button>
            </div>
          </div>
        </div>
      );
    }
    return <div className={classes.AccountForm}>{formContent}</div>;
  }
}

export default AccountForm;
