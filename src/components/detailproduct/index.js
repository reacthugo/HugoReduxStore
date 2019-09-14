import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './styles.css';

const DetailProduct = (props) => {
    return (
        <div className="fluid">
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
            </div>
            <div style={{ height: '500px' }} />
        </div>
    );
}

export default DetailProduct;
