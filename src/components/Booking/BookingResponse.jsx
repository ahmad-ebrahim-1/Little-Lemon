import "./booking.css";
import Loader from "./Loader/Loader";
import Alert from "./Alert/Alert";

export default function BookingResponse(props) {
  return (
    <div className="response-wrapper">
      <div className="response">
        {props.isLoading ? <Loader /> : <Alert setAlert={props.setAlert} />}
      </div>
    </div>
  );
}
