import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red" };
  }
  componentDidMount() {
    // Changing the state after 2 sec
    // from the time when the component is rendered
    setTimeout(() => {
      this.setState({ color: "White" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p>Color name change after 2 second</p>
        <p>This is {this.state.color} Color</p>
      </div>
    );
  }
}
