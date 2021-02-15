import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Offer.module.css";
import OfferPicture from "../../assets/images/OfferPicture.jpg";
import ProducerList from "../../components/Products/ProducerList/ProducerList";
import ProductContainer from "../../components/Products/ProductContainer/ProductContainer";
import Title from "../../components/UI/Title/Title";
import * as actions from "../../store/actions/index";

class Offer extends Component {
  state = {
    currProducer: "Canon",
  };

  componentDidMount() {
    this.props.onInitProducts();
  }

  changeStateProducer(producerName) {
    this.setState({ currProducer: producerName });
  }

  render() {
    const filterByProducerHandler = (e) => {
      let firedButton = e.target.value;
      this.changeStateProducer(firedButton);
    };

    return (
      <div className={classes.Offer}>
        <div className={classes.OfferTitle}>
          <Title fontSize="3.4rem">Fotografia</Title>
        </div>
        <div className={classes.PictureContainer}>
          <img className={classes.Picture} src={OfferPicture} alt="Offer" />
        </div>
        <ProducerList filter={filterByProducerHandler} />
        <div className={classes.Products}>
          {this.props.curProducts[this.state.currProducer].map((e) => {
            return <ProductContainer obj={e} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curProducts: state.currProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch(actions.initProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
