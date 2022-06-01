import { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div id="landing-body" className="cards">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
          </filter>
        </svg>
        <div className="card">
          <Link to="case1">
            <span className="text" filter-content="C">
              Case 1
            </span>
          </Link>
        </div>
        <div className="card">
          <Link to="case2">
            <span className="text" filter-content="C">
              Case 2
            </span>
          </Link>
        </div>
        <div className="card">
          <Link to="case3">
            <span className="text" filter-content="C">
              Case 3
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
