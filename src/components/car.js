import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    
        this.state = {favoritecolor: "red"};  
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  changeColor = () => {
    this.setState({ color: this.state.favoritecolor === "red" ? "Green" : "red" });
  };

  getSnapshotBeforeUpdate(prevProps, prevStat){

    document.getElementById('div1').innerHTML = `Before update, the color was ${prevStat.favoritecolor}`;
    return true;

  }

  componentDidUpdate() {
    
    document.getElementById('div2').innerHTML = `After update, the color is ${this.state.favoritecolor}`;
    return true;
  }

  render() {
    return (
      <>
        <h1>I am a {this.state.favoritecolor} color car from class component</h1>
        <button onClick={this.changeColor}>
          {" "}
          Make it {this.state.favoritecolor === "Red" ? "Green" : "Red"}
        </button>
        <div id="div1" />
        <div id="div2"/>
      </>
    );
  }
}

export default Car;
