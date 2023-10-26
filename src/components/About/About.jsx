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
            <span style={{ textAlign: "center" }}>Little Lemon</span>{" "}
            <span className="content__line"></span> Welcome to Little Lemon
            Restaurant, a hidden gem in Chicago's vibrant neighborhood. Our
            intimate eatery offers delectable cuisine, warm ambiance, and
            exceptional service. Led by Chef Maria Sanchez, our culinary team
            creates contemporary American dishes with fresh, locally sourced
            ingredients. From succulent seafood to flavorful pasta, there's
            something for every palate. Our attentive staff, handcrafted
            cocktails, and curated wine list ensure a memorable dining
            experience. Join us at Little Lemon Restaurant and discover why
            we're a cherished culinary destination in Chicago.
          </p>
        </div>
      </div>
    </section>
  );
}
