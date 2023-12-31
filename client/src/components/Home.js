import React, { useState, useEffect, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";

const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const udataObj = useContext(adddata);

  const updataObj = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch("https://crudusingmern.onrender.com/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error ");
      alert("error in fetching data");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(
      `https://crudusingmern.onrender.com/deleteuser/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 404 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      setDLTdata(deletedata);
      getdata();
    }
  };

  return (
    <>
      <h1 className="text-center mt-3 shadow-lg py-2 rounded-pill">
        CRUD using MERN
      </h1>
      {udataObj.udata ? (
        <>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            {/* udata => userData */}
            <strong>{udataObj.udata.name}</strong> added succesfully!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {updataObj.updata ? (
        <>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{updataObj.updata.name}</strong> updated succesfully!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {dltdata ? (
        <>
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> deleted succesfully!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-5 font-monospace">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/register" className="btn btn-primary">
              Add data
            </NavLink>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-dark">
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Job</th>
                <th>Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.length !== 0 ? (
                getuserdata.map((element, id) => {
                  console.warn("getuserdata ->", typeof getuserdata);
                  return (
                    <>
                      <tr key={id}>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.work}</td>
                        <td>{element.mobile}</td>
                        <td className="d-flex justify-content-between">
                          <NavLink to={`view/${element._id}`}>
                            {" "}
                            <button className="btn btn-success">
                              <RemoveRedEyeIcon />
                            </button>
                          </NavLink>
                          <NavLink to={`edit/${element._id}`}>
                            {" "}
                            <button className="btn btn-primary">
                              <CreateIcon />
                            </button>
                          </NavLink>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteuser(element._id)}
                          >
                            <DeleteOutlineIcon />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr className="fs-4 fw-bold">
                  <td className="text-danger">Please </td>
                  <td className="text-danger"> wait</td>
                  <td className="text-danger"> data </td>
                  <td className="text-danger"> is comming </td>
                  <td className="text-danger"> soon </td>
                  <td className="text-danger">🤗🤗🤗</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
