import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => (
    <li>
        <img width="180" height="152" src={require(`../../assets/imagens/${props.item.image}`)} />

        <div className="rodapeProduct">
            <h1>{props.item.name}</h1>
            <span>$ {props.item.price}</span><br />
            <Link className="detalhe" to={`/products/${props.item.id}`}><button>Details</button></Link>
        </div>
    </li>
);

export default Product;