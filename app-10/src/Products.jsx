import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://practiceapi.devmountain.com/products")
    .then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return (
        <Link key={product.id} to={`/details/${product.id}`}>
          <img
            src={product.image}
            width="200"
            alt={product.title}
            id={product.id}
          ></img>
        </Link>
        );
      })}
    </div>
  );
}
