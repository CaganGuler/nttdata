import { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="spinner spinner-inner"></div>
        </div>
      </div>
    );
  }
}
