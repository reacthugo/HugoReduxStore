import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/menu';
import DetailProduct from '../../components/detailproduct';

import { Products } from '../../api/Products';

const ProductDetail = (props) => {

    const [product, setProduct] = useState({});

    const carregarProduto = () => {
        Products.getProductById(props.match.params.id).then((produt) => {
            setProduct(produt);
        }).catch((falha) => {
            console.log('Falha ao carregar os dados do produto. Erro: ' + falha);
            setProduct({});
        })
    };

    useEffect(() => {
        carregarProduto();
    });

    return (
        <div>
            <Menu />
            <DetailProduct product={product} />
        </div>
    );
};

export default ProductDetail;