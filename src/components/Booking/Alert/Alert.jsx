import "./alert.css";
import check from "../../../assets/icons/checked.png";

export default function Alert(props) {
  return (
    <div className="alert">
      <div className="txt">
        <h2>Reservation done</h2>
        <img src={check} alt="Check icon" />
      </div>
      <button onClick={() => props.setAlert(false)}>Close</button>
    </div>
  );
}
