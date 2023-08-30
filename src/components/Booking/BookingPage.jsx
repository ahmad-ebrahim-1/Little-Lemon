import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingResponse from "./BookingResponse";

export default function BookingPage(props) {
  const [isLoading, setIsLoading] = useState(true);

  function waitResponse() {
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    } catch {
      throw Error("error with waitResponse function..!");
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
          waitResponse={waitResponse}
        />
        {props.alert && (
          <BookingResponse setAlert={props.setAlert} isLoading={isLoading} />
        )}
      </div>
    </>
  );
}
