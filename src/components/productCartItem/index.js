import React from 'react';

const ProductCartItem = ({ product, onRemove }) => (
    <li key={product.id}>
        <img
            width="100"
            src={require(`../../assets/imagens/${product.image}`)}
            alt=""
        />
        <p><strong>Product: </strong>{product.name}</p>
        <p><strong>Price: </strong>{product.price}</p>
        <button onClick={() => onRemove(product)}>Remove</button>
    </li>
);

export default ProductCartItem;
