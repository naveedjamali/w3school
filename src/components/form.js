import React from "react";
import { useState } from "react";

export default function MyForm(props) {
  const [name, setName] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(name)
        }}
      >
        <label for="myText">Enter you name </label>

        <input
          value={name}
          type="text"
          name="myText"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <h1>{name}</h1>
    </>
  );
}
