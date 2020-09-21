import React, { useState, useContext } from 'react';
import { Project, ProjectsContext } from '../Providers/ProjectsProvider';
import { AppleOutlined, AndroidOutlined, MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface Props {
    project: Project,
    onClick: () => void;
}

const ListItem = ({ project, onClick }: Props) => {
    const { removeProject } = useContext(ProjectsContext);
    const [showMenuButton, setShowMenuButton] = useState(Boolean);
    const [showMenu, setShowMenu] = useState(Boolean);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const getIconOfProjectType = (projectType: string) => {
        switch (projectType) {
            case 'iOS':
                return (<AppleOutlined className='list-item project-logo' />);
            case 'Android':
                return <AndroidOutlined className='list-item project-logo' />;
            default:
                return <span>nothing</span>;
        }
    };

    const popupMenu = () => {
        return (
            <div className='list-item popup-menu' onMouseLeave={() => { setShowMenu(false) }}>
                <Button type='link'>
                    Member Settings
                </Button>
                <Button type='link' onClick={() => { setShowMenu(false); removeProject(project.id) }}>
                    Remove Project
                </Button>
            </div>
        )
    };

    const maskProjectCreateDate = () => {
        const projectDate = new Date(project.projectCreateDate);
        const projectCreateDateText = monthNames[projectDate.getMonth()] + ' ' + projectDate.getDate() + ', ' + projectDate.getFullYear() + ', ' + projectDate.getHours() + ':' + projectDate.getMinutes();

        return projectCreateDateText;
    };

    const projectClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClick();
        }
    }

    const betaMarkElement = <span className='beta-mark'>BETA</span>;

    return (
        <div className='list-item card'>
            <span className='list-item project-name' >{project.projectName}</span>
            <div
                onClick={projectClick}
                className='list-item project-type-wrapper'
                onMouseEnter={() => { setShowMenuButton(true) }}
                onMouseLeave={() => { setShowMenuButton(false) }}>
                {project.projectType === 'Android' && betaMarkElement}
                {getIconOfProjectType(project.projectType)}
                {showMenuButton && <MenuOutlined className='list-item project-settings' onClick={() => { setShowMenu(true) }} />}
                {showMenu && popupMenu()}
                <span className='list-item project-type'>{project.projectType}</span>
            </div>
            <p className='list-item project-create-date'>{maskProjectCreateDate()}</p>
        </div>
    );
};

export default ListItem;