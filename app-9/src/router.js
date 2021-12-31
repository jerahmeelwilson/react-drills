import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";
import React from "react";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);
