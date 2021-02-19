import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./Properties.module.css";
import Button from "../UI/Button/Button";

class Properties extends Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/offer" />;
    }
  };
  render() {
    let productDetails;
    if (this.props.currProduct) {
      productDetails = (
        <div className={classes.Properties}>
          <div>
            {this.renderRedirect()}
            <button onClick={this.setRedirect} className={classes.returnButton}>
              &#8592; Wróć
            </button>
          </div>
          <div className={classes.currentProduct}>
            <div className={classes.bigImageContainer}>
              <div className={classes.bigImage}>
                <img
                  src={this.props.currProduct.bigImage}
                  alt={this.props.currProduct.productName}
                />
              </div>
            </div>
            <div className={classes.Details}>
              <p>Producent: {this.props.currProduct.producent}</p>
              <p>Model: {this.props.currProduct.productName}</p>
              <p>Dostępność: dostępny</p>
              <p>Cena: {this.props.currProduct.price} PLN</p>
              <p>Koszt wysyłki: 15 PLN</p>
              <p>Złóż zamówienie przez telefon:</p>
              <p>+48 123-456-789</p>
              <p>Razem: {this.props.currProduct.price + 15} PLN</p>
              <div>
                <Button>Dodaj Do Koszyka</Button>
              </div>
            </div>
          </div>
          <div className={classes.Description}>
            <p className={classes.Des}>{this.props.currProduct.description}</p>
          </div>
        </div>
      );
    } else {
      productDetails = <Redirect to="/offer" />;
    }
    return <div>{productDetails};</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currProduct: state.currProduct,
  };
};

export default connect(mapStateToProps)(Properties);
