import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "Jhon", city: "varanasi", age: 25, country: "India" };
  }

  changeCounrty = () => {
    this.setState({ country: "Srilanka" });
  };

  render() {
    return (
      <div>
        <p>This is class based components</p>
        <p>
          My name is {this.state.name}, {this.state.age} year old.
        </p>
        <p>
          I am from {this.state.city}, which is belong to {this.state.country}.
        </p>
        <button type="button" onClick={this.changeCounrty}>Change Country</button>
      </div>
    );
  }
}

export default App;
