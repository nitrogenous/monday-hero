import React from 'react';
import { Project } from '../Providers/ProjectsProvider';

interface Props {
    project: Project
}

const ListItem = ({project}:Props) => {
    return (
        <div style={{display: 'flex'}}>
            <p>{project.projectName}</p>
            <p>{project.projectType}</p>
            <p>{new Date(project.projectCreateDate).toString()}</p>
        </div>
    );
};

export default ListItem;