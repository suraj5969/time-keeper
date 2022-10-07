import React from "react";
import { Col, Container, Row } from "reactstrap";
import Head from "next/head";
import Layout from "../src/components/layout";

//import Components
import UpgradeAccountNotice from "../src/components/dashboard/UpgradeAccountNotice";
import Widgets from "../src/components/dashboard/Widgets";
import ProjectsOverview from "../src/components/dashboard/ProjectsOverview";
import ActiveProjects from "../src/components/dashboard/ActiveProjects";
import MyTasks from "../src/components/dashboard/MyTasks";
import ProjectsStatus from "../src/components/dashboard/ProjectsStatus";
// import UsersByDevice from "../src/components/dashboard/UsersByDevice";
// import Widget from "../src/components/dashboard/Widget";
// import BreadCrumb from "../src/utils/BreadCrumb";
// import AudiencesMetrics from "../src/components/dashboard/AudiencesMetrics";
// import AudiencesSessions from "../src/components/dashboard/AudiencesSessions";
// import LiveUsers from "../src/components/dashboard/LiveUsers";
// import TopReferrals from "../src/components/dashboard/TopReferrals";
// import TopPages from "../src/components/dashboard/TopPages";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>{"DashBoard"}</title>
      </Head>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Analytics" pageTitle="Dashboards" /> */}
          <Row>
            <Col >
              <UpgradeAccountNotice />
              {/* <Widget /> */}
            </Col>
          </Row>
          <Row className="project-wrapper">
            <Col>
              <Widgets />
              <ProjectsOverview />
            </Col>
            {/* <UpcomingSchedules /> */}
          </Row>
          <Row >
          <Col xs={12}>
            <ActiveProjects />
            </Col>
          </Row>
          <Row>
            <MyTasks />
            <ProjectsStatus />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;


Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};