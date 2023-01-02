import React from "react";
import { Car } from "./car";

function Garage() {
  const cars = [
    { key: 0, brand: "SUV" },
    { key: 1, brand: "TOYOTA" },
    { key: 2, brand: "HONDA" },
  ];

  return (
    <>
    <h1>Who lives in my Garage</h1>
      {cars.length > 0 ? (
        
        <ol>
       { cars.map((car) => <Car key={car.key} brand={car.brand}/>)}
       </ol>
      ) : (
        <h2>No Cars found</h2>
      )}
    </>
  );
}

export default Garage;
