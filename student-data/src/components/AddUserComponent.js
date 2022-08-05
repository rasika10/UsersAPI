import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { addUserAction } from "../redux/action";
import { connect } from "react-redux";

class AddUser extends Component {
  state = {
    name: { first: " ", last: "" },
    date: { age: "", dob: "" },
  };

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addUserAction(this.state);
    this.setState({
      name: { first: " ", last: "" },
      date: { age: "", dob: "" },
    });
  };

  render() {
    return (
      <div className="container" id="update">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <h3>Add User</h3>
          </Card.Header>
          <div className="form-container">
            <Form onSubmit={this.handleOnSubmit}>
              <Card.Body>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleTextChange}
                    value={this.state.name.first}
                    className="form-control w-50 p-2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleTextChange}
                    value={this.state.name.last}
                    className="form-control w-50 p-2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="text"
                    name="date"
                    onChange={this.handleTextChange}
                    value={this.state.date.age}
                    className="form-control w-50 p-2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Occupation</label>
                  <input
                    type="text"
                    name="date"
                    onChange={this.handleTextChange}
                    value={this.state.date.dob}
                    className="form-control w-50 p-2"
                    required
                  />
                </div>

                <br></br>

                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Add User
                  </button>
                  <Button
                    id="btn"
                    href="/"
                    className="w-30 p-3 float-right"
                    variant="primary"
                  >
                    Back
                  </Button>
                </div>
              </Card.Body>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
export default connect(null, { addUserAction })(AddUser);
