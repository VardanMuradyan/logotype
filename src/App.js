import './App.scss';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {useEffect, useState} from "react";

function App() {
    const [dataList, setDataList] = useState([])
    const [filteredItem, setFilteredItem] = useState("")

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Karen919/new/main/data.json')
            .then(data => data.json())
            .then(data1 => setDataList(data1))
    }, [])

    useEffect(() => {
        // const x = filteredItem.toLowerCase();
        const dataListText = dataList.filter((value) => {
            return filteredItem.toLowerCase() === value.title.toLowerCase()
        /*????????????  dzelll*/
        })
        setDataList(dataListText)

    }, [filteredItem])

    console.log(filteredItem)
    return (
        <>
            <Header filteredItem={filteredItem} setFilteredItem={setFilteredItem}/>
            {/*{!isMobile && <Navigation />}*/}
            <Navigation/>
            <div className="container">
                <div className="product">
                    {
                        dataList?.length > 0 ? dataList.map((item, index) => {
                            return (
                                <div key={index} className="product_item">
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
