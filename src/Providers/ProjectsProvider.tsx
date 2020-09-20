import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

type propTypesOfProvider = {
    children: ReactNode,
};

const defaultPropsOfContext = {
    createProject: (arg: Object) => {},
    updateProject: (arg: Object) => {},
    removeProject: (arg: number) => {},
};

const ProjectsContext = createContext(defaultPropsOfContext);
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    const [ projectsState, setProjectsState ] = useState(Array);

    useEffect(() => {
        const oldProjectsStorage = JSON.parse(localStorage.getItem('projectsStorage') || '{}');

        localStorage.setItem('projectsStorage', JSON.stringify({...oldProjectsStorage, projectsState} || {}))

        // console.log(projectsState);
        console.log( JSON.parse(localStorage.getItem('projectsStorage') || '{}'))
    })

    const createProject = useCallback((params) => {
        setProjectsState([...projectsState, {
            'projectName': params.projectName,
            'projectType': params.projectPlatform,
            'projectCreateDate': params.projectCreateDate
        }]);
    }, [ projectsState ]);

    const updateProject = useCallback((params) => {
        
    }, [ projectsState ]);

    const removeProject = useCallback((projectIndex) => {

    }, [ projectsState ]);

    return <Provider value={{ createProject, updateProject, removeProject }}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };