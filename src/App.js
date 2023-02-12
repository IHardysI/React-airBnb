import React from "react";
import Style from "./style.scss"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data"


function App() {
    const cardElement = data.map(item => {
        return <Card
            key={item.id} 
            img={item.img}
            starNum={item.starNum}
            staples={item.staples}
            p={item.p}
            price={item.price}
        />
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <div className="card__list card__container">
                {cardElement}
            </div>
        </div>
    )
}

export default App