import './App.scss';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addFilteredList, addProductItem} from "./store/actions";
import {productListSelector, filteredListSelector} from "./store/selector";

function App() {
    const [filteredItem, setFilteredItem] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productList = useSelector(productListSelector);
    const filteredList = useSelector(filteredListSelector);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/VardanMuradyan/data/master/data.json')
            .then(data => data.json())
            .then(data1 => {
                dispatch(addProductItem(data1))
            })
    }, [])

    useEffect(() => {
        dispatch(addProductItem(productList))
    }, [productList])

    useEffect(() => {
        dispatch(addFilteredList(filteredItem))
    }, [filteredItem])


    const handleClick = (item) => {
        navigate('/productitem', {state: item})
    }

    return (
        <>
            <Header filteredItem={filteredItem} setFilteredItem={setFilteredItem}/>
            <Navigation/>
            <div className="container">
                <div className="product">
                    {
                        filteredList?.length > 0 ? filteredList.map((item, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    handleClick(item)
                                }} className="product_item">
                                    <div className="__item-img">
                                        <img key={item} src={item.img} alt="#"/>
                                    </div>
                                    <div className="__item-content">
                                        <p className="content-title">{item.tags}</p>
                                        <h2 className="content-name">{item.title}</h2>
                                        <div className="content__texts">
                                            <p>{item.autor}</p>
                                            <span/>
                                            <p>{item.date}</p>
                                            <span/>
                                            <p>{item.views}</p>
                                        </div>
                                        <p className="content-text">{item.text}</p>
                                    </div>
                                </div>
                            )
                        }) : <div>
                            Loading....
                        </div>
                    }

                </div>
            </div>
        </>
    );
}

export default App;
