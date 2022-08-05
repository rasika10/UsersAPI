import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { getUserAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  // const { name, dob, email } = data;
  // console.log("single user", data);
  let dispatch = useDispatch();

  // const [state, setState] = useState({
  //   email: "",
  // });
  let { cell } = useParams();
  useEffect(() => {
    dispatch(getUserAction(cell));
  }, []);
  const user = useSelector((state) => state.user);
  console.log("single user", user);

  // useEffect(() => {
  //   if (user) {
  //     setState({ ...user });
  //   }
  // }, [user]);

  // const { email } = state;

  // console.log("email", email);
  return (
    <div className="container" id="update">
      <Card className={"border"}>
        <Card.Header id="header">
          <h3 className="profile">STUDENT DETAILS</h3>
        </Card.Header>
        <Form>
          <Card.Body id="body">
            <div className="container">
              {user.users.map((stud, index) => (
                <>
                  <div className="profile-item">
                    <img src={stud.picture.medium} alt="" />
                  </div>
                  <div className="profile-item">
                    <h6>
                      <label id="label">Name :</label>
                      {stud.name.title} {stud.name.first} {stud.name.last}
                    </h6>
                  </div>
                  <div className="profile-item">
                    <h6>
                      <label id="label">Age :</label> {stud.dob.age}
                    </h6>
                    <h6>
                      <label id="label">DOB :</label>{" "}
                      {stud.dob.date.split("T")[0]}
                    </h6>
                  </div>
                  <div className="profile-item">
                    <h6>
                      <label id="label">Gender :</label>
                      {stud.gender}
                    </h6>
                  </div>
                  <div className="profile-item">
                    <h6>
                      <label id="label">Email :</label>
                      {stud.email}
                    </h6>
                  </div>
                  <div className="profile-item">
                    <h6>
                      <label id="label">Email :</label>
                      {stud.email}
                    </h6>
                  </div>
                  <div className="profile-item">
                    <h6>
                      <label id="label">Location :</label>
                      {stud.location.city}
                    </h6>
                  </div>
                </>
              ))}

              <Button
                id="btn"
                href="/"
                className="w-30 p-3 float-right"
                variant="primary"
              >
                Home
              </Button>
              <Button
                id="btn"
                href={"/update/" + cell}
                className="w-30 p-3 float-right"
                variant="primary"
              >
                Update
              </Button>
            </div>
          </Card.Body>
        </Form>
      </Card>
    </div>
  );
};

export default ViewDetails;
