import about from "../../assets/icons/icons8-info-popup-100.png";
import restaurant from "/restaurant.jpg";
import "./about.css";

export default function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About</h1>
      <div class="card">
        <img
          className="restaurant-img"
          src={restaurant}
          alt="Restaurant image"
        />
        <div class="card__content">
          <p class="card__title">
            <img src={about} alt="About image" />
          </p>
          <p class="card__description">
            Little lemon restaurant is located in Chicago city, serving all
            kinds of western and oriental dishes prepared by the best chefs on
            the international level. It is also distinguished by its wonderful
            view, modern design, and certainly its terrace with its amazing
            view!
          </p>
        </div>
      </div>
    </section>
  );
}
