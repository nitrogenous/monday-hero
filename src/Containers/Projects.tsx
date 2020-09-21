import React, { useContext, useState } from 'react';
import { Project, ProjectsContext } from '../Providers/ProjectsProvider';
import { Layout, Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import List from '../Components/List';
import ProjectModal from '../Components/ProjectModal';

const { Header, Content } = Layout;
const { Title } = Typography;

const Projects = () => {
    const { projectList } = useContext(ProjectsContext);
    const [editItem, setEditItem] = useState<Project | undefined>();
    const [visibilityOfModal, setVisibilityOfModal] = useState(false);

    return (
        <Layout className='projects layout' >
            <Header className='projects header'>
                <Title level={2} className='projects title'>Projects</Title>
                <Button className='projects button' icon={<PlusOutlined />} onClick={() => setVisibilityOfModal(true)} />
                {visibilityOfModal && <ProjectModal onClose={() => {
                    setVisibilityOfModal(false);
                    setEditItem(undefined);
                }} editItem={editItem} />}
            </Header>
            <Content className='projects content'>
                <div className='projects list-selector'>
                    <Button type='primary' size='small'>My Projects</Button>
                    <Button size='small'>Templates</Button>
                </div>
                <List projectList={projectList} onItemClick={(item) => {
                    setEditItem(item);
                    setVisibilityOfModal(true)
                }} />
            </Content>
        </Layout>
    );
};

export default Projects;