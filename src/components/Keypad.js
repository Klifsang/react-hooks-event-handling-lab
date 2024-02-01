// Code Keypad Component Here

// Keypad.js
import React, { useState } from "react";

const Keypad = () => {
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const newPassword = event.target.value;
    setPassword(newPassword);
    console.log("Entering password...");
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Keypad;
