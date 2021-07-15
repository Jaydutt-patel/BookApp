import React, { useState } from "react";
import "./signup.css";

const SignUp = (props) => {
  const [userFName, setName] = useState();
  const [userLName, setLname] = useState();
  const [emailId, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState();

  function handleSubmit() {
    const userData = {
      userFName,
      userLName,
      emailId,
      password,
      type,
    };
    console.log(userData);
    props.api
      .post("/user/addUser", userData)
      .then((res) => console.log(res.data));
    props.history.push({
      pathname: "/login",
    });
  }

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <div className="icon">
                      <span className="fa fa-soccer-ball-o"></span>
                    </div>
                    <h2>Book App</h2>
                    <p>Already have an account?</p>
                    <a
                      href="/login"
                      className="btn btn-white btn-outline-white"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <h3 className="mb-4">
                    Hello! <span>Please signup to continue</span>
                  </h3>
                  <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <label className="label" for="name">
                        First Name
                      </label>
                      <input
                        required={true}
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        value={userFName}
                        placeholder="John"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="label" for="name">
                        Last Name
                      </label>
                      <input
                        required={true}
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          setLname(event.target.value);
                        }}
                        value={userLName}
                        placeholder="Doe"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="label" for="email">
                        Email Address
                      </label>
                      <input
                        required={true}
                        type="email"
                        className="form-control"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        value={emailId}
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="label" for="password">
                        Password
                      </label>
                      <input
                        required={true}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        value={password}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="label" for="type">
                        User Type
                      </label>
                      <input
                        required={true}
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          setType(event.target.value);
                        }}
                        value={type}
                        placeholder="Customer / Admin"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary rounded submit p-3"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
