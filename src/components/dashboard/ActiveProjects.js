import React from "react";
// import { Link } from "react-router-dom";
import Image from "next/future/image";
import Link from "next/link";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { activeProjects } from "../../test-data/dashboard";

const ActiveProjects = () => {
  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader className="d-flex align-items-center">
            <h4 className="card-title flex-grow-1 mb-0">Active Projects</h4>
            <div className="flex-shrink-0">
              <Link href="#">
                <a className="btn btn-soft-info btn-sm">Export Report</a>
              </Link>
            </div>
          </CardHeader>
          <CardBody>
            <div className="table-responsive table-card">
              <table className="table table-nowrap table-centered align-middle">
                <thead className="bg-light text-muted">
                  <tr>
                    <th scope="col">Project Name</th>
                    <th scope="col">Project Lead</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Status</th>
                    <th scope="col" style={{ width: "10%" }}>
                      Due Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {(activeProjects || []).map((item, key) => (
                    <tr key={key}>
                      <td className="fw-medium">{item.projectName}</td>
                      <td>
                        <Image
                          src={item.img}
                          alt="project img"
                          className="avatar-xxs rounded-circle me-1"
                        />
                        <Link href="#">
                          <a className="text-reset">{item.projectLead}</a>
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-1 text-muted fs-13">
                            {item.percentage}
                          </div>
                          <div
                            className="progress progress-sm  flex-grow-1"
                            style={{ width: "68%" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: item.percentage }}
                              aria-valuenow="53"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group flex-nowrap">
                          {item.subItem.map((item, key) => (
                            <div className="avatar-group-item" key={key}>
                              <Link href="#">
                                <a className="d-inline-block">
                                  {/* <img
                                    src={item.assImg}
                                    alt=""
                                    className="rounded-circle avatar-xxs"
                                  /> */}
                                  <Image
                                    src={item.assImg}
                                    alt="project img"
                                    className="avatar-xxs rounded-circle"
                                  />
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td>
                        <span className={"badge badge-soft-" + item.badgeClass}>{item.badge}</span>
                      </td>
                      <td className="text-muted">{item.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
              <div className="flex-shrink-0">
                <div className="text-muted">
                  Showing <span className="fw-semibold">5</span> of{" "}
                  <span className="fw-semibold">25</span> Results
                </div>
              </div>
              <ul className="pagination pagination-separated pagination-sm mb-0">
                <li className="page-item disabled">
                  <Link href="#">
                    <a className="page-link">←</a>
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#">
                    <a className="page-link">1</a>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link href="#">
                    <a className="page-link">2</a>
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#">
                    <a className="page-link">3</a>
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#">
                    <a className="page-link">→</a>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default ActiveProjects;
