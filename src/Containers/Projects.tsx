import React, { useContext } from 'react';
import List from '../Components/List';
import { Layout } from 'antd';
import { ProjectsContext } from '../Providers/ProjectsProvider';

const { Header, Footer, Content } = Layout;

const Projects = () => {
    console.log(useContext(ProjectsContext))
    var { createProject } = useContext(ProjectsContext);

    return (
        <Layout>
            <Header>
                Projects
                <button onClick={() => {createProject({projectName: 'mahmut', projectType: 'IOS', projectCreateDate: 123 })}} >+</button>
            </Header>   
            <Content>
                <List />
            </Content> 
            <Footer>
                Made by Toprak Koc
            </Footer>
        </Layout>
    );
};

export default Projects;