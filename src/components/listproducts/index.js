import React, { useEffect, useState } from 'react';
import './styles.css';
import Product from '../product';
import { Products } from '../../api/Products';

//actions
//index.js -> 24

//condicao && acao
//reducers
//   cart.js -> 32
//   index.js -> 33

//store
//index.js->35

const ListProduct = (props) => {
    const [listProducts, setListProducts] = useState([]);

    const carregarApiProdutos = () => {
        Products.getProducts().then((produtos) => {
            setListProducts(produtos.items);
        }).catch((falha) => {
            console.log('Falha ao carregar a lista de produto. Erro: ' + falha);
            setListProducts([]);
        })
    };

    useEffect(() => {
        carregarApiProdutos();
    });

    return (
        <div className="lista-produto">
            {console.log(listProducts)}
            <ul>
                {listProducts.map((item, index) => <Product key={index} item={item} />)}
            </ul>
        </div>
    );
};

export default ListProduct;

