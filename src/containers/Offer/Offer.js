import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Offer.module.css";
import OfferPicture from "../../assets/images/OfferPicture.jpg";
import ProducerList from "../../components/Products/ProducerList/ProducerList";
import ProductContainer from "../../components/Products/ProductContainer/ProductContainer";
import Title from "../../components/UI/Title/Title";
import * as actions from "../../store/actions/index";

class Offer extends Component {
  componentDidMount() {
    this.props.onInitProducts();
  }

  render() {
    const filterByProducerHandler = (e) => {
      let firedButton = e.target.value;
      this.props.onSetCurrProducer(firedButton);
    };

    return (
      <div className={classes.Offer}>
        <div className={classes.OfferTitle}>
          <Title fontSize="3.4rem">Fotografia</Title>
        </div>
        <div className={classes.PictureContainer}>
          <img className={classes.Picture} src={OfferPicture} alt="Offer" />
        </div>
        <ProducerList
          currentProducer={this.props.currProducer}
          filter={filterByProducerHandler}
        />
        <div className={classes.Products}>
          {this.props.curProducts[this.props.currProducer].map((e) => {
            return <ProductContainer key={e.id} obj={e} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curProducts: state.offer.currProducts,
    currProducer: state.offer.currProducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch(actions.initProducts()),
    onSetCurrProducer: (producer) =>
      dispatch(actions.setCurrProducer(producer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
