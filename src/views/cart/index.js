import React from 'react';
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/carrinhoAction";
import { Menu } from '../../components/menu';
import ProductCartItem from '../../components/productCartItem';
import './styles.css';

const Cart = (props) => (
    <div >
        <Menu />
        <div className="cart">
            <ul>
                {props.products.map(product => (
                    <ProductCartItem key={product.id} product={product} onRemove={props.removeFromCart} />
                ))}
            </ul>

            <p className="totalizer">
                <b>Total price:</b> R$ {props.products.reduce((accumulator, current) => accumulator + current.price, 0).toFixed(2)}
            </p>
        </div>
    </div>
);

const mapStateToProps = ({ carrinho }) => {
    return { products: carrinho.products };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);