import React, { Component } from "react";

export default class Quiz extends Component {

  render() {
    return (
      <div className="Quiz1">
        <div className="container">
            <h1>Question</h1>
            <p className="num">1 of 15</p>
            <h4 className="question">Which is the only animal that can't jump?</h4>
            <div className="container1">
                <button className="options">Dog</button>
                <button className="options">Elephant</button>
            {/* </div>
            <div className="container1"> */}
                <button className="options">Goat</button>
                <button className="options">Lion</button>
            </div>
            <div className="container2">
                <button className="btn btn1">Previous</button>
                <button className="btn btn2">Next</button>
                <button className="btn btn3">Quit</button>
            </div>
        </div>
      </div>
    );
  }
}