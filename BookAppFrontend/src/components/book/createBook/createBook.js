import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./createBook.css";

const CreateBook = (props) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [author, setAuthor] = useState();
  const [rating, setRating] = useState();
  const [category, setCategory] = useState();
  const [desc, setDesc] = useState();
  const [file, setFile] = useState("");

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
                        style={{ fill: "#000000", marginRight: "12px" }}
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
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g>
                            <path
                              d="M136.16667,157.66667h-93.16667v-143.33333h93.16667c7.88333,0 14.33333,6.45 14.33333,14.33333v114.66667c0,7.88333 -6.45,14.33333 -14.33333,14.33333"
                              fill="#34495e"
                            ></path>
                            <path
                              d="M35.83333,14.33333h7.16667v143.33333h-7.16667c-7.88333,0 -14.33333,-6.45 -14.33333,-14.33333v-114.66667c0,-7.88333 6.45,-14.33333 14.33333,-14.33333"
                              fill="#cccccc"
                            ></path>
                            <path
                              d="M132.58333,53.75h-71.66667v-14.33333h71.66667zM132.58333,60.91667h-71.66667v7.16667h71.66667z"
                              fill="#2ecc71"
                            ></path>
                          </g>
                          <g>
                            <g id="IOS_copy">
                              <path
                                d="M172,136.16667c0,19.70833 -16.125,35.83333 -35.83333,35.83333c-19.70833,0 -35.83333,-16.125 -35.83333,-35.83333c0,-19.70833 16.125,-35.83333 35.83333,-35.83333c19.70833,0 35.83333,16.125 35.83333,35.83333"
                                fill="#43a047"
                              ></path>
                              <path
                                d="M157.66667,129h-14.33333v-14.33333h-14.33333v14.33333h-14.33333v14.33333h14.33333v14.33333h14.33333v-14.33333h14.33333z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      New Book
                    </h4>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        const formData = new FormData();
                        formData.append("name", name);
                        formData.append("price", price);
                        formData.append("author", author);
                        formData.append("rating", rating);
                        formData.append("category", category);
                        formData.append("desc", desc);
                        formData.append("file", file);
                        console.log(formData);
                        props.api
                          .post("/book/addBook", formData)
                          .then((res) => console.log(res.data));
                        window.location.href = "/dashboard";
                      }}
                    >
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          name="name"
                          placeholder="Enter Book Name...!"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                          value={name}
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
                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}
                          value={price}
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
                          onChange={(event) => {
                            setAuthor(event.target.value);
                          }}
                          value={author}
                          type="text"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="rating"
                          placeholder="Enter Rating...!"
                          onChange={(event) => {
                            setRating(event.target.value);
                          }}
                          value={rating}
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
                          onChange={(event) => {
                            setCategory(event.target.value);
                          }}
                          required={true}
                          value={category}
                          type="text"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <textarea
                          id="inputEmail"
                          className="form-control rounded border-0 shadow-sm px-4 text-primary"
                          name="desc"
                          placeholder="Enter description...!"
                          rows="4"
                          cols="50"
                          required={true}
                          onChange={(event) => {
                            setDesc(event.target.value);
                          }}
                          value={desc}
                          type="text"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          type="file"
                          name="file"
                          required={true}
                          onChange={(event) => {
                            setFile(event.target.files[0]);
                          }}
                          placeholder="Upload Cover Image here"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        <img
                          src="https://img.icons8.com/fluent/30/000000/add.png"
                          style={{ marginRight: "5px" }}
                        />
                        Add Book
                      </button>
                      <Link to="/dashboard">
                        <button
                          type="submit"
                          className="btn btn-info btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24"
                            height="24"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000" }}
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
                              text-anchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g fill="#ffffff">
                                <path
                                  d="M57.33333,107.5c-5.73333,0 -10.75,-2.15 -15.05,-6.45c-8.6,-8.6 -8.6,-22.21667 0,-30.1l50.16667,-50.16667c8.6,-8.6 22.21667,-8.6 30.1,0c8.6,8.6 8.6,22.21667 0,30.1l-50.16667,50.16667c-4.3,4.3 -9.31667,6.45 -15.05,6.45z"
                                  opacity="0.35"
                                ></path>
                                <path d="M107.5,157.66667c-5.73333,0 -10.75,-2.15 -15.05,-6.45l-50.16667,-50.16667c-8.6,-8.6 -8.6,-22.21667 0,-30.1c7.88333,-8.6 22.21667,-8.6 30.1,0l50.16667,50.16667c8.6,8.6 8.6,22.21667 0,30.1c-4.3,4.3 -9.31667,6.45 -15.05,6.45z"></path>
                              </g>
                            </g>
                          </svg>
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

export default CreateBook;
