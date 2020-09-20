import React from 'react';
import ListItem from './ListItem';

interface Props {
    projectList:Object
}

const List = ({projectList}:Props) => {
    return (
        <div className='list-items-wrapper'> 
            {Object.values(projectList).map((data, index) => { 
                return (
                    <ListItem project={data} projectIndex={index} key={index.toString()}/>
                )  
            })}
        </div>
    );
};

export default List;