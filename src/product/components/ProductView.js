import React from "react";

export default ({title, product}) => (
        <div>
            <h2>{title}</h2>
            <p>Name: {product.name}</p>
            <p>Weight: {product.weight}</p>
            <p>CPU: {product.cpu}</p>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
        </div>
    )