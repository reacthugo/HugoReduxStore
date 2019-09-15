import React from 'react';
import ListProduct from '../../components/listproducts';
import './styles.css';
import { Menu }  from '../../components/menu';

const Main = () => (
    <div>
        <Menu />
        <div className="conteudo">
            <ListProduct />
        </div>
    </div>
);

export default Main;


