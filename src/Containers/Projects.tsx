import React, { useContext } from 'react';
import List from '../Components/List';
import { Layout, Button, Typography } from 'antd';
import { ProjectsContext } from '../Providers/ProjectsProvider';
import { PlusOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

const Projects = () => {
    var { projectList, createProject } = useContext(ProjectsContext);
    console.log(projectList)
    return (
        <Layout className='projects layout' >
            <Header className='projects header'>
                <Title level={2} className='projects title'>Projects</Title>
                <Button className='projects button' icon={<PlusOutlined />}  onClick={() => {createProject({projectName: 'mahmut', projectType: 'IOS', projectCreateDate: Date.now() })}} />
            </Header>   
            <Content className='projects content'>
                <List projectList={projectList} />
            </Content> 
          
        </Layout>
    );
};

export default Projects;