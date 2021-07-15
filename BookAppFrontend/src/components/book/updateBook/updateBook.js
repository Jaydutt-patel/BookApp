import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./updateBook.css";

const UpdateBook = (props) => {
  const initialFormState = { id: null, username: "" };
  const [user, setUser] = useState(initialFormState);
  const checkAdmin = localStorage.getItem("type") === "admin";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    props.api.get(`/book/` + props.match.params.id).then((response) => {
      setUser(response.data);
    });
  }

  if (
    user === undefined ||
    user.file === undefined ||
    user.file[0].file_path === undefined
  ) {
    return <Spinner animation="border" />;
  }
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-3 d-none d-md-flex bg-images"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center">
              <div className="container bg-dark">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h4 className="text-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000", marginRight: "15px" }}
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g>
                            <path
                              d="M136.16667,157.66667h-93.16667v-143.33333h93.16667c7.88333,0 14.33333,6.45 14.33333,14.33333v114.66667c0,7.88333 -6.45,14.33333 -14.33333,14.33333"
                              fill="#e67e22"
                            ></path>
                            <path
                              d="M35.83333,14.33333h7.16667v143.33333h-7.16667c-7.88333,0 -14.33333,-6.45 -14.33333,-14.33333v-114.66667c0,-7.88333 6.45,-14.33333 14.33333,-14.33333"
                              fill="#f1c40f"
                            ></path>
                            <path
                              d="M132.58333,53.75h-71.66667v-14.33333h71.66667zM132.58333,60.91667h-71.66667v7.16667h71.66667z"
                              fill="#f1c40f"
                            ></path>
                          </g>
                          <g>
                            <g id="IOS_copy">
                              <path
                                d="M170.925,104.275l-10.03333,-10.03333c-1.43333,-1.43333 -3.94167,-1.43333 -5.73333,0l-4.65833,4.65833l15.76667,15.76667l4.65833,-4.65833c1.43333,-1.43333 1.43333,-3.94167 0,-5.73333"
                                fill="#e57373"
                              ></path>
                              <rect
                                x="-10.35706"
                                y="49.20834"
                                transform="rotate(-45) scale(3.5833,3.5833)"
                                width="17.4"
                                height="6.2"
                                fill="#ff9800"
                              ></rect>
                              <path
                                d="M142.53067,106.84067l7.96933,-7.94067l15.76667,15.76667l-8.02667,7.88333z"
                                fill="#b0bec5"
                              ></path>
                              <path
                                d="M98.44133,150.92642l-2.61942,10.4705l7.90483,7.90483l10.42392,-2.666z"
                                fill="#ffc107"
                              ></path>
                              <path
                                d="M95.82192,161.39692l-2.65525,10.60308l10.56008,-2.69825z"
                                fill="#37474f"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Update Book
                    </h4>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        props.api
                          .post(
                            "/book/updateBook/" + props.match.params.id,
                            user
                          )
                          .then((res) => console.log(res.data));
                        setUser(initialFormState);
                        window.location.href = "/" + props.match.params.id;
                      }}
                    >
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          name="name"
                          placeholder="Enter Book Name...!"
                          onChange={handleInputChange}
                          value={user.name}
                          required={true}
                          type="text"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="price"
                          placeholder="Enter Book Price...!"
                          required={true}
                          min={1}
                          onChange={handleInputChange}
                          value={user.price}
                          type="number"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="author"
                          placeholder="Enter Book Author...!"
                          required={true}
                          onChange={handleInputChange}
                          value={user.author}
                          type="text"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="rating"
                          placeholder="Enter Rating...!"
                          onChange={handleInputChange}
                          value={user.rating}
                          type="number"
                          required={true}
                          min={0}
                          max={10}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="category"
                          placeholder="Enter category...!"
                          onChange={handleInputChange}
                          required={true}
                          value={user.category}
                          type="text"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <textarea
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="desc"
                          placeholder="Enter description...!"
                          rows="4"
                          cols="50"
                          required={true}
                          onChange={handleInputChange}
                          value={user.desc}
                          type="text"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-info btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        disabled={!checkAdmin}
                      >
                        <svg
                          style={{ marginRight: "5px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z"
                          ></path>
                        </svg>
                        Update Book
                      </button>
                      <Link to="/dashboard">
                        <button
                          type="submit"
                          className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          <img
                            style={{ marginRight: "5px" }}
                            src="https://img.icons8.com/fluent/24/000000/left.png"
                          />
                          Go Back!!!
                        </button>
                      </Link>
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

export default UpdateBook;
