import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingResponse from "./BookingResponse";

export default function BookingPage(props) {
  const [isLoading, setIsLoading] = useState(true);

  function wait() {
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch {
      throw Error("error with wait function..!");
    } finally {
      setIsLoading(true);
    }
  }

  return (
    <>
      <div className="form-wrapper">
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
          wait={wait}
        />
        {props.alert && (
          <BookingResponse setAlert={props.setAlert} isLoading={isLoading} />
        )}
      </div>
    </>
  );
}
