import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "./logog.gif";
import { Footer } from "../../dashboard/footer";
import Spinner from "react-bootstrap/Spinner";
import "./detail.css";

export const Detail = (props) => {
  const [book, setbook] = useState("");
  const checkAdmin = localStorage.getItem("type") === "admin";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    props.api.get(`/book/` + props.match.params.id).then((response) => {
      setbook(response.data);
    });
  }
  if (
    book === undefined ||
    book.file === undefined ||
    book.file[0].file_path === undefined
  ) {
    return <Spinner animation="border" />;
  }

  function deleteId(id) {
    props.api.delete("/book/" + id).then((response) => {
      console.log(response.data);
    });
    fetchData();
    window.location.href = "/dashboard";
  }

  return (
    <div className="container-fluid">
      <header>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          style={{ justifyContent: "space-between" }}
        >
          <a style={{ display: "flex", flexDirection: "row" }} href={"/"}>
            <img src={logo1} style={{ height: "40px" }} alt="Main Logo"></img>
            <p
              style={{
                color: "whitesmoke",
                paddingLeft: "6px",
                paddingTop: "3px",
              }}
            >
              Book App!
            </p>
          </a>
          <Link to="/dashboard">
            <i class="fas fa-long-arrow-alt-left"></i>

            <button
              type="submit"
              className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"
                ></path>
              </svg>
              Go Back!!!
            </button>
          </Link>
        </nav>
      </header>

      {/*----------------------- MAIN COMPONENT -----------------------*/}

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
                  <img
                    src={`http://localhost:4000/${book.file[0].file_path}`}
                    height="auto"
                    className="card-img-top img-responsive"
                    alt="img"
                    style={{
                      height: "-webkit-fill-available",
                    }}
                  />
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <h3 className="mb-4">
                    <u>{book.name}</u>
                    <p className="description text-muted ">{book.desc}</p>
                  </h3>
                  <table className="table ">
                    <thead>
                      <tr>
                        <th>Author:-</th>
                        <th
                          style={{
                            color: "darkorange",
                            textTransform: "capitalize",
                          }}
                        >
                          {book.author}
                        </th>
                      </tr>
                      <tr>
                        <th>Price:-</th>
                        <th style={{ color: "orangered" }}>{book.price}</th>
                      </tr>
                      <tr>
                        <th>Rating:-</th>
                        <th style={{ color: "red" }}>{book.rating}</th>
                      </tr>
                      <tr>
                        <th>Category:-</th>
                        <th style={{ color: "yellowgreen" }}>
                          {book.category}
                        </th>
                      </tr>
                    </thead>
                  </table>
                  {/* <h4>Author{book.author}</h4>
                  <h4>Price{book.price}</h4>
                  <h4>Rating{book.rating}</h4>
                  <h4>Category{book.category}</h4> */}
                  {checkAdmin ? (
                    <Link to={"/updateBook/" + book._id}>
                      <button type="button" className="btn btn-info btn-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          style={{ marginRight: "5px" }}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"
                          ></path>
                        </svg>
                        Edit Book
                      </button>
                    </Link>
                  ) : (
                    <Link
                      to={"/updateBook/" + book._id}
                      style={{ cursor: "not-allowed", pointerEvents: "none" }}
                    >
                      <button
                        type="button"
                        className="btn btn-info btn-lg"
                        disabled={!checkAdmin}
                      >
                        Edit Book
                      </button>
                    </Link>
                  )}
                  <button
                    className="btn btn-danger btn-lg ml-3"
                    onClick={() => deleteId(book._id)}
                    disabled={!checkAdmin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      style={{ marginRight: "5px" }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"
                      ></path>
                      <path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path>
                      <path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footer />
    </div>
  );
};
