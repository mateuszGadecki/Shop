import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Transition from "react-transition-group/Transition";

import classes from "./AccountForm.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Title from "../../../components/UI/Title/Title";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { checkValidity } from "../../../shared/validation";

class AccountForm extends Component {
  state = {
    register: false,
    login: true,
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
          maxLength: 30,
        },
        valid: false,
      },
      password: {
        elementConfig: {
          type: "password",
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
    errorMessage: null,
  };
  /*==================== Submit Handlers for login and register forms ==================== */
  loginSubmitHandler = (event) => {
    event.preventDefault();
    if (this.props.error) {
      this.setState({ errorMessage: this.props.error });
    }

    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignUp,
      null
    );
  };
  registerSubmitHandler = (event) => {
    event.preventDefault();
    if (this.props.error) {
      this.setState({ errorMessage: this.props.error });
    }
    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignUp,
      this.state.loginForm.name.value
    );
  };

  /*==================== State update based on user input ==================== */
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedloginForm = {
      ...this.state.loginForm,
    };
    const updatedFormElement = {
      ...updatedloginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
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

  /*========== Switching between login and register form ========== */
  showRegisterForm = () => {
    this.setState({ login: false });
    this.setState({ register: true });
    this.setState({ isSignUp: true });
    this.setState({ errorMessage: null });
  };

  showLogInForm = () => {
    this.setState({ login: true });
    this.setState({ register: false });
    this.setState({ isSignUp: false });
    this.setState({ errorMessage: null });
  };

  render() {
    /*==================== Conditionaly assigning an error message to variable ==================== */
    let errorMessage, formContent, authRedirect;
    const formElementsArray = [];
    if (this.props.error) {
      if (this.props.error.code !== 200)
        errorMessage = <p>{this.state.errorMessage}</p>;
    }
    /*==================== Displaying spinner based on state ==================== */
    if (this.props.loading) formContent = <Spinner />;

    /*==================== Creating an array based on the state that renders the inputs ==================== */
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }
    /*==================== Assigning the login/register form to a variable based on the state ==================== */
    if (this.state.register) {
      formContent = (
        <form
          onSubmit={this.registerSubmitHandler}
          className={classes.registerContainer}
        >
          {authRedirect}
          <div>
            <div className={classes.AccountFormTitle}>
              <Title fontSize="3.3rem">Rejestracja</Title>
            </div>
          </div>
          <div className={classes.error}>{errorMessage}</div>
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
            <div className={classes.leftButtonContainer}>
              <p>Posiadasz konto?</p>
              <button
                onClick={this.showLogInForm}
                className={classes.AccountFormButton}
              >
                Zaloguj Się
              </button>
            </div>
            <div className={classes.rightButtonContainer}>
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
          {authRedirect}
          <div>
            <div className={classes.AccountFormTitle}>
              <Title fontSize="3.3rem">Logowanie</Title>
            </div>
          </div>
          <div className={classes.error}>{errorMessage}</div>
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
            <div className={classes.leftButtonContainer}>
              <p>Nie posiadasz konta?</p>
              <button
                onClick={this.showRegisterForm}
                className={classes.AccountFormButton}
              >
                Zarejestruj się
              </button>
            </div>
            <div className={classes.rightButtonContainer}>
              <Button>Zaloguj Się</Button>
            </div>
          </div>
        </form>
      );
    }

    return (
      <Transition in={this.state.register} timeout={1000}>
        {(state) => {
          let cssClasses;
          if (this.state.register) {
            cssClasses = [
              classes.AccountForm,
              state === "entering"
                ? classes.RegisterFormOpen
                : state === "exiting"
                ? classes.RegisterFormClosed
                : null,
            ];
          } else {
            cssClasses = [
              classes.AccountForm,
              state === "entering"
                ? classes.LoginFormClosed
                : state === "exiting"
                ? classes.LoginFormOpen
                : null,
            ];
          }

          return <div className={cssClasses.join(" ")}>{formContent}</div>;
        }}
      </Transition>
    );
  }
}

export default AccountForm;
