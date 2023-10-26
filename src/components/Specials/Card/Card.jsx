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
      <a className="order-btn" href="">
        <p>Order a delivery</p>
        <img className="delivery" src={delivery} alt="Delivery icon" />
      </a>
    </article>
  );
}
