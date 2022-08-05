import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addStudentAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
const AddStudent = () => {
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
      dispatch(addStudentAction(values));
      console.log("all values", values);
      //   alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.touched);
  console.log(formik);

  return (
    <div>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
