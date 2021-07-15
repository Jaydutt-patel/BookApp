import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./footer";
import logo from "./logog.gif";
import bookbck from "./logobackgrnd.png";
import { Pagination } from "./pagination";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage] = useState(3);
  const checkAdmin = localStorage.getItem("type") === "admin";

  function fetchData() {
    props.api.get("/book/allBook").then((response) => {
      setData(response.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  //For Pagination
  const indexOfLastBook = currentPage * bookPerPage;
  const indexOfFirstBook = indexOfLastBook - bookPerPage;
  const currentBook = data.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredBook = currentBook.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.price.toString().includes(search.toLowerCase()) ||
      book.rating.toString().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase()) ||
      book.desc.toLowerCase().includes(search.toLowerCase())
    );
  });

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("userToken");
  };

  if (!localStorage.getItem("userToken")) {
    return (
      <>
        <h1 className="d-flex justify-content-center">
          Login not Successful.!!
        </h1>
        <Link to="/login" className="d-flex justify-content-center">
          <button className=" d-flex justify-content-center btn btn-warning btn-lg">
            Login Page
          </button>
        </Link>
      </>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/dashboard">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {checkAdmin ? (
                  <a
                    href="/createBook"
                    type="button"
                    className="btn btn-primary font-italic font-weight-bold text-dark"
                    style={{ paddingBottom: "10px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 172 172"
                      style={{ fill: "#000000", marginRight: "5px" }}
                    >
                      <defs>
                        <linearGradient
                          x1="35.3245"
                          y1="35.3245"
                          x2="136.6755"
                          y2="136.6755"
                          gradientUnits="userSpaceOnUse"
                          id="color-1_IA4hgI5aWiHD_gr1"
                        >
                          <stop offset="0" stop-color="#06f6c7"></stop>
                          <stop offset="1" stop-color="#34732b"></stop>
                        </linearGradient>
                      </defs>
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
                            d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z"
                            fill="url(#color-1_IA4hgI5aWiHD_gr1)"
                          ></path>
                          <path
                            d="M121.83333,75.25h-25.08333v-25.08333c0,-3.95958 -3.20708,-7.16667 -7.16667,-7.16667h-7.16667c-3.95958,0 -7.16667,3.20708 -7.16667,7.16667v25.08333h-25.08333c-3.95958,0 -7.16667,3.20708 -7.16667,7.16667v7.16667c0,3.95958 3.20708,7.16667 7.16667,7.16667h25.08333v25.08333c0,3.95958 3.20708,7.16667 7.16667,7.16667h7.16667c3.95958,0 7.16667,-3.20708 7.16667,-7.16667v-25.08333h25.08333c3.95958,0 7.16667,-3.20708 7.16667,-7.16667v-7.16667c0,-3.95958 -3.20708,-7.16667 -7.16667,-7.16667z"
                            fill="#acf6af"
                            opacity="0.05"
                          ></path>
                          <path
                            d="M121.83333,77.04167h-26.875v-26.875c0,-2.967 -2.408,-5.375 -5.375,-5.375h-7.16667c-2.967,0 -5.375,2.408 -5.375,5.375v26.875h-26.875c-2.967,0 -5.375,2.408 -5.375,5.375v7.16667c0,2.967 2.408,5.375 5.375,5.375h26.875v26.875c0,2.967 2.408,5.375 5.375,5.375h7.16667c2.967,0 5.375,-2.408 5.375,-5.375v-26.875h26.875c2.967,0 5.375,-2.408 5.375,-5.375v-7.16667c0,-2.967 -2.408,-5.375 -5.375,-5.375z"
                            fill="#acf6af"
                            opacity="0.07"
                          ></path>
                          <path
                            d="M82.41667,46.58333h7.16667c1.978,0 3.58333,1.60533 3.58333,3.58333v71.66667c0,1.978 -1.60533,3.58333 -3.58333,3.58333h-7.16667c-1.978,0 -3.58333,-1.60533 -3.58333,-3.58333v-71.66667c0,-1.978 1.60533,-3.58333 3.58333,-3.58333z"
                            fill="#ffffff"
                          ></path>
                          <path
                            d="M125.41667,82.41667v7.16667c0,1.978 -1.60533,3.58333 -3.58333,3.58333h-71.66667c-1.978,0 -3.58333,-1.60533 -3.58333,-3.58333v-7.16667c0,-1.978 1.60533,-3.58333 3.58333,-3.58333h71.66667c1.978,0 3.58333,1.60533 3.58333,3.58333z"
                            fill="#ffffff"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    Create New Book
                  </a>
                ) : (
                  <a
                    href="/createBook"
                    type="button"
                    className="btn btn-primary font-italic disabled"
                    style={{
                      cursor: "not-allowed",
                      paddingBottom: "10px",
                      pointerEvents: "none",
                    }}
                  >
                    Create New Book
                  </a>
                )}
              </li>
              <li className="nav-item ml-3">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-danger font-weight-bold text-warning"
                    onClick={logout}
                    style={{ paddingBottom: "10px" }}
                  >
                    Logout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 172 172"
                      style={{ fill: "#000000", marginLeft: "7px" }}
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
                            d="M86,14.33333c-39.41667,0 -71.66667,32.25 -71.66667,71.66667c0,39.41667 32.25,71.66667 71.66667,71.66667c39.41667,0 71.66667,-32.25 71.66667,-71.66667c0,-39.41667 -32.25,-71.66667 -71.66667,-71.66667z"
                            fill="#000000"
                          ></path>
                          <path
                            d="M118.25,52.675l-9.31667,10.75c5.73333,5.73333 9.31667,13.61667 9.31667,22.575c0,17.91667 -14.33333,32.25 -32.25,32.25c-17.91667,0 -32.25,-14.33333 -32.25,-32.25c0,-8.95833 3.58333,-16.84167 9.31667,-22.575l-9.31667,-10.75c-8.6,8.6 -14.33333,20.425 -14.33333,33.325c0,25.8 20.78333,46.58333 46.58333,46.58333c25.8,0 46.58333,-20.78333 46.58333,-46.58333c0,-13.25833 -5.375,-25.08333 -14.33333,-33.325z"
                            fill="#e74c3c"
                          ></path>
                          <path
                            d="M78.83333,39.41667h14.33333v43h-14.33333z"
                            fill="#e74c3c"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </Link>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2 rounded-pill"
                type="search"
                value={search}
                onChange={onSearch}
                placeholder="Search.."
              />
              <button className="btn btn-outline-info rounded my-2 my-sm-0">
                Search
              </button>
            </form>
          </div>
        </nav>

        {/*----------------------- MAIN COMPONENT -----------------------*/}

        <>
          {filteredBook.length > 0 ? (
            filteredBook.map((book) => {
              return (
                <div className="col-md-4">
                  <div
                    key={book._id}
                    className="card mb-4 m-3 box-shadow bg-light align-items-center"
                    style={{
                      backgroundImage: `url(${bookbck})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <img
                      src={`http://localhost:4000/${book.file[0].file_path}`}
                      height="200"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                    <h5 className="card-title text-light text-uppercase font-italic font-weight-bold">
                      {" "}
                      {book.name}
                    </h5>
                    <h5 className="card-title text-light text-capitalize">
                      <img src="https://img.icons8.com/fluent/50/000000/user-typing-using-typewriter.png" />
                      {book.author}
                    </h5>
                    <h5 className="card-title mb-2 text-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="50"
                        height="50"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}
                      >
                        <defs>
                          <radialGradient
                            cx="87.00781"
                            cy="95.59169"
                            r="133.78375"
                            gradientUnits="userSpaceOnUse"
                            id="color-1_119311_gr1"
                          >
                            <stop offset="0" stop-color="#afeeff"></stop>
                            <stop offset="0.193" stop-color="#bbf1ff"></stop>
                            <stop offset="0.703" stop-color="#1abc9c"></stop>
                            <stop offset="1" stop-color="#1abc9c"></stop>
                          </radialGradient>
                          <linearGradient
                            x1="86"
                            y1="150.5"
                            x2="86"
                            y2="16.125"
                            gradientUnits="userSpaceOnUse"
                            id="color-2_119311_gr2"
                          >
                            <stop offset="0" stop-color="#f1c40f"></stop>
                            <stop offset="1" stop-color="#e67e22"></stop>
                            <stop offset="1" stop-color="#e67e22"></stop>
                          </linearGradient>
                        </defs>
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
                              d="M161.25,118.25h-40.3125l-6.9875,-2.6875h16.15725c3.05838,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-8.54356 -6.47419,-8.54356c-2.22525,0 -4.03125,-1.806 -4.03125,-4.03125c0,-2.22525 1.806,-4.03125 4.03125,-4.03125h7.826c3.06106,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-11.23106 -6.47419,-11.23106h-1.34375c-2.96969,0 -5.375,-2.40531 -5.375,-5.375c0,-2.96969 2.40531,-5.375 5.375,-5.375h25.29475c3.06106,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-8.54356 -6.47419,-8.54356h-4.03125c-2.96969,0 -5.375,-2.40531 -5.375,-5.375c0,-2.96969 2.40531,-5.375 5.375,-5.375h5.375c4.9665,0 8.91981,-4.54994 7.90125,-9.68844c-0.76056,-3.82431 -4.35375,-6.43656 -8.25331,-6.43656h-27.86669c-2.22525,0 -4.03125,-1.806 -4.03125,-4.03125c0,-2.22525 1.806,-4.03125 4.03125,-4.03125h15.8885c3.06106,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-8.54356 -6.47419,-8.54356h-123.3885c-3.06106,0 -5.91788,1.93769 -6.71069,4.89394c-1.19862,4.46931 2.18494,8.54356 6.47419,8.54356v0c3.71144,0 6.71875,3.00731 6.71875,6.71875c0,3.71144 -3.00731,6.71875 -6.71875,6.71875h-2.451h-6.95525c-4.43438,0 -8.0625,3.62812 -8.0625,8.0625c0,4.43437 3.62812,8.0625 8.0625,8.0625h51.0625c0.946,0 1.84094,-0.19619 2.6875,-0.49719v30.05969h-19.91975c-3.06106,0 -5.91787,4.62519 -6.71069,7.58144c-0.58856,2.19569 -0.0645,4.28656 1.12338,5.85606h-37.64919c-3.71144,0 -6.71875,3.00731 -6.71875,6.71875c0,3.71144 3.00731,6.71875 6.71875,6.71875h2.6875c3.71144,0 6.71875,3.00731 6.71875,6.71875c0,3.71144 -3.00731,6.71875 -6.71875,6.71875h-1.34375c-4.45319,0 -8.0625,3.60931 -8.0625,8.0625c0,4.45319 3.60931,8.0625 8.0625,8.0625h14.78125c3.71144,0 6.71875,3.00731 6.71875,6.71875c0,3.71144 -3.00731,6.71875 -6.71875,6.71875h-4.03125c-4.45319,0 -8.0625,3.60931 -8.0625,8.0625c0,4.45319 3.60931,8.0625 8.0625,8.0625h129c4.45319,0 8.0625,-3.60931 8.0625,-8.0625c0,-4.45319 -3.60931,-8.0625 -8.0625,-8.0625h-1.34375c-3.71144,0 -6.71875,-3.00731 -6.71875,-6.71875c0,-3.71144 3.00731,-6.71875 6.71875,-6.71875h12.09375c4.45319,0 8.0625,-3.60931 8.0625,-8.0625c0,-4.45319 -3.60931,-8.0625 -8.0625,-8.0625z"
                              fill="url(#color-1_119311_gr1)"
                            ></path>
                            <path
                              d="M153.1875,83.3125c0,37.10094 -30.08656,67.1875 -67.1875,67.1875c-37.10094,0 -67.1875,-30.08656 -67.1875,-67.1875c0,-37.10094 30.08656,-67.1875 67.1875,-67.1875c37.10094,0 67.1875,30.08656 67.1875,67.1875z"
                              fill="url(#color-2_119311_gr2)"
                            ></path>
                            <path
                              d="M107.5,59.125h-43c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v0c0,-2.95625 2.41875,-5.375 5.375,-5.375h43c2.95625,0 5.375,2.41875 5.375,5.375v0c0,2.95625 -2.41875,5.375 -5.375,5.375zM107.5,77.9375h-43c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v0c0,-2.95625 2.41875,-5.375 5.375,-5.375h43c2.95625,0 5.375,2.41875 5.375,5.375v0c0,2.95625 -2.41875,5.375 -5.375,5.375z"
                              fill="#ffffff"
                            ></path>
                            <path
                              d="M99.43481,126.3125c-1.22819,0 -2.45906,-0.41656 -3.46956,-1.27387l-34.9375,-29.5625c-1.72269,-1.45663 -2.35156,-3.83238 -1.57487,-5.95012c0.77669,-2.11775 2.79231,-3.526 5.04712,-3.526h10.75c7.40944,0 13.4375,-6.02806 13.4375,-13.4375c0,-7.40944 -6.02806,-13.4375 -13.4375,-13.4375h-8.0625c-2.967,0 -5.375,-2.408 -5.375,-5.375c0,-2.967 2.408,-5.375 5.375,-5.375h8.0625c13.33538,0 24.1875,10.84944 24.1875,24.1875c0,12.11256 -8.94937,22.17188 -20.58088,23.91875l24.05313,20.35244c2.26556,1.91619 2.54775,5.30781 0.63156,7.57337c-1.06425,1.26044 -2.58,1.90544 -4.1065,1.90544z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      {book.price}
                    </h5>
                    <div className="col-md-12 card-link d-flex justify-content-around pb-2">
                      <Link to={"/" + book._id}>
                        <button type="button" className="btn btn-info btn-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="30"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000", marginRight: "5px" }}
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
                                  d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z"
                                  fill="#5210cb"
                                ></path>
                                <rect
                                  x="22"
                                  y="12"
                                  transform="scale(3.58333,3.58333)"
                                  width="4"
                                  height="4"
                                  fill="#01eaff"
                                ></rect>
                                <rect
                                  x="19"
                                  y="19"
                                  transform="scale(3.58333,3.58333)"
                                  width="7"
                                  height="4"
                                  fill="#01eaff"
                                ></rect>
                                <rect
                                  x="22"
                                  y="19"
                                  transform="scale(3.58333,3.58333)"
                                  width="4"
                                  height="17"
                                  fill="#01eaff"
                                ></rect>
                                <rect
                                  x="18"
                                  y="32"
                                  transform="scale(3.58333,3.58333)"
                                  width="12"
                                  height="4"
                                  fill="#01eaff"
                                ></rect>
                                <rect
                                  x="22"
                                  y="19"
                                  transform="scale(3.58333,3.58333)"
                                  width="4"
                                  height="4"
                                  fill="#01eaff"
                                ></rect>
                                <rect
                                  x="22"
                                  y="32"
                                  transform="scale(3.58333,3.58333)"
                                  width="4"
                                  height="4"
                                  fill="#2925de"
                                ></rect>
                              </g>
                            </g>
                          </svg>
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 style={{ fontWeight: "300", color: "yellowgreen" }}>
              No Books Found
            </h3>
          )}
        </>
        <Pagination
          bookPerPage={bookPerPage}
          totalBook={data.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
