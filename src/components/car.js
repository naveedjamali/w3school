import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    
        this.state = {favoritecolor: props.favoritecolor};  
  }
 

  changeColor = () => {
    setTimeout(() => {
        this.setState({ favoriteColor: this.state.favoritecolor === "red" ? "Green" : "red" })
    }, 1000);;
  };



  componentDidMount(){
    this.changeColor();
  }
  componentDidUpdate() {
    this.changeColor();
  }

  

  render() {
    return (
      <>
        <h1>I am a {this.state.favoriteColor} color car from class component</h1>
        
      </>
    );
  }
}

export default Car;
