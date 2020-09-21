import { Button, Radio, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { Project, ProjectsContext } from '../Providers/ProjectsProvider';
import Modal from 'antd/lib/modal/Modal';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio';

interface Props {
    onClose: () => void
    editItem?: Project
}

const ProjectModal = ({ onClose, editItem }: Props) => {
    const { createProject, updateProject } = useContext(ProjectsContext);
    const [selectedProjectType, setSelectedProjectType] = useState(editItem?.projectType ?? 'iOS');
    const [projectName, setProjectName] = useState(editItem?.projectName ?? "");

    const projectTypeOnChange = (event: RadioChangeEvent) => {
        if (editItem) return;
        setSelectedProjectType(event.target.value);
    };

    const projectNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(event.target.value)
    }

    const formSubmit = () => {
        if (!editItem) {
            const projectCreateDate = Date.now();
            createProject({
                'projectName': projectName,
                'projectType': selectedProjectType,
                'projectCreateDate': projectCreateDate
            });
        } else {
            updateProject(editItem.id, {
                ...editItem,
                projectName
            })
        }
        onClose();
    };

    return (
        <Modal
            visible
            closable={false}
            onOk={formSubmit}
            onCancel={onClose}
            className='projects create-project-modal'>
            <div className='projects create-project-modal content'>
                <Radio.Group id='project-type' value={selectedProjectType} buttonStyle="solid" onChange={projectTypeOnChange}>
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
                <div className='projects create-project-modal input-wrapper'>
                    <div className='projects create-project-modal beta-info-wrapper'>
                        <span>Wow! You are in private beta!</span>
                        <Button type='link'>Join slack!</Button>
                    </div>
                    <input className='projects create-project-modal inputs' placeholder='Project Name' value={projectName} onChange={projectNameOnChange} />
                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;