import React from "react";
// import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Container } from "reactstrap";

import List from "../../src/components/projects/List";
import Head from "next/head";
import Layout from "../../src/components/layout";

const ProjectList = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Project List" pageTitle="Projects" /> */}
          <List />
        </Container>
      </div>
    </>
  );
};

export default ProjectList;

ProjectList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
