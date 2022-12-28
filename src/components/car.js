import React from 'react'

class Car extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                color: 'red',

            }}

            render(){
                return (<>
                <h1>I am a {this.state.color} color car from class component</h1></>)
            }
           

           
}

export default Car;