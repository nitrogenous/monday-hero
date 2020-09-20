import React from 'react';
import { Project } from '../Providers/ProjectsProvider';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

interface Props {
    project: Project,
    projectIndex: Number
}

const ListItem = ({project, projectIndex}:Props) => {

    const getIconOfProjectType = (projectType:string) => {
        switch(projectType) {
            case 'iOS': 
                return (<AppleOutlined className='list-item project-logo'/>);
            case 'Android':
                return (<AndroidOutlined className='list-item project-logo'/>);
            default:
                return (<span>nothing</span>);
        }
    };

    const betaMarkElement = <span className='list-item beta-mark'>BETA</span>;

    return (
        <div className='list-item card'>
            <span>{project.projectName}</span>
            <div className='list-item project-type-wrapper'>
                {project.projectType === 'Android' && betaMarkElement}
                {getIconOfProjectType(project.projectType)}
                <span className='list-item project-type'>{project.projectType}</span>
            </div>
            <p>{new Date(project.projectCreateDate).toString()}</p>
        </div>
    );
};

export default ListItem;