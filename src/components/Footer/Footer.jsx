import imgSrc from "../../assets/icons/logo.png";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/instagram.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="doormat-navigation">
        <li className="footer-title">Doormat Navigation</li>
        <li className="doormat-link">
          <Link to="/little-lemon/" className="footer-link">
            Home
          </Link>
        </li>
        {/* <li className="doormat-link">
          <Link to="/little-lemon/" className="footer-link">
            About
          </Link>
        </li>
        <li className="doormat-link">
          <Link to="/little-lemon/" className="footer-link">
            Menu
          </Link>
        </li> */}
        <li className="doormat-link">
          <Link to="/little-lemon/booking-table" className="footer-link">
            Reservation
          </Link>
        </li>
        {/* <li className="doormat-link">
          <Link to="/little-lemon/" className="footer-link">
            Order Online
          </Link>
        </li>
        <li className="doormat-link">
          <Link to="/little-lemon/" className="footer-link">
            Login
          </Link>
        </li> */}
      </ul>
      <ul className="contacts">
        <li className="footer-title">Contact</li>
        <li className="contact">
          <a href="" className="footer-link">
            Address
          </a>
        </li>
        <li className="contact">
          <a href="" className="footer-link">
            Phone number
          </a>
        </li>
        <li className="contact">
          <a href="" className="footer-link">
            Email
          </a>
        </li>
      </ul>
      <ul className="socials">
        <li className="footer-title">Social Links</li>
        <li className="social">
          <a href="">
            <img src={facebook} alt="Facebook icon" />
          </a>
        </li>
        <li className="social">
          <a href="">
            <img src={insta} alt="Instagram icon" />
          </a>
        </li>
        <li className="social">
          <a href="">
            <img src={whatsapp} alt="Whatsapp icon" />
          </a>
        </li>
      </ul>
      <img className="footer-img" src={imgSrc} alt="Logo" />
    </footer>
  );
}
