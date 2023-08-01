import star from "../../../assets/icons/icons8-star-64.png";
import "./testimonial.css";

export default function Testimonial(props) {
  return (
    <article className="testimonial">
      <div className="rating">
        <p>{props.rating}</p>
        <img src={star} alt="Star icon" />
      </div>
      <div className="details">
        <img src={props.imgSrc} alt="Reviewer photo" />
        <p className="name">{props.name}</p>
      </div>
      <p className="review-text">{props.feedBack}</p>
    </article>
  );
}
