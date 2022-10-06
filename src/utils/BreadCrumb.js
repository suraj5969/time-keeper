import React from "react";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({ title, pageTitle }) => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">{title}</h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link href="#">
                    <a>{pageTitle}</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BreadCrumb;
