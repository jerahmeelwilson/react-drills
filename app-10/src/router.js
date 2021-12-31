import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";
import React from "react";

export default (
    <Routes>
        <Route exact path='/' element={<Products/>}/>
        <Route path='/details/:id' element={<Details/>}/>
    </Routes>
)

