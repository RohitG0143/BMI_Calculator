import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      const heightInMeters = height / 100;

      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are a Healthy person");
      } else {
        setMessage("You are Overweight");
      }
    }
  };

  const reset = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (Kg)</label>
            <input
              type="text"
              placeholder="Enter your weight in kilograms"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (Cm)</label>
            <input
              type="text"
              placeholder="Enter your height in centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" onClick={calcBmi} type="submit">
              Calculate BMI
            </button>
            <button className="btn btn-outline" onClick={reset} type="button">
              Reset
            </button>
          </div>
          <div className="center">
            {bmi && <h3>Your BMI is: {bmi}</h3>}
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
