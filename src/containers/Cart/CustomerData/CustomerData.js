import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
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
    proceedPage: false,
  };

  /*==================== Redirection to proceedPage ==================== */
  renderProceedPage = () => {
    if (this.state.proceedPage) {
      return <Redirect push to="/proceed" />;
    }
  };
  /*==================== Calling redirect, Creating an object with orderData ==================== */
  orderHandler = (event) => {
    event.preventDefault();
    if (this.state.formIsValid) {
      this.setState({
        proceedPage: true,
      });
      const cartItems = this.props.cartItems;
      const totalPrice = this.props.totalPrice;
      const orderData = [];
      const customerData = {
        firstName: this.state.customerForm.firstName.value,
        lastName: this.state.customerForm.lastName.value,
        email: this.state.customerForm.email.value,
        phoneNumber: this.state.customerForm.phone.value,
        city: this.state.customerForm.city.value,
        zip: this.state.customerForm.zip.value,
        street: this.state.customerForm.street.value,
        houseNumber: this.state.customerForm.houseNumber.value,
      };
      for (let key in cartItems) {
        orderData.push({
          producer: cartItems[key].orderDetails.producent,
          productName: cartItems[key].orderDetails.productName,
          price: cartItems[key].orderDetails.price,
          smallImage: cartItems[key].orderDetails.smallImage,
        });
      }
      /*==================== Post the data to the Firebase ==================== */
      this.props.onPurchaseOrder(orderData, customerData, totalPrice);
    }
  };
  /*==================== Checking the correctness of entered data by the user ==================== */
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) return true;
    if (rules.required) isValid = value.trim() !== "" && isValid;
    if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;
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
  /*==================== State update based on user input ==================== */
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
    /*==================== Creating an array based on the state that renders the inputs ==================== */
    const formElementsArray = [];
    for (let key in this.state.customerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.customerForm[key],
        label: this.state.customerForm[key].label,
      });
    }
    /*==================== Split array with inputs details into two parts ==================== */
    const half = Math.ceil(formElementsArray.length / 2);
    const firstHalf = formElementsArray.splice(0, half);
    const secondHalf = formElementsArray.splice(-half);
    /*==================== Creating the first container with inputs by mapping ==================== */
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
    /*==================== Creating the second container with inputs by mapping ==================== */
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
            {this.renderProceedPage()}
            <Button type="submit">KUPUJĘ I PŁACĘ</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchaseOrder: (orderData, customerData, totalPrice) =>
      dispatch(actions.purchaseOrder(orderData, customerData, totalPrice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerData);
