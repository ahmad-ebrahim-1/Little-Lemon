import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingResponse from "./BookingResponse";

export default function BookingPage(props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="form-wrapper">
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
          waitResponse={() => {
            setTimeout(() => {
              setIsLoading(false);
            }, 4000);
            setIsLoading(true);
          }}
        />
        {props.alert && (
          <BookingResponse setAlert={props.setAlert} isLoading={isLoading} />
        )}
      </div>
    </>
  );
}
