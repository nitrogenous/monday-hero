import React, { useContext, useState } from 'react';
import List from '../Components/List';
import { Layout, Button, Typography, Modal, Radio, Space } from 'antd';
import { ProjectsContext } from '../Providers/ProjectsProvider';
import { AppleOutlined, AndroidOutlined, PlusOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

const Projects = () => {
    var { projectList, createProject } = useContext(ProjectsContext);
    const [visibilityOfModal, setVisibilityOfModal] = useState(Boolean);
    const createProjectModal = () => {
        return (
            <Modal
                className='projects create-project-modal'
                visible={visibilityOfModal}
                onOk={() => createNewProject()}
                onCancel={() => setVisibilityOfModal(false)}
                closable={false}>
                    <div className='projects create-project-modal content'>
                        <Radio.Group id='project-type' defaultValue="iOS" buttonStyle="solid">
                            <Space size='middle'>
                                <Radio.Button value="iOS" className='projects project-type-wrapper'>
                                    <AppleOutlined />
                                </Radio.Button>
                                <Radio.Button value="Android" className='projects project-type-wrapper'>
                                    <AndroidOutlined />
                                </Radio.Button>
                            </Space>
                        </Radio.Group>
                        <div  className='projects create-project-modal input-wrapper'>
                            <input className='projects create-project-modal inputs' disabled placeholder='Wow you are in private beta!' />
                            <input className='projects create-project-modal inputs' style={{background: 'none'}}placeholder='Project Name' />
                        </div>
                    </div>
            </Modal>
        );
    };

    const createNewProject = () => {
        setVisibilityOfModal(false);
    };

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