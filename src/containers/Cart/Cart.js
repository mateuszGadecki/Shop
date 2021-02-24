import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Cart.module.css";
import CartList from "../../components/Products/CartList/CartList";
import Button from "../../components/UI/Button/Button";
import cartIcon from "../../assets/icons/cart.svg";
import Title from "../../components/UI/Title/Title";

class Cart extends Component {
  render() {
    let cart;
    if (this.props.cartItems.length <= 0) {
      cart = <div>Koszyk jest pusty</div>;
    } else {
      cart = this.props.cartItems.map((e) => {
        return <CartList key={e.id} cartItemDetails={e} />;
      });
    }

    return (
      <div className={classes.Cart}>
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
        {cart}
        <div className={classes.CartSubmit}>
          <div>
            <img src={cartIcon} alt="x" />
          </div>
          <div className={classes.CartTotalPrice}>
            <div>Do zapłaty: 1500 PLN</div>
            <Button fontSize="1.5rem">Kontynuuj Zakupy</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
