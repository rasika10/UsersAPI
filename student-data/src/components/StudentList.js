import React, { useEffect, useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getAllUsers,
  setUsers,
  deleteUser,
  getUserAction,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import * as ReactBootstrap from "react-bootstrap";
import ReactPaginate from "react-paginate";
import AddStudent from "./AddStudent";
import ViewDetails from "./DetailsComponent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
function SimpleDialog(props) {
  const { open, handleClose, OpenDetails } = props;

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle>title</DialogTitle>
        <DialogContent dividers>
          <AddStudent />
        </DialogContent>
        {/* <DialogActions>
        <Button type="submit" autoFocus  color="primary" >
          Submit
        </Button>
      </DialogActions> */}
      </Dialog>

      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={OpenDetails}
      >
        <DialogTitle>title</DialogTitle>
        <DialogContent dividers>
          <ViewDetails />
        </DialogContent>
      </Dialog>
    </>
  );
}

const UsersList = () => {
  let dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [studData, setStudData] = React.useState("");
  const [id, setId] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(setUsers(), setLoading(true));
  }, []);

  const { users } = useSelector((state) => state.user);
  console.log("users", users);

  const handleOpenDetails = (id) => {
    // dispatch(getUserAction(id));
    setId(id);
    console.log("users", users[id]);
    var picture = users[id].picture.medium;
    var userIdName = users[id].id.name;
    var userIdValue = users[id].id.value;
    var tname = users[id].name.title;
    var fname = users[id].name.first;
    var lname = users[id].name.last;
    var date = users[id].dob.date.split("T")[0];
    var age = users[id].dob.age;
    var email = users[id].email;
    var gender = users[id].gender;
    var location = users[id].location.city;

    var data = {
      picture: picture,
      userIdName: userIdName,
      userIdValue: userIdValue,
      tname: tname,
      fname: fname,
      lname: lname,
      date: date,
      age: "Age:" + age,
      gender: gender,
      email: email,
      location: location,
    };
    setStudData(data);
    // setOpenDetails(true);
  };
  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleDelete = (cell) => {
    if (window.confirm("Are you sure You want to delete?"));
    dispatch(deleteUser(cell));
  };

  return (
    <div className="container">
      <Card>
        <Card.Header className={"border border-dark bg-dark text-white"}>
          {" "}
          Student List
          <span style={{ float: "right" }}> Student Count {users.length}</span>
        </Card.Header>
        <Card.Body>
          <span className="col-md-8">
            <span className="input-group mb-3 ">
              <input
                type="text"
                className="form-control "
                placeholder="Search user"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              {/* <Link
                type="button"
                to={"/add"}
                className="btn btn-primary "
                id="tab"
              >
                Add User
              </Link> */}
              {studData.name}
              <Button onClick={handleOpen} variant="outlined" color="primary">
                Add Student
              </Button>
              <SimpleDialog open={open} handleClose={handleClose} />
            </span>
          </span>

          <Table variant="">
            <thead className={"border border-dark bg-dark text-white"}>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                users
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.cell
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.phone
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.email.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((stud, index) => (
                    <tr key={stud.cell}>
                      <td>{stud.cell}</td>
                      <td>
                        {stud.name.first} {stud.name.last}
                      </td>
                      <td>{stud.dob.age}</td>
                      <td> {stud.dob.date.split("T")[0]}</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Link
                            type="button"
                            to={"/details/" + stud.cell}
                            // onClick={() => handleOpenDetails(index)}
                            className="btn btn-warning"
                          >
                            Details
                          </Link>
                          <Button
                            type="button"
                            onClick={() => handleOpenDetails(index)}
                            className="btn btn-warning"
                          >
                            Details
                          </Button>

                          <Button
                            type="button"
                            onClick={() => handleDelete(stud.cell)}
                            className="btn btn-danger"
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
              ) : (
                <ReactBootstrap.Spinner animation="border" variant="primary" />
              )}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
          {/* <ViewDetails /> */}
        </Card.Body>
      </Card>
      <div style={{ display: studData !== " " ? "block" : "none" }}>
        <>
          <img src={studData.picture} alt="" />
          <br />
          {studData.userIdName}
          {studData.userIdValue} <br />
          {studData.tname}
          {""} {studData.fname}
          {""} {studData.lname}
          <br />
          {studData.date} {""} {""}
          {studData.age} <br />
          {studData.gender}
          <br />
          {studData.email}
          <br />
          {studData.location}
        </>
      </div>
    </div>
  );
};

export default UsersList;
