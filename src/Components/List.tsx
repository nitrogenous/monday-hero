import React from 'react';
import ListItem from './ListItem';

interface Props {
    projectList:Object
}

const List = ({projectList}:Props) => {
    return (
        <div> 
            <p>List</p>
            {Object.values(projectList).map((data, index) => { 
                return (
                    <p>{data.projectName}</p> 
                )  
            })}
        </div>
    );
};

export default List;