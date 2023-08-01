import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import BookingPage from "./components/Booking/BookingPage";
import { Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import "./App.css";

function App() {
  // api simulation
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  //useReducer hook
  const [alert, setAlert] = useState(false);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function updateTimes(state, selectedDate) {
    return fetchAPI(new Date(selectedDate));
  }
  function initializeTimes() {
    return fetchAPI(new Date());
  }
  function submitForm(formData) {
    if (submitAPI(formData)) {
      setAlert(true);
    }
  }

  return (
    <main className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking-table"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              alert={alert}
              setAlert={setAlert}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
