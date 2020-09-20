import React from 'react';
import { Project } from '../Providers/ProjectsProvider';
import { Card } from 'antd';

interface Props {
    project: Project,
    projectIndex: Number
}

const ListItem = ({project, projectIndex}:Props) => {
    return (
        <Card title={project.projectName} style={{ width: 300 }} >
            <p>test</p>
        </Card>
    );
};

export default ListItem;