import { List } from "antd";
import React from "react";
import ListItem from "../components/list-item";
import Spinner from "../components/spinner";
import Case2Base from "./case2-base";

export default class Case2 extends Case2Base {
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
