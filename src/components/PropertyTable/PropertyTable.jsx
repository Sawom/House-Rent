import React from "react";

const PropertyTable = () => {
  return (
    <div className="container-fluid px-0 my-4">
      <div
        className="card"
        style={{
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
          borderBottom: "1px solid rgba(240, 240, 240, 1)",
        }}
      >
        <div className="card-header bg-primary text-white">
          <h5 className="text-white">Property List</h5>
        </div>
        <div
          className="card-body"
          style={{
            maxHeight: "300px",
            overflow: "auto",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Property Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ verticalAlign: "middle" }}>
                <td>1</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td>1</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td>2</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td>3</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td>4</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td>5</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td>6</td>
                <td>Sample Property 1</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View"
                  >
                    <i className="material-icons">visibility</i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-success mx-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyTable;
