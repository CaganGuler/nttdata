import { List } from "antd";
import React from "react";
import ListItem from "../components/list-item";
import Spinner from "../components/spinner";
import Case3Base from "./case3-base";

export default class Case3 extends Case3Base {
  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        {this.state.offers.offerList &&
          this.state.offers.offerList.length > 0 && (
            <List
              className={this.state.loading ? "list disabled" : "list"}
              itemLayout="horizontal"
              dataSource={this.state.offers.offerList}
              renderItem={(offer) => <ListItem item={offer} />}
            />
          )}
      </>
    );
  }
}
