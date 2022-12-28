import React from 'react'
import { ReactDOM } from 'react';

function Car(props){
    return (
        <div>
            <h1>Hi, I am a {props.color} color car</h1>

        </div>
    );

}

export default Car;