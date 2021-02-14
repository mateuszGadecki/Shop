import React from "react";

import classes from "./ProductContainer.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Picture from "../../UI/Picture/Picture";
import smallPhoto from "../../../assets/images/Aparat cyfrowy Canon EOS R5 body.jpg";
import Button from "../../UI/Button/Button";

const productContainer = (props) => (
  <Aux>
    <div className={classes.ProductContainer}>
      <div className={classes.smallPhotoContainer}>
        <Picture source={smallPhoto} alt={"smallPhoto"} />
      </div>
      <div className={classes.ProductText}>Lumix DMC-TZ80</div>
      <div className={classes.ProductText}>1299 PLN</div>
      <div className={classes.ButtonsContainer}>
        <div className={classes.ButtonContainer}>
          <Button>Szczegóły</Button>
        </div>
        <div className={classes.ButtonContainer}>
          <Button>Zamów</Button>
        </div>
      </div>
    </div>
    <div className={classes.ProductContainer}>2</div>
    <div className={classes.ProductContainer}>3</div>
    <div className={classes.ProductContainer}>4</div>
  </Aux>
);

export default productContainer;
