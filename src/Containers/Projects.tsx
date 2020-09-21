import React, { useContext, useState } from 'react';
import List from '../Components/List';
import { Layout, Button, Typography, Modal, Radio } from 'antd';
import { ProjectsContext } from '../Providers/ProjectsProvider';
import { PlusOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

const Projects = () => {
    var { projectList, createProject } = useContext(ProjectsContext);
    const [visibilityOfModal, setVisibilityOfModal] = useState(Boolean);

    const createProjectModal = () => {
        return (
            <Modal
                className='projects create-modal'
                visible={visibilityOfModal}
                onOk={() => setVisibilityOfModal(false)}
                onCancel={() => setVisibilityOfModal(false)}
                closable={false}>
                    <div className='projects create-modal-content'>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="iOS">iOS</Radio.Button>
                            <Radio.Button value="Android">Android</Radio.Button>
                        </Radio.Group>
                        <input placeholder='Project Name' />
                    </div>
            </Modal>
        );
    }

    return (
        <Layout className='projects layout' >
            {createProjectModal()}
            <Header className='projects header'>
                <Title level={2} className='projects title'>Projects</Title>
                <Button className='projects button' icon={<PlusOutlined />}  onClick={() => {setVisibilityOfModal(true)}} />
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