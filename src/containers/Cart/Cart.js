import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Cart.module.css";
import CartList from "../../components/Products/CartList/CartList";
import Button from "../../components/UI/Button/Button";
import cartIcon from "../../assets/icons/cart.svg";
import Title from "../../components/UI/Title/Title";
import CustomerData from "./CustomerData/CustomerData";
import * as actions from "../../store/actions/index";

class Cart extends Component {
  state = {
    customerData: false,
  };

  showCustomerDataForm = () => {
    this.setState({ customerData: true });
  };

  continueHandler = () => {
    this.props.history.replace("/cart/customer-data");
  };

  render() {
    let cart, cartTitles, cartSubmit, route;
    if (this.props.cartItems.length <= 0) {
      cart = <div className={classes.center}>Koszyk jest pusty</div>;
      cartTitles = (
        <div className={classes.center}>
          <img src={cartIcon} alt="cartIcon" />
        </div>
      );
      cartSubmit = null;
    } else if (this.state.customerData) {
      cart = this.props.cartItems.map((e) => {
        return (
          <CartList
            removeItemHandler={this.props.onRemoveCartItem}
            updateTotalPriceOnDelete={this.props.onUpdateTotalPriceOnDelete}
            key={e.id}
            cartItemDetails={e}
          />
        );
      });
      cartTitles = (
        <div className={classes.CartColumns}>
          <div>
            <Title fontSize="2.2rem">Lista Produktów</Title>
          </div>

          <div>
            <Title fontSize="2.2rem">Cena</Title>
          </div>
          <div>
            <Title fontSize="2.2rem">Przewidywany Czas Dostawy</Title>
          </div>
          <div>
            <Title fontSize="2.2rem">Koszt dostawy</Title>
          </div>
          <div>
            <Title fontSize="2.2rem">Usuń</Title>
          </div>
        </div>
      );
      cartSubmit = (
        <div className={classes.CartTotalPrice}>
          <div className={classes.totalPrice_2}>
            Do zapłaty: {this.props.totalPrice} PLN
          </div>
        </div>
      );
    } else {
      cart = this.props.cartItems.map((e) => {
        return (
          <CartList
            removeItemHandler={this.props.onRemoveCartItem}
            updateTotalPriceOnDelete={this.props.onUpdateTotalPriceOnDelete}
            key={e.id}
            cartItemDetails={e}
          />
        );
      });
      cartTitles = (
        <div className={classes.CartColumns}>
          <div>
            <Title fontSize="2.2rem">Lista Produktów</Title>
          </div>

          <div>
            <Title fontSize="2.2rem">Cena</Title>
          </div>
          <div>
            <Title fontSize="2.2rem">Przewidywany Czas Dostawy</Title>
          </div>
          <div>
            <Title fontSize="2.2rem">Koszt dostawy</Title>
          </div>
          <div>
            <Title fontSize="2.2rem">Usuń</Title>
          </div>
        </div>
      );
      cartSubmit = (
        <div className={classes.CartTotalPrice}>
          <div className={classes.totalPrice}>
            Do zapłaty: {this.props.totalPrice} PLN
          </div>
          <Button
            clicked={() => {
              this.continueHandler();
              this.showCustomerDataForm();
            }}
            fontSize="1.5rem"
          >
            Kontynuuj Zakupy
          </Button>
        </div>
      );
    }
    if (this.props.cartItems.length > 0) {
      route = (
        <Route
          path={this.props.match.path + "/customer-data"}
          component={CustomerData}
        />
      );
    }

    return (
      <div className={classes.Cart}>
        {cartTitles}
        {cart}
        <div className={classes.CartSubmit}>{cartSubmit}</div>
        {route}
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
    onRemoveCartItem: (id) => dispatch(actions.removeCartItem(id)),
    onUpdateTotalPriceOnDelete: (price) =>
      dispatch(actions.updateTotalPriceOnDelete(price)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
