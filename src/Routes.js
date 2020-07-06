import React, { Component } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { Route, Switch, Redirect } from "react-router-dom";
// import NotFound from "./NotFound";

export default class Routes extends Component {
  render() {
    const getDog = (props) => {
      const name = props.match.params.name;
      const currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      if (currentDog) {
        return <DogDetails {...props} dog={currentDog} />;
      } else {
        return <Redirect to="/dogs" />;
      }
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogList={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}
