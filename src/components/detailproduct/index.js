import React, { Suspense } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './styles.css';
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/carrinhoAction";
import { ErrorLoading } from '../errorLoading';
import { LoadingProduct } from "../loadingProduct";

const DetailProduct = (props) => {
    return (
        <div className="fluid">
            <ErrorLoading>
                <Suspense fallback={<LoadingProduct/>}>
                    <div className="fluid__image-container">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'imagem do produto',
                                isFluidWidth: true,
                                src: props.product.image && require(`../../assets/imagens/${props.product.image}`),
                            },
                            largeImage: {
                                src: props.product.image && require(`../../assets/imagens/${props.product.image}`),
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                    <div className="fluid__instructions">
                        <h3>{props.product.name}</h3>
                        <p>{props.product.description}</p>
                        <button onClick={() => props.addToCart(props.product)}>Add to Cart</button>
                    </div>

                    <div style={{ height: '500px' }} />
                </Suspense>
            </ErrorLoading>
        </div>
    );
}

export default connect(undefined, { addToCart })(DetailProduct);
