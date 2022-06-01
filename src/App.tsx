import React, { Component } from "react";
import Case1 from "./screens/case1";
import Case2 from "./screens/case2";
import Case3 from "./screens/case3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screens/landing";

export default class App extends Component {
  async componentDidMount() {}
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="case1" element={<Case1 />} />
          <Route path="case2" element={<Case2 />} />
          <Route path="case3" element={<Case3 />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
