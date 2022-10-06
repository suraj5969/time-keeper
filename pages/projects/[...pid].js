import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "reactstrap";
import Layout from "../../src/components/layout";
import Section from "../../src/components/projects/Section";

const Projects = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Head>
      {/* TODO: add project name in title */}
        <title>{`Projects - Web Design`}</title>
      </Head>
      <div className="page-content">
        <Container fluid>
          <Section />
        </Container>
      </div>
    </>
  );
};

export default Projects;

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
