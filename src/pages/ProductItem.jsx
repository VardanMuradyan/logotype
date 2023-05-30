import React from 'react';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";


const ProductItem = () => {
    const loc = useLocation()
    // console.log(loc)
    return (
        <>
            <div className="eror product_item">
                <div className="__item-img">
                    <Link to="/"><img src={loc.state.img} alt="#"/></Link>
                </div>
                <div className="__item-content">
                    <p className="content-title">{loc.state.tags}</p>
                    <h2 className="content-name">{loc.state.title}</h2>
                    <div className="content__texts">
                        <p>{loc.state.autor}</p>
                        <span/>
                        <p>{loc.state.date}</p>
                        <span/>
                        <p>{loc.state.views}</p>
                    </div>
                    <p className="content-text">{loc.state.text}</p>
                </div>
            </div>
        </>
    );
};

export default ProductItem;