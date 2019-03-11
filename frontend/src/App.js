/*global localStorage */
/*global fetch */
import React, { Component } from "react";
import "./App.css";
import Frequency from "./containers/Frequency";
import Loader from "./containers/Loader";

class App extends Component {
  state = {
    loading: false,
    number: "",
    data: [],
    err: false,
    errMsg: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, err: false });
  };

  fetchData = () => {
    if (!this.state.number)
      this.setState({
        err: true,
        errMsg: "Please enter a valid number to make request."
      });
    else {
      this.setState({ loading: true });
      fetch(
        `http://ec2-18-218-14-83.us-east-2.compute.amazonaws.com:3001/api/user/getfrequency/${
          this.state.number
        }`
      )
        .then(res => res.json())
        .then(res => {
          if (res.status === "success")
            this.setState({ data: res.data, loading: false });
          else if (res.status === "failure")
            this.setState({ err: true, errMsg: res.message, loading: false });
        })
        .catch(err =>
          this.setState({
            err: true,
            errMsg: "Internal server error.",
            loading: false
          })
        );
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Enter a number to find the frequency.</h1>
        <div>
          {this.state.loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div>
              <input
                name="number"
                onChange={this.handleChange}
                value={this.state.number}
                type="number"
              />
              <button onClick={this.fetchData}>Submit</button>
            </div>
          )}
        </div>
        {this.state.err && <div className="red">{this.state.errMsg}</div>}
        <Frequency data={this.state.data} />
      </div>
    );
  }
}

export default App;
