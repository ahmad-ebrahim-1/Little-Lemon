import about from "../../assets/icons/icons8-info-popup-100.png";
import restaurant from "/restaurant.jpg";
import "./about.css";

export default function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About</h1>
      <div className="card">
        <img
          className="restaurant-img"
          src={restaurant}
          alt="Restaurant image"
        />
        <div className="card__content">
          <img src={about} alt="About image" />
          <p className="card__description">
            <span>Little Lemon</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus maiores temporibus ratione expedita
            officia fugiat ut consequatur autem voluptas eos eaque cum eius
            numquam dolorem ipsa aliquid officiis, beatae eum.
          </p>
        </div>
      </div>
    </section>
  );
}
