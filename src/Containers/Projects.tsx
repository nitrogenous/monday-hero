import React, { useContext } from 'react';
import List from '../Components/List';
import { Layout } from 'antd';
import { ProjectsContext } from '../Providers/ProjectsProvider';

const { Header, Footer, Content } = Layout;

const Projects = () => {
    console.log(useContext(ProjectsContext))
    var { createProject, removeProject, updateProject } = useContext(ProjectsContext);

    return (
        <Layout>
            <Header>
                Projects
                <button onClick={() => {createProject({projectName: 'mahmut', projectPlatform: 'IOS', projectCreateDate: Date.now() })}} >+</button>
                <button onClick={() => {removeProject(2)}}>Remove</button>
                <button onClick={() => {updateProject(3, {projectName: 'toprak'})}}>update</button>
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