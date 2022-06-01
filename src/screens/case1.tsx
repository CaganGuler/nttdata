import { List } from "antd";
import React from "react";
import ListItem from "../components/list-item";
import Spinner from "../components/spinner";
import Case1Base from "./case1-base";

export default class Case1 extends Case1Base {
  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    console.log(this.state.offers);
    return (
      <List
        className="list"
        itemLayout="horizontal"
        dataSource={this.state.offers.offerList}
        renderItem={(offer) => <ListItem item={offer} />}
      />
    );
  }
}
