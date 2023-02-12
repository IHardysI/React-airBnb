import heroImg from "../img/hero-group.png"

export default function Hero() {
    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__photo">
                    <img src={heroImg} alt="photo"/>
                </div>
                <div className="hero__text">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
                </div>
            </div>
        </section>
    )
}