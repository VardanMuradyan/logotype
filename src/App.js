import './App.scss';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function App() {
    const [dataList, setDataList] = useState([])
    const [filteredDatalist, setFilteredDatalist] = useState([])
    const [filteredItem, setFilteredItem] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/VardanMuradyan/data/master/data.json')
            .then(data => data.json())
            .then(data1 => {
                setDataList(data1)
                setFilteredDatalist(data1)
            })
    }, [])

    // console.log(dataList)
    useEffect(() => {
        // const x = filteredItem.toLowerCase();
        const dataListText = dataList.filter((value) => {
            return filteredItem.toLowerCase().includes(filteredItem) === value.title.toLowerCase().includes(filteredItem)
        })
        setFilteredDatalist(dataListText)

    }, [filteredItem])

    const handleClick = (item) => {
        //console.log(item)
        navigate('/productitem',{state:item})
    }

    return (
        <>
            <Header filteredItem={filteredItem} setFilteredItem={setFilteredItem}/>
            <Navigation/>
            <div className="container">
                <div className="product">
                    {
                        filteredDatalist?.length > 0 ? filteredDatalist.map((item, index) => {
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
