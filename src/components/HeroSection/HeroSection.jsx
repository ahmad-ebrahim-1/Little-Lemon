import image_1 from "/restauranfood.jpg";
import image_2 from "/restaurant chef B.jpg";
import { Link } from "react-router-dom";
import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a localy-sourced menu with daily specials.
        </p>
        <button>
          <Link to="/little-lemon/booking-table" className="hero-router-link">
            Reserve a Table
          </Link>
        </button>
      </div>
      <div className="hero-images">
        <img className="hero-image image-1" src={image_1} alt="Food image" />
        <img className="hero-image image-2" src={image_2} alt="Chef image" />
      </div>
    </section>
  );
}
