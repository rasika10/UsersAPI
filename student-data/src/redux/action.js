import axios from "axios";
export const getAllUsers = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://randomuser.me/api/?results=50");
    console.log(response.data.results);
    dispatch({
      type: "GET_ALL_USERS",
      payload: response.data.results,
    });
  };
};
export const setUsers = () => {
  return {
    type: "SET_ALL_USERS",
  };
};

export const deleteUser = (cell) => {
  return {
    type: "DELETE_POST",
    cell,
  };
};

export const getUserAction = (cell) => {
  console.log("id", cell);
  return {
    type: "GET_USER",
    cell,
  };
};

export const addStudentAction = (data) => {
  const { first, last, date, age } = data;
  console.log("data", data);
  return {
    type: "ADD_USER",
    payload: {
      cell: new Date().getTime().toString(),
      name: { first, last },
      dob: { date, age },
    },
  };
};

export const updateUserAction = (data, cell) => {
  console.log("id data", cell, data);
  const { first, last, age } = data;
  return {
    type: "EDIT_STUDENT",
    payload: {
      cell,
      name: { first, last },
      dob: { age },
    },
  };
};
