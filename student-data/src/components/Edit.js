import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { updateUserAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
const EditStudent = () => {
  let history = useHistory();
  let { cell } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  console.log("users Add user", users);
  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      date: "",
      age: "",
    },
    validationSchema: Yup.object({
      first: Yup.string()
        .max(15, "Must be 15 character or less")
        .required("Required"),
      last: Yup.string()
        .max(15, "Must be 15 character or less")
        .required("Required"),
      age: Yup.number().required("Required"),
    }),
    onSubmit(values) {
      dispatch(updateUserAction(values, cell));
      console.log("all values", values);
      history.push("/");
      //   alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.touched);
  console.log(formik);

  return (
    <div>
      {users.map((ele, index) => (
        <>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name" style={{ display: "block" }}>
              First Name
            </label>
            <input
              id="name"
              name="first"
              placeholder="Enter your Name"
              type="text"
              value={formik.values.first}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.first && formik.errors.first ? (
              <p style={{ color: "red" }}>{formik.errors.first}</p>
            ) : null}

            <label htmlFor="name" style={{ display: "block" }}>
              last Name
            </label>
            <input
              id="lastname"
              name="last"
              placeholder="Enter your Last Name"
              type="text"
              value={formik.values.last}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.last && formik.errors.last ? (
              <p style={{ color: "red" }}>{formik.errors.last}</p>
            ) : null}
            <label htmlFor="name" style={{ display: "block" }}>
              DOB
            </label>
            <input
              id="date"
              name="date"
              placeholder="Enter your Last Name"
              type="text"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date ? (
              <p style={{ color: "red" }}>{formik.errors.date}</p>
            ) : null}
            <label htmlFor="name" style={{ display: "block" }}>
              Age
            </label>
            <input
              id="age"
              name="age"
              placeholder="Enter your Last Name"
              type="text"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age ? (
              <p style={{ color: "red" }}>{formik.errors.age}</p>
            ) : null}

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Edit User
              </button>
              <button
                id="btn"
                href="/"
                className="btn btn-primary float-right"
                variant="primary"
              >
                Back
              </button>
            </div>
          </form>
        </>
      ))}
    </div>
  );
};

export default EditStudent;
