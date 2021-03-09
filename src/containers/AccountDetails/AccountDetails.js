import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./AccountDetails.module.css";
import OrderHistory from "../../components/AccountDetails/OrderHistory/OrderHistory";
import AccountInfo from "../../components/AccountDetails/AccountInfo/AccountInfo";
import Spinner from "../../components/UI/Spinner/Spinner";
import Title from "../../components/UI/Title/Title";
import * as actions from "../../store/actions/index";

class AccountDetails extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }
  render() {
    let accountDetails = <Spinner />;
    let accountData, fetchedOrderDetails;
    if (!this.props.loading) {
      if (this.props.fetchedOrders.length > 0) {
        accountData = this.props.fetchedOrders[0].customerData;
        fetchedOrderDetails = this.props.fetchedOrders;
      }
      accountDetails = (
        <div className={classes.accountContainers}>
          <div className={classes.greeting}>
            <Title fontSize="3rem">Witaj {this.props.customerName}!</Title>
          </div>
          <div className={classes.accountData}>
            <div className={classes.accountDataContainer}>
              <OrderHistory fetchedOrderDetails={fetchedOrderDetails} />
            </div>
            <div className={classes.accountDataContainer}>
              <AccountInfo accountData={accountData} />
            </div>
          </div>
        </div>
      );
    }

    return <div className={classes.accountDetails}>{accountDetails}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedOrders: state.order.fetchedOrders,
    loading: state.order.loading,
    token: state.auth.token,
    customerName: state.auth.customerName,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
