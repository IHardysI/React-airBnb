import React from "react";
import Style from "./style.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";
import img1 from "./img/card-1.png";
import img2 from "./img/card-2.png";
import img3 from "./img/card-3.png";




function App() {
    // let imgArr = [{name:img1}, {name:img2}, {name:img3}]

    // let imgEl = imgArr.map(item => {
    //     return item.name
    // })

    const cardElement = data.map(item => {
        return <Card
            key={item.id} 
            item={item}
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