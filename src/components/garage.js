import React from "react";
import Car from "./car";

function Garage(props){
    return (<>
    <h1>This is my garage, which is located at {props.location}</h1>
    <Car color='Pink' /></>);
} 


export {Garage};