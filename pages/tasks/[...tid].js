import Head from 'next/head';
import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Layout from '../../src/components/layout';
// import BreadCrumb from '../../../Components/Common/BreadCrumb';
// import Comments from '../../src/components/tasks/Comments';
import Summary from '../../src/components/tasks/Summary';
import TimeTracking from '../../src/components/tasks/TimeTracking';


const TaskDetails = () => {
    // document.title="Tasks Details | Velzon - React Admin & Dashboard Template";
    return (
        <>
        <Head>
            <title>{"Tasks Details"}</title>
        </Head>
            <div className="page-content">
                <Container fluid>
                    {/* <BreadCrumb title="Tasks Details" pageTitle="Tasks" /> */}
                    <Row>
                        <Col xxl={3}>
                            <TimeTracking />
                        </Col>
                        {/* <Col xxl={9}>
                            <Summary />
                            <Comments />
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default TaskDetails;

TaskDetails.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
}
