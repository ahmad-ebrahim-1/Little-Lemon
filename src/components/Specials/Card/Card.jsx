import delivery from "../../../assets//icons/delivery-movement-svgrepo-com.svg";
import "./card.css";

export default function Card(props) {
  return (
    <article className="card-container">
      <img className="card-image" src={props.imgSrc} alt="Card image" />
      <div className="row">
        <h3 className="title">{props.title}</h3>
        <p className="price">{props.price}</p>
      </div>
      <p className="description">{props.description}</p>
      <div className="order-row">
        <a className="order-btn" href="">
          Order a delivery
        </a>
        <img className="delivery" src={delivery} alt="Delivery icon" />
      </div>
    </article>
  );
}
