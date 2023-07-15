import React, { useState } from "react";

function BMIForm({ onSubmit }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height!");
      return;
    }
    onSubmit(weight, height);
    setWeight("");
    setHeight("");
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <form className="bmi-form">
      <div>
        <label>Weight (lbs):</label>
        <input
          className="weight-input"
          type="number"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div>
        <label>Height (in):</label>
        <input
          className="height-input"
          type="number"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="refresh-button" onClick={refresh} type="submit">
          Refresh
        </button>
      </div>
    </form>
  );
}

export default BMIForm;
