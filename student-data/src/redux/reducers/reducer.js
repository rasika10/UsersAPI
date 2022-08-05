import { getAllUsers } from "../action";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ResponsiveEmbed } from "react-bootstrap";
var usersFromApi;
// const usersFunction = async () => {
//   const response = await axios.get("https://randomuser.me/api/?results=50");

//   await console.log(response.data.results);
//   const temp = await response.data.results;
//   usersFromApi = await temp;
//   console.log("temp", temp);
//   return temp;
// };
// console.log("out temp", usersFunction());
// usersFunction();
// console.log("usersFromApi line 17", usersFromApi);
const initialState = {
  users: [],
};
// console.log("api response", initialState);
// let dispatch = useDispatch();
// dispatch(getAllUsers());
export const PostReducer = (state = initialState, action) => {
  console.log("1 state", state);
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_ALL_USERS":
      return {
        ...state,
      };
    case "DELETE_POST":
      const newlist = state.users.filter((ele) => {
        return ele.cell !== action.cell;
      });

      return {
        ...state,
        users: newlist,
      };
    case "GET_USER":
      const singleUserList = state.users.filter((ele) => {
        return ele.cell == action.cell;
      });
      return {
        ...state,
        users: singleUserList,
      };
    case "ADD_USER":
      var { cell, name, dob } = action.payload;
      console.log("reducer value", action.payload);
      return {
        ...state,
        users: [
          {
            cell: cell,
            dob: dob,
            name: name,
          },
          ...state.users,
        ],
      };

    case "EDIT_STUDENT":
      console.log("reducer value edit", action.payload);

      console.log("cell", action.payload.dob);
      let dataCell = action.payload.cell;
      let datadob = action.payload.dob;
      console.log("datadob", dataCell);
      const list = state.users.filter((ele) => {
        if (ele.dataCell === dataCell) {
          return {
            ...state,
            users: [
              {
                dob: { age: datadob },
                name: action.payload.name,
              },
            ],
          };
        }
        return state;
      });
    // console.log("reducer list", state);
    // return {
    //   ...state,
    //   users: state.users.map((ele) =>
    //     ele.dataCell === dataCell ? { ele: action.payload } : ele
    //   ),
    // };
    // console.log("reducer list", state);
    // return { users: action.payload, ...state };

    default:
      return state;
  }
};
