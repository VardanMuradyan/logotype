import './App.scss';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {listYear, productlist} from "./helpers/constant";
import {useEffect} from "react";

function App() {
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Karen919/new/main/data.json')
            .then(data=>data.json())
            .then(data1=>console.log(data1))
    },[])
    return (
        <>
            <Header/>
            {/*{!isMobile && <Navigation />}*/}
            <Navigation/>
            <div className="container">
                <div className="product">
                    {
                        productlist.map((item, index) => {
                            return (
                                <div key={index} className="product_item">
                                    <div className="__item-img">
                                        <img key={item} src={item.img} alt="#"/>
                                    </div>
                                    <div className="__item-content">
                                        <p className="content-title">{item.title}</p>
                                        <h2 className="content-name">{item.name}</h2>
                                        <div className="content__texts">
                                            {
                                                listYear.map((item) =>
                                                    <>
                                                        <p>{item.nameUs}</p>
                                                        <span/>
                                                        <p>{item.yearBlog}</p>
                                                        <span/>
                                                        <p>{item.views}</p>
                                                    </>)
                                            }
                                        </div>
                                        <p className="content-text">{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default App;
