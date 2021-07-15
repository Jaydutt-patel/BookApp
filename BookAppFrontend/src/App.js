import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./httpCommon";
import Login from "./components/login/login";
import SignUp from "./components/login/signUp/signUp";
import Dashboard from "./components/dashboard/dashboard";
import CreateBook from "./components/book/createBook/createBook";
import UpdateBook from "./components/book/updateBook/updateBook";
import { Detail } from "./components/book/detail/detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route
          path="/login"
          render={(props) => <Login {...props} api={api} />}
        />
        <Route
          path="/signup"
          render={(props) => <SignUp {...props} api={api} />}
        />
        <Route
          path="/dashboard"
          render={(props) => <Dashboard {...props} api={api} />}
        />
        <Route
          path="/createBook"
          render={(props) => <CreateBook {...props} api={api} />}
        />
        <Route
          path="/updateBook/:id"
          render={(props) => <UpdateBook {...props} api={api} />}
        />
        <Route
          path="/:id"
          render={(props) => <Detail {...props} api={api} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
