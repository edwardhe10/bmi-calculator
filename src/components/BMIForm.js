import React, { useState } from "react";

function BMIForm({ onSubmit }) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height!");
    }
    onSubmit(weight, height);
    setWeight(0);
    setHeight(0);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <form className="bmi-form" onSubmit={handleSubmit}>
      <div>
        <label>Weight (lbs)</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div>
        <label>Height (in)</label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button onClick={refresh} type="submit">
          Refresh
        </button>
      </div>
    </form>
  );
}

export default BMIForm;
