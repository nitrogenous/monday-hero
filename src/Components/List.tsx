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
                    <ListItem project={data} projectIndex={index} key={index.toString()}/>
                )  
            })}
        </div>
    );
};

export default List;