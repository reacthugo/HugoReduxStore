import React, { useEffect, useState, Suspense } from 'react';
import { Menu } from '../../components/menu';
import DetailProduct from '../../components/detailproduct';
import { ErrorLoading } from '../../components/errorLoading';

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
            <ErrorLoading>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Menu />
                    <DetailProduct product={product} />
                </Suspense>
            </ErrorLoading>
        </div>
    );
};

export default ProductDetail;