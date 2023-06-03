import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BuyNow from "./pages/BuyNow";
import Demos from "./pages/Demos";
import Post from "./pages/post";
import Categories from "./pages/categories";
import Shop from "./pages/shop";
import ProductItem from "./pages/ProductItem";
import {Provider} from "react-redux";
import {createStore} from "redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/demos" element={<Demos/>}/>
                <Route path="/post" element={<Post/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/buy Now" element={<BuyNow/>}/>
                <Route path="*" element={<ProductItem/>}/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);
