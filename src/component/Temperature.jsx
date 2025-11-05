import React from "react";
import { useState } from "react";
const Temperature=()=> {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const handleChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    const c = (f - 32) * 5 / 9;
    setCelsius(c.toFixed(2)); 
  };

  return (
    <div>
      <h2>Fahrenheit to Celsius Converter</h2>
      <input
        type="number"
        placeholder="Enter °F"
        value={fahrenheit}
        onChange={handleChange}
      />
      <p>{fahrenheit && `${fahrenheit}°F = ${celsius}°C`}</p>
    </div>
  );
}

export default Temperature;
