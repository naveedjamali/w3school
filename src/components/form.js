import React from "react";
import { useState } from "react";

export default function MyForm(props) {
    const [myCar, setMyCar] = useState("VOLVO");
    
    const handleCar = (event)=>setMyCar(event.target.value);

    return (
    <>
    <form>
        <select value={myCar} onChange={handleCar} >
            <option value="FORD">FORD</option>
            <option value="VOLVO">VOLVO</option>
            <option value="TOYOTA">TOYOTA</option>
        </select>
        </form>

        <h1>{myCar}</h1>

        </>  
        );
}
