import React from "react";

import classes from "./ProductContainer.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Picture from "../../UI/Picture/Picture";
import Button from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";

const productContainer = (props) => {
  let displayProducts = (
    <div className={classes.ProductContainer}>
      <div className={classes.smallPhotoContainer}>
        <Picture source={props.obj.smallImage} alt={props.obj.productName} />
      </div>
      <div className={classes.ProductText}>{props.obj.productName}</div>
      <div className={classes.ProductText}>{props.obj.price} PLN</div>
      <div className={classes.ButtonsContainer}>
        <div className={classes.ButtonContainer}>
          <Button>Szczegóły</Button>
        </div>
        <div className={classes.ButtonContainer}>
          <Button>Zamów</Button>
        </div>
      </div>
    </div>
  );

  if (!props.obj) {
    displayProducts = <Spinner />;
  }

  return <Aux>{displayProducts}</Aux>;
};

export default productContainer;
