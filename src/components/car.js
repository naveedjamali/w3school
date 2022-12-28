import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    
        this.state = {favoritecolor: "red"};  
  }
 

  changeColor = () => {
    setTimeout(() => {
        this.setState({ color: this.state.favoritecolor === "red" ? "Green" : "red" })
    }, 1000);;
  };



  componentDidUpdate() {
    this.changeColor();
  }

  render() {
    return (
      <>
        <h1>I am a {this.state.favoritecolor} color car from class component</h1>
        
      </>
    );
  }
}

export default Car;
