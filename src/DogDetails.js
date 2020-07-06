import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogDetails extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="DogDetails">
        <div className="row">
          <div className="col-md-5 mx-auto my-5">
            <div className="card shadow-lg">
              <img className="card-img-top" src={dog.src} alt={dog.name} />
              <div className="card-body p-0 bg-light">
                <div className="ml-3">
                  <h5 className="card-title my-2 display-4">{dog.name}</h5>
                  <h5 className="text-muted mb-3">{dog.age} years old</h5>
                </div>
                <ul className="list-group list-group-flush">
                  {dog.facts.map((fact, i) => (
                    <li className="list-group-item" key={i}>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <Link to="/dogs" className="btn btn-info px-4">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
