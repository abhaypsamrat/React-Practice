import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { favoritecolor: "Red" }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 1000)
  }

  componentDidUpdate() {
    console.log("The updated favorite is " + this.state.favoritecolor);
  }

  render() {
    return (
      <div>
        <div>Hello, my color is {this.state.favoritecolor}</div>
        <div id="mydiv"></div>
      </div>
    )
  }
}

export default App;