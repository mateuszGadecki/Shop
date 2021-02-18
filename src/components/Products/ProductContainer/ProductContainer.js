import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./ProductContainer.module.css";
import Aux from "../../../hoc/Aux/Aux";

import Picture from "../../UI/Picture/Picture";
import Button from "../../UI/Button/Button";
import * as actions from "../../../store/actions/index";

class ProductContainer extends Component {
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
      return <Redirect to="/properties" />;
    }
  };

  render() {
    return (
      <Aux>
        <div className={classes.ProductContainer}>
          <div className={classes.smallPhotoContainer}>
            <Picture
              source={this.props.obj.smallImage}
              alt={this.props.obj.productName}
            />
          </div>
          <div className={classes.ProductText}>
            {this.props.obj.productName}
          </div>
          <div className={classes.ProductText}>{this.props.obj.price} PLN</div>
          <div className={classes.ButtonsContainer}>
            <div className={classes.ButtonContainer}>
              {this.renderRedirect()}
              <Button
                clicked={() => {
                  this.props.onSetCurrProduct(this.props.obj);
                  this.setRedirect();
                }}
              >
                Szczegóły
              </Button>
            </div>
            <div className={classes.ButtonContainer}>
              <Button>Zamów</Button>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrProduct: (product) => dispatch(actions.setCurrProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(ProductContainer);
