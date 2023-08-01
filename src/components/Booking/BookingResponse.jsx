import check from "../../assets/icons/checked.png";
import "./booking.css";

export default function BookingResponse(props) {
  return (
    <div className="response-wrapper">
      <div className="response">
        <div className="txt">
          <h2>Sent Succesfully</h2>
          <img src={check} alt="Check icon" />
        </div>
        <button onClick={() => props.setAlert(false)}>Done</button>
      </div>
    </div>
  );
}
