import React from 'react';
import { Project } from '../Providers/ProjectsProvider';
import ListItem from './ListItem';

interface Props {
    projectList: Object
    onItemClick: (item: Project) => void;
}

const List = ({ projectList, onItemClick }: Props) => {
    return (
        <div className='list-items-wrapper'>
            {Object.values(projectList).map((data, index) => (
                <ListItem project={data} key={data.id} onClick={() => {
                    onItemClick(data);
                }} />
            ))
            }
        </div>
    );
};

export default List;
