import React, { Component } from "react";

import classes from "./AccountForm.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Title from "../../../components/UI/Title/Title";

class AccountForm extends Component {
  state = {
    register: false,
    loginForm: {
      name: {
        elementConfig: {
          type: "text",
        },
        value: "",
        validation: {
          required: true,
          minLength: 2,
          maxLength: 15,
        },
        valid: false,
      },
      email: {
        elementConfig: {
          type: "text",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
          minLength: 5,
          maxLength: 20,
        },
        valid: false,
      },
      password: {
        elementConfig: {
          type: "text",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 15,
        },
        valid: false,
      },
    },
    formIsValid: false,
    isSignUp: false,
  };
  loginSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignUp,
      null
    );
  };
  registerSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignUp,
      this.state.loginForm.name.value
    );
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedloginForm = {
      ...this.state.loginForm,
    };
    const updatedFormElement = {
      ...updatedloginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedloginForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedloginForm) {
      formIsValid = updatedloginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      loginForm: updatedloginForm,
      formIsValid: formIsValid,
    });
  };

  showRegisterForm = () => {
    this.setState({ register: true });
    this.setState({ isSignUp: true });
  };

  showLogInForm = () => {
    this.setState({ register: false });
    this.setState({ isSignUp: false });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    let formContent;
    if (this.state.register) {
      formContent = (
        <form
          onSubmit={this.registerSubmitHandler}
          className={classes.registerContainer}
        >
          <div>
            <div className={classes.AccountFormTitle}>
              <Title fontSize="3.3rem">Rejestracja</Title>
            </div>
          </div>
          <div className={classes.input}>
            <Input
              elementConfig={formElementsArray[0].config.elementConfig}
              value={formElementsArray[0].config.value}
              shouldValidate={formElementsArray[0].config.validation}
              invalid={!formElementsArray[0].config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElementsArray[0].id)
              }
              background="#fff"
              label="Twoje Imię"
            />
          </div>
          <div className={classes.input}>
            <Input
              elementConfig={formElementsArray[1].config.elementConfig}
              value={formElementsArray[1].config.value}
              shouldValidate={formElementsArray[1].config.validation}
              invalid={!formElementsArray[1].config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElementsArray[1].id)
              }
              background="#fff"
              label="Email"
            />
          </div>
          <div className={classes.input}>
            <Input
              elementConfig={formElementsArray[2].config.elementConfig}
              value={formElementsArray[2].config.value}
              shouldValidate={formElementsArray[2].config.validation}
              invalid={!formElementsArray[2].config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElementsArray[2].id)
              }
              background="#fff"
              label="Hasło"
            />
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
        </form>
      );
    } else {
      formContent = (
        <form
          onSubmit={this.loginSubmitHandler}
          className={classes.logInContainer}
        >
          <div>
            <div className={classes.AccountFormTitle}>
              <Title fontSize="3.3rem">Logowanie</Title>
            </div>
          </div>
          <div className={classes.input}>
            <Input
              elementConfig={formElementsArray[1].config.elementConfig}
              value={formElementsArray[1].config.value}
              shouldValidate={formElementsArray[1].config.validation}
              invalid={!formElementsArray[1].config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElementsArray[1].id)
              }
              background="#fff"
              label="Email"
            />
          </div>
          <div className={classes.input}>
            <Input
              elementConfig={formElementsArray[2].config.elementConfig}
              value={formElementsArray[2].config.value}
              shouldValidate={formElementsArray[2].config.validation}
              invalid={!formElementsArray[2].config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElementsArray[2].id)
              }
              background="#fff"
              label="Hasło"
            />
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
        </form>
      );
    }
    return <div className={classes.AccountForm}>{formContent}</div>;
  }
}

export default AccountForm;
