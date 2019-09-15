import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './styles.css';

const MenuPrincipal = (props) => (
    <div>
        <div className="menu-center">
            <div className="itens">
                <div className="item">
                    <Link to="/"><img className="middle" src={require('../../assets/site/home2.png')} alt="" /> Home </Link>
                </div>
                <div className="item">
                    <Link to="/cart"><img className="middle" src={require('../../assets/site/carrinho2.png')} alt="" /> ({props.totalProduct}) View cart</Link>
                </div>
            </div>
        </div>
    </div>
)

const mapStateToProps = ({ carrinho }) => ({ totalProduct: carrinho.products.length });
export const Menu = connect(mapStateToProps)(MenuPrincipal);