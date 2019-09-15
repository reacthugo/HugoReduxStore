import React from 'react';

const ProductCartItem = ({ product, onRemove }) => (
    <li key={product.id}>
        <img
            width="100"
            src={require(`../../assets/imagens/${product.image}`)}
            alt=""
        />
        <h4>{product.name}</h4>
        <p>{product.price}</p>

        <button onClick={() => onRemove(product)}>Remove</button>
    </li>
);

export default ProductCartItem;
