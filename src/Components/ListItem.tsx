import React, { useState, useContext } from 'react';
import { Project, ProjectsContext } from '../Providers/ProjectsProvider';
import { AppleOutlined, AndroidOutlined, MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface Props {
    project:Project,
    projectIndex:number
}

const ListItem = ({project, projectIndex}:Props) => {

    var { removeProject } = useContext(ProjectsContext);
    const [showMenuButton, setShowMenuButton] = useState(Boolean);
    const [showMenu, setShowMenu] = useState(Boolean);

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

    const popupMenu = () => {
        return (
            <div className='list-item popup-menu' onMouseLeave={() => {setShowMenu(false)}}>
                <Button type='link'>
                    Member Settings
                </Button>
                <Button type='link' onClick={() => {removeProject(projectIndex)}}>
                    Remove Project
                </Button>
            </div>
        )
    };

    const betaMarkElement = <span className='list-item beta-mark'>BETA</span>;
    const menuButton = <MenuOutlined className='list-item project-settings' onClick={() => {setShowMenu(true)}}/>;

    return (
        <div className='list-item card'>
            <span>{project.projectName}</span>
            <div 
                className='list-item project-type-wrapper' 
                onMouseEnter={() => {setShowMenuButton(true)}}
                onMouseLeave={() => {setShowMenuButton(false)}}>
                {project.projectType === 'Android' && betaMarkElement}
                {showMenuButton && menuButton}
                {showMenu && popupMenu()}
                {getIconOfProjectType(project.projectType)}
                <span className='list-item project-type'>{project.projectType}</span>
            </div>
            <p>{new Date(project.projectCreateDate).toString()}</p>
        </div>
    );
};

export default ListItem;