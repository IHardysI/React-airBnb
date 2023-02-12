import star from "../img/card-star.svg"
import img1 from "../img/card-1.png";
import img2 from "../img/card-2.png";
import img3 from "../img/card-3.png";

export default function Card(props) {
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.openSpots <= 5 && props.item.openSpots > 0) {
        badgeText = `ONLY ${props.item.openSpots} LEFT`
    } 
    
    return(
        <div className="card">   
            {badgeText && <div className="card__spot">{badgeText}</div>}
            <img src={img2} className="card__image" />
            <div className="card__stats">
                <img src={star}/>
                <span>{props.item.starNum}</span>
                <span className="gray">{props.item.staples} ·  </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.item.p}</p>
            <p><span className="bold">From {props.item.price}</span> / person</p>
        </div>
    )
}