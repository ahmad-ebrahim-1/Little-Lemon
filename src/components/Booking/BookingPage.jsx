import BookingForm from "./BookingForm";
import BookingResponse from "./BookingResponse";

export default function BookingPage(props) {
  return (
    <>
      <div className="form-wrapper">
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
        />
        {props.alert && <BookingResponse setAlert={props.setAlert} />}
      </div>
    </>
  );
}
