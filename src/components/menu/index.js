import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = () => (
    <div>
        <div className="menu-center">
            <div className="itens">
                <div className="item">
                    <Link to="/"><img className="middle" src={require('../../assets/site/home2.png')} alt="" /> Home </Link>
                </div>
                <div className="item">
                    <Link to="/card"><img className="middle" src={require('../../assets/site/carrinho2.png')} alt="" /> (0) View cart</Link>
                </div>
            </div>
        </div>
    </div>
)

export default Menu;