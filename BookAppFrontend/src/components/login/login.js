import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./login.css";

const Login = (props) => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function fetchData() {
    props.api.get("/user/user").then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Response from ALL User List", data);

  const clickOnSignIn = () => {
    // console.log("ALLUSERDATA", data);
    let flag = false;
    data.map((user) => {
      if (email === user.emailId && password === user.password) {
        localStorage.setItem("userToken", user.userFName + user.userLName);
        localStorage.setItem("id", user._id);
        localStorage.setItem("type", user.type);
        flag = true;
      }
    });
    if (flag === true) {
      return props.history.push({
        pathname: "/dashboard",
      });
    } else {
      alert("Wrong User-Name or Password");
      setEmail();
      setPassword();

      return props.history.push({
        pathname: "/",
      });
    }
  };

  if (localStorage.getItem("userToken")) {
    return (
      <>
        <Spinner animation="border" />
        {(window.location.href = "/dashboard")}
      </>
    );
  }

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Login !</h3>
                    <p className="text-muted mb-4">
                      Take a Dive Into the ocean of Books.
                    </p>
                    <form onSubmit={clickOnSignIn}>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          name="email"
                          placeholder="Enter Email...!"
                          required={true}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          value={email}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="password"
                          placeholder="Enter Password...!"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          value={password}
                          required={true}
                          type="password"
                        />
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          checked
                          className="custom-control-input"
                        />
                        <label
                          for="customCheck1"
                          className="custom-control-label"
                        >
                          Remember password
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>
                      <Link to="/signUp">
                        <button
                          type="submit"
                          className="btn btn-info btn-block"
                        >
                          Don't Have An Account......?
                        </button>
                      </Link>
                      <div className="text-center d-flex justify-content-between mt-4">
                        <p>
                          Code by{" "}
                          <a href="/" className="font-italic text-muted">
                            <u>Jaydutt Patel</u>
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
