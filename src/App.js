import './App.scss';

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import Navigation from "./components/Navigation";

import post1 from './assets/images/post/1.png'
import post2 from './assets/images/post/2.png'
import post3 from './assets/images/post/3.png'
import post4 from './assets/images/post/4.png'
import post5 from './assets/images/post/5.png'
import post6 from './assets/images/post/6.png'
import post7 from './assets/images/post/7.png'
import post8 from './assets/images/post/8.png'
import post9 from './assets/images/post/9.png'

function App() {

    return (
        <>
            <Header/>
            <Navigation/>
            <div className="container">
                <div className="product">
                    <ProductItem image={post1} title="Lifestyle" name="Eat Right For Your Exercise Regime" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post2} title="Lifestyle" name="The Look: Perfect Balance" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post3} title="Style" name="Fun Things to Do in Rome" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post4} title="Style" name="24 Colorful Ceilings That Add Unexpected Contrast to Any Room" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post5} title="Lifestyle" name="9 New Songs to Heat Up Your Fall Playlist" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post6} title="Events" name="What You Need on Your Bedside Table" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post7} title="Travel" name="When Two Wheels Are Better Than Four" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post8} title="Travel" name="26 Living Room Ideas from the Homes of Top Designers" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                    <ProductItem image={post9} title="Music" name="What Makes Your City’s Style Unique" year="" text="Structured gripped tape invisible moulded cups for sauppor firm hold strong power mesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"/>
                </div>
            </div>
        </>
    );
}

export default App;
