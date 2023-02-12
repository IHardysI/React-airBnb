import star from "../img/card-star.svg"

export default function Card({img, starNum, staples, price, p}) {
    return(
        <div className="card">   
            <img src={img} className="card__image" />
            <div className="card__stats">
                <img src={star}/>
                <span>{starNum}</span>
                <span className="gray">{staples} ·  </span>
                <span className="gray">USA</span>
            </div>
            <p>{p}</p>
            <p><span className="bold">From {price}</span> / person</p>
        </div>
    )
}