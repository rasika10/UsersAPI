import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { getUserAction, updateUserAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";

const UpdateStudent = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let { cell } = useParams();

  const [state, setState] = useState({
    age: "",
    first: "",
    last: "",
  });
  // const [state, setState] = useState({
  //   name: { first: "", last: "" },
  //   dob: { age: "" },
  // });

  const user = useSelector((state) => state.user);
  console.log("stud", user.users);
  // const data = user.users;
  useEffect(() => {
    dispatch(getUserAction(cell));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, []);

  const { first, last, age } = state;

  // const editData = { age, first, last };
  // console.log("edited data", editData);

  // const {
  //   name: { first, last },
  //   dob: { age },
  // } = state;

  console.log("state", state);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log("state change", state);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(state, cell));
    history.push("/");
  };

  return (
    <div className="container" id="update">
      <Card className={"border "}>
        <Card.Header>
          <h3>Edit Student</h3>
        </Card.Header>
        <div className="form-container">
          {/* {user.users.map((ele, index) => (
            <> */}
          <Form onSubmit={handleOnSubmit}>
            <Card.Body>
              <div className="form-group">
                <label>First Name</label>
                <TextField
                  name="first"
                  onChange={handleChange}
                  value={first}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <TextField
                  name="last"
                  onChange={handleChange}
                  value={last || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <TextField
                  type="text"
                  name="age"
                  onChange={handleChange}
                  value={age || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>

              <br></br>

              <div className="form-group">
                <button
                  onChange={handleChange}
                  className="btn btn-primary"
                  type="submit"
                  name="submit"
                >
                  Edit User
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
          {/* </>
          ))} */}
        </div>
      </Card>
      {/* )} */}
    </div>
  );
};

export default UpdateStudent;
