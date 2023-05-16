import React from 'react';

const name = () => {
    return [
        {
            title: "Lifestyle",
            name: "Eat Right For Your Exercise Regime",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Lifestyle",
            name: "The Look: Perfect Balance",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Style",
            name: "Fun Things to Do in Rome",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Style",
            name: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room\n",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Lifestyle",
            name: "9 New Songs to Heat Up Your Fall Playlist",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Events",
            name: "What You Need on Your Bedside Table",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Travel",
            name: "When Two Wheels Are Better Than Four",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Travel",
            name: "26 Living Room Ideas from the Homes of Top Designers\n",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            title: "Music",
            name: "What Makes Your City’s Style Unique",
            subName: "Niek Bove",
            date: "April 8, 2018",
            views: "3K Views",
            text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
    ]
}


const imgArr = () => [
    {href: './images/post/1.png'},
    {href: './images/post/2.png'},
    {href: './images/post/3.png'},
    {href: './images/post/4.png'},
    {href: './images/post/5.png'},
    {href: './images/post/6.png'},
    {href: './images/post/7.png'},
    {href: './images/post/8.png'},
    {href: './images/post/9.png'}
]


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
                    <p className="content-text">{props.text}</p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;