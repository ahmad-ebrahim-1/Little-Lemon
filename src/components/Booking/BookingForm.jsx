import { useState } from "react";
import "./booking.css";

export default function BookingForm(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("");

  function handleDateChange(e) {
    setDate(e.target.value);
    props.dispatch(date);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.waitResponse();
    props.submitForm({
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    });
    setDate("");
    setTime("");
    setGuests("1");
    setOccasion("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Reservations</h1>

      <div className="form-input">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="res-time">Choose time</label>
        <select
          name="reservation-time"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {props.availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
      </div>
      <div className="form-input">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="occasion">Occasion</label>
        <select
          name="reservation-occasion"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <input className="form-btn" type="submit" value="Make Your Reservation" />
    </form>
  );
}
