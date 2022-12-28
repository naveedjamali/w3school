import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      color: "red",
     
    };
  }

  shouldComponentUpdate(){
    return false;
  }

  changeColor = ()=> {
    this.setState({ color: this.state.color=== "Green"?'Red':'Green' });
  }
  

  render() {
    return (
      <>
        <h1>I am a {this.state.color} color car from class component</h1>
        <button onClick={this.changeColor}> Make it {this.state.color==='Red'?"Green":'Red'}</button>
      </>
    );
  }
}

export default Car;
