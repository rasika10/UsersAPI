import UsersList from "./components/StudentList";
import ViewDetails from "./components/DetailsComponent";
import AddStudent from "./components/AddStudent";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpdateStudent from "./components/update";
import EditStudent from "./components/Edit";

function App() {
  return (
    <Router>
      <Route exact path={["/", "/defaultPath"]} component={UsersList} />
      <Route exact path={["/details/:cell"]} component={ViewDetails} />
      <Route exact path={["/update/:cell"]} component={UpdateStudent} />
      {/* <Route exact path={["/update/:cell"]} component={EditStudent} /> */}
      <Route exact path={["/add"]} component={AddStudent} />
    </Router>
  );
}

export default App;
