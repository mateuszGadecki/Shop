import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Offer.module.css";
import ProducerList from "../../components/Products/ProducerList/ProducerList";
import ProductContainer from "../../components/Products/ProductContainer/ProductContainer";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class Offer extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.onInitProducts();
  }

  render() {
    const filterByProducerHandler = (e) => {
      let firedButton = e.target.value;
      this.props.onSetCurrProducer(firedButton);
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
    };
    let products;
    if (this.props.loading || this.state.loading) {
      products = (
        <div>
          <Spinner />
        </div>
      );
    } else {
      products = (
        <div className={classes.Products}>
          {this.props.curProducts[this.props.currProducer].map((e) => {
            return <ProductContainer key={e.id} obj={e} />;
          })}
        </div>
      );
    }

    return (
      <div className={classes.Offer}>
        <div className={classes.PictureContainer}>
          <div className={classes.offerProducerTitle}>
            Aparaty firmy {this.props.currProducer}
          </div>
        </div>
        <div className={classes.OfferContent}>
          <ProducerList
            currentProducer={this.props.currProducer}
            filter={filterByProducerHandler}
          />
          <div>{products}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curProducts: state.offer.currProducts,
    currProducer: state.offer.currProducer,
    loading: state.offer.loading,
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
