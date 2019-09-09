import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';



import './styles.css';

import imagemProducts from '../../assets/imagens/xbox-one.jpg';

export default class DetailProduct extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: imagemProducts,
                        },
                        largeImage: {
                            src: imagemProducts,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
                <div className="fluid__instructions">
                    <h3>Basic Example</h3>
                    <p>
                        Side by Side enlargement for mouse input.
                    </p>
                    <p>
                        In place enlargement for touch input.
                    </p>
                    <p>
                        Fluid between breakpoints.
                    </p>
                    <p>
                        Please see
                        for details.
                    </p>
                </div>
                <div style={{ height: '500px' }} />
            </div>
        );
    }
}
