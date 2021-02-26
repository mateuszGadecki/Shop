import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Cart.module.css";
import CartList from "../../components/Products/CartList/CartList";
import Button from "../../components/UI/Button/Button";
import cartIcon from "../../assets/icons/cart.svg";
import Title from "../../components/UI/Title/Title";
import * as actions from "../../store/actions/index";

class Cart extends Component {
  render() {
    let cart, cartTitles, cartSubmit;
    if (this.props.cartItems.length <= 0) {
      cart = <div className={classes.center}>Koszyk jest pusty</div>;
      cartTitles = (
        <div className={classes.center}>
          <img src={cartIcon} alt="cartIcon" />
        </div>
      );
      cartSubmit = null;
    } else {
      cart = this.props.cartItems.map((e) => {
        return (
          <CartList
            removeItemHandler={this.props.onRemoveCartItem}
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
          <Button fontSize="1.5rem">Kontynuuj Zakupy</Button>
        </div>
      );
    }

    return (
      <div className={classes.Cart}>
        {cartTitles}
        {cart}
        <div className={classes.CartSubmit}>{cartSubmit}</div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
