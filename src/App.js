import React, { Component } from "react";
import Navbar from "./Navbar";
import Route from "./Routes";
import hazel from "./images/hazel.jpg";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Route dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}
