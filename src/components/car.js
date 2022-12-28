import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      color: "red",
      model: "Mustang",
      year: 1964,
    };
  }

  changeColor = ()=> {
    this.setState({ color: this.state.color=== "Green"?'Red':'Green' });
  }
  componentDidMount(){
setTimeout(()=>this.setState({color:'Yellow'}),2000);
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
