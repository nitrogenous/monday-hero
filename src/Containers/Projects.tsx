import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../Providers/ProjectsProvider';
import { Layout, Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import List from '../Components/List';
import CreateProjectModal from '../Components/CreateProjectModal';

const { Header, Content } = Layout;
const { Title } = Typography;

const Projects = () => {
    var { projectList } = useContext(ProjectsContext);
    const [visibilityOfModal, setVisibilityOfModal] = useState(Boolean);

    return (
        <Layout className='projects layout' >
            <Header className='projects header'>
                <Title level={2} className='projects title'>Projects</Title>
                <Button className='projects button' icon={<PlusOutlined />}  onClick={() => setVisibilityOfModal(true)} />
                <CreateProjectModal visibilityOfModal={visibilityOfModal} setVisibilityOfModal={setVisibilityOfModal} />
            </Header>   
            <Content className='projects content'>
                <div className='projects list-selector'>
                    <Button type='primary' size='small'>My Projects</Button>
                    <Button size='small'>Templates</Button>
                </div>
                <List projectList={projectList} />
            </Content>
        </Layout>
    );
};

export default Projects;