import { useState } from "react";
import "./bookingForm.css";

export default function BookingForm(props) {
  const [formData, setFormData] = useState({
    date: new Date(),
    time: "17:00",
    guests: 2,
    occasion: "Ordinary dinner",
  });
  const [errorMessages, setErrorMessages] = useState({});

  function validate() {
    const validationErrors = {};
    let isValid = true;
    // validate date
    if (new Date(formData.date) < new Date()) {
      validationErrors.date = "please enter a valid date";
      isValid = false;
    }
    // validate time
    if (!formData.time.trim()) {
      validationErrors.time = "this field is required";
      isValid = false;
    }
    // validate number of guests
    if (formData.guests < 1 || formData.guests > 20) {
      validationErrors.guests = "please choose a number between 1 and 20";
      isValid = false;
    }
    // validate occasion
    if (!formData.occasion.trim()) {
      validationErrors.occasion = "this field is required";
      isValid = false;
    }
    setErrorMessages(validationErrors);
    return isValid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (e.target.name === "date") {
      props.dispatch(formData.date);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      props.submitForm({ formData });
      props.waitResponse();
      setFormData({
        date: new Date(),
        time: "17:00",
        guests: 2,
        occasion: "Birthday",
      });
    }
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Reservations</h1>

      <div className="form-input">
        <label htmlFor="date">
          Choose date
          <span style={{ color: "#ff3c00" }}>*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errorMessages.date && (
          <span style={{ color: "#ff3c00" }}>{errorMessages.date}</span>
        )}
      </div>
      <div className="form-input">
        <label htmlFor="time">
          Available times <span style={{ color: "#ff3c00" }}>*</span>
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          {props.availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        {errorMessages.time && (
          <span style={{ color: "#ff3c00" }}>{errorMessages.time}</span>
        )}
      </div>
      <div className="form-input">
        <label htmlFor="guests">
          Number of guests <span style={{ color: "#ff3c00" }}>*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
        {errorMessages.guests && (
          <span style={{ color: "#ff3c00" }}>{errorMessages.guests}</span>
        )}
      </div>
      <div className="form-input">
        <label htmlFor="occasion">
          Occasion <span style={{ color: "#ff3c00" }}>*</span>
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Ordinary dinner</option>
          <option>Special occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errorMessages.occasion && (
          <span style={{ color: "#ff3c00" }}>{errorMessages.occasion}</span>
        )}
      </div>
      <input className="form-btn" type="submit" value="Make a Reservation" />
    </form>
  );
}
