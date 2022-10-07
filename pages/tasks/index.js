import React from 'react';
import Head from 'next/head';
import { Container, Row } from 'reactstrap';
// import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllTasks from '../../src/components/tasks/AllTasks';
import Widgets from '../../src/components/tasks/Widgets';
import Layout from '../../src/components/layout';


const TaskList = () => {
    // document.title="Tasks List | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
        <Head>
            <title>{"Tasks List"}</title>
        </Head>
            <div className="page-content">
                <Container fluid>
                    {/* <BreadCrumb title="Tasks List" pageTitle="Tasks" /> */}
                    <Row>
                        <Widgets />
                    </Row>
                    <AllTasks />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TaskList;

TaskList.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
}