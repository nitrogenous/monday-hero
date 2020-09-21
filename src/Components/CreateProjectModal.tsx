import { Radio, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../Providers/ProjectsProvider';
import Modal from 'antd/lib/modal/Modal';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio';

interface Props {
    visibilityOfModal:boolean,
    setVisibilityOfModal:(value: boolean) => void
}

const CreateProjectModal = ({visibilityOfModal, setVisibilityOfModal}:Props) => {
    
    var { createProject } = useContext(ProjectsContext);
    const [selectedProjectType, setSelectedProjectType] = useState('iOS');
    const [projectName, setProjectName] = useState(String);

    const projectTypeOnChange = (event: RadioChangeEvent) => {
        setSelectedProjectType(event.target.value);
    };

    const projectNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(event.target.value)
    }
    
    const createNewProject = () => {
        const projectCreateDate = Date.now();
        createProject({
            'projectName': projectName,
            'projectType': selectedProjectType,
            'projectCreateDate': projectCreateDate
        });
        
        closeModal();
    };
    
    const closeModal = () => {
        setProjectName('');
        setVisibilityOfModal(false);
        setSelectedProjectType('iOS');
    }

    return (
        <Modal
            className='projects create-project-modal'
            visible={visibilityOfModal}
            onOk={() => createNewProject()}
            onCancel={() => closeModal()}
            closable={false}>
                <div className='projects create-project-modal content'>
                    <Radio.Group id='project-type' value={selectedProjectType} defaultValue="iOS" buttonStyle="solid" onChange={projectTypeOnChange}>
                        <Space size='middle'>
                            <Radio.Button value="iOS" className='projects project-type-wrapper'>
                                <AppleOutlined />
                            </Radio.Button>
                            <Radio.Button value="Android" className='projects project-type-wrapper'>
                                <span className='beta-mark'>BETA</span>
                                <AndroidOutlined />
                            </Radio.Button>
                        </Space>
                    </Radio.Group>
                    <div  className='projects create-project-modal input-wrapper'>
                        <input className='projects create-project-modal inputs' disabled placeholder='Wow! You are in private beta!' />
                        <input className='projects create-project-modal inputs' style={{background: 'none'}} placeholder='Project Name' value={projectName} onChange={projectNameOnChange} />
                    </div>
                </div>
        </Modal>
    );
};

export default CreateProjectModal;