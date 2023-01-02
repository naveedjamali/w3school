import React from "react";
import { useState } from "react";

export default function MyForm(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Enter your age:{" "}
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
