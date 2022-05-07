import React from 'react';
import Button from "./Components/Buttons";
import Product from "./Components/Product";
import Tile from "./Components/Tiles";


import handyBag from "./assets/bag_1.png";
import stylishBag from "./assets/bag_2.png";
import simpleBag from "./assets/bag_3.png";
import trendyBag from "./assets/bag_4.png";

import brand from "./assets/brand.png";
import story from "./assets/our_story.png";

import './App.css';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonTitle="to the collection"
                    onClick
                    disabled={false}
                />

                <Button
                    buttonTitle="shop all bags"
                    onClick
                    disabled={false}
                />
                <Button
                    buttonTitle="pre-orders"
                    disabled={true}
                    onClick

                />

            </nav>
            <main>

                <Product
                    siteTag="Best seller"
                    image={handyBag}
                    title="The handy bag"
                    price="€400,-"
                />


                <Product
                    siteTag="Best seller"
                    image={stylishBag}
                    title="The stylish bag"
                    price="€250,-"

                />


                <Product
                    siteTag="New collection"
                    image={simpleBag}
                    title="The simple bag"
                    price="€300,-"

                />


                <Product
                    siteTag="New collection"
                    image={trendyBag}
                    title="The trendy bag"
                    price="€150,-"

                />


            </main>

            <footer>

                <Tile
                    title="The brand"
                >
                    <p>Lorem ipsum dolor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut, laudantium.</p>
                </Tile>

                <Tile>
                    <img src={brand} alt="brand"/>
                </Tile>

                <Tile>
                    <img src={story} alt="story"/>
                </Tile>

                <Tile
                    title="Our story"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.</p>

                </Tile>


            </footer>
        </>
    );
}


export default App;



