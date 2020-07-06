import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <p className="DogList-title display-1 text-center text-muted mb-4">
          Dogs List
        </p>
        <div className="row card-deck ">
          {this.props.dogList.map((item) => (
            <div className="col-md-4 card shadow-sm m-3 p-0" key={item.name}>
              <img src={item.src} alt={item.name} className="card-img-top" />
              <div className="card-body bg-light">
                <h5 className="card-title text-center display-4">
                  <Link
                    className=" text-secondary"
                    to={`/dogs/${item.name}`}
                    style={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </Link>
                </h5>
                {/* {item.facts.map((fact, i) => (
                    <p
                      key={i}
                      className="text-center card-text"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {fact}
                    </p>
                  ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
