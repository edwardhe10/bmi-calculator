import React, { useState } from "react";
import BMIForm from "./BMIForm";

function BMIResult() {
  const [bmi, setBMI] = useState("");
  const [msg, setMsg] = useState("");

  const calcBMI = (weight, height) => {
    let bmi = (weight / (height * height)) * 703;
    setBMI(bmi.toFixed(1)); // Ex: 25.1

    if (bmi < 18.5) {
      setMsg("You are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMsg("You are healthy weight.");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMsg("You are overweight.");
    } else {
      setMsg("You are obese.");
    }
  };

  return (
    <div>
      <BMIForm onSubmit={calcBMI} />
      <h3>Your BMI is: {bmi}</h3>
      <p>{msg}</p>
    </div>
  );
}

export default BMIResult;
