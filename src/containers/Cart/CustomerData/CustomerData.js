import React, { Component } from "react";

import classes from "./CustomerData.module.css";
import Input from "../../../components/UI/Input/Input";
import Title from "../../../components/UI/Title/Title";
import Button from "../../../components/UI/Button/Button";

class CustomerData extends Component {
  state = {
    customerForm: {
      firstName: {
        elementConfig: {
          type: "text",
        },
        label: "Imię",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      lastName: {
        elementConfig: {
          type: "text",
        },
        label: "Nazwisko",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      email: {
        elementConfig: {
          type: "email",
        },
        label: "Adres e-mail",
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
      },
      phone: {
        elementConfig: {
          type: "number",
        },
        label: "Numer Telefonu",
        value: "",
        validation: {
          required: true,
          minLength: 9,
          maxLength: 9,
          isNumeric: true,
        },
        valid: false,
      },
      city: {
        elementConfig: {
          type: "text",
        },
        label: "Miejscowość",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      zip: {
        elementConfig: {
          type: "text",
        },
        label: "Kod pocztowy",
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true,
        },
        valid: false,
      },
      street: {
        elementConfig: {
          type: "text",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        label: "Ulica",
      },
      houseNumber: {
        elementConfig: {
          type: "number",
        },
        label: "Numer mieszkania",
        value: "",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 6,
          isNumeric: true,
        },
        valid: false,
      },
    },
    formIsValid: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
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

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedCustomerForm = {
      ...this.state.customerForm,
    };
    const updatedFormElement = {
      ...updatedCustomerForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedCustomerForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedCustomerForm) {
      formIsValid = updatedCustomerForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      customerForm: updatedCustomerForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.customerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.customerForm[key],
        label: this.state.customerForm[key].label,
      });
    }
    const half = Math.ceil(formElementsArray.length / 2);
    const firstHalf = formElementsArray.splice(0, half);
    const secondHalf = formElementsArray.splice(-half);
    let firstHalfInputs = (
      <div>
        {firstHalf.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementConfig={formElement.config.elementConfig}
              label={formElement.label}
              value={formElement.config.value}
              shouldValidate={formElement.config.validation}
              invalid={!formElement.config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          );
        })}
      </div>
    );
    let secondHalfInputs = (
      <div>
        {secondHalf.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementConfig={formElement.config.elementConfig}
              label={formElement.label}
              value={formElement.config.value}
              shouldValidate={formElement.config.validation}
              invalid={!formElement.config.valid}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          );
        })}
      </div>
    );
    console.log(firstHalfInputs);
    return (
      <div>
        <div className={classes.customerDataTitle}>
          <Title>Dane odbiorcy przesyłki</Title>
        </div>
        <form
          onSubmit={this.orderHandler}
          className={classes.customerDataInputs}
        >
          <div className={classes.customerDataForm}>{firstHalfInputs}</div>
          <div className={classes.customerDataForm}>{secondHalfInputs}</div>
          <div></div>
          <div className={classes.customerDataSubmit}>
            <Button type="submit">KUPUJĘ I PŁACĘ</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomerData;
