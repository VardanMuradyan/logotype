import React from 'react';


function ProductItem(props) {
    return (
        <>
            <div className="product_item">
                <div className="__item-img">
                    <img src={props.image} alt="#"/>
                </div>
                <div className="__item-content">
                    <p className="content-title">{props.title}</p>
                    <h2 className="content-name">{props.name}</h2>
                    <div>
                        <span>1</span>
                        <span>3</span>
                        <span>2</span>
                    </div>
                    <p className="content-text">{props.text}</p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;