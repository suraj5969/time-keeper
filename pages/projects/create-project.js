import React from "react";
import Layout from "../../src/components/layout";
import CreateProject from "../../src/components/projects/Create";

function CreateProjectPage() {
    return (
        <CreateProject />
    );
}

export default CreateProjectPage;

CreateProjectPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
}
