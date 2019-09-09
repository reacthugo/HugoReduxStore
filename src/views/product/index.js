import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/menu';
import DetailProduct from '../../components/detailproduct';

const ProductDetail = () => (
    <div>
        <Menu />
        <h1>Tela de detalhe</h1>
        <DetailProduct />
    </div>
);

export default ProductDetail;