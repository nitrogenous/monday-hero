import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

type propTypesOfProvider = {
    children: ReactNode,
};

const defaultPropsOfContext = {
    createProject: (params: Object) => {},
    updateProject: (projectIndex: number, params: Object) => {},
    removeProject: (projectIndex: number) => {},
};

const ProjectsContext = createContext(defaultPropsOfContext);
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    const [ projectsState, setProjectsState ] = useState(Array);

    useEffect(() => {
		const projectsStorage = JSON.parse(localStorage.getItem('projects-storage') || '[]');

		setProjectsState(projectsStorage);
	}, []);

    useEffect(() => {
        localStorage.setItem('projects-storage', JSON.stringify(projectsState))        
    });

    const createProject = useCallback((params) => {
        setProjectsState([...projectsState, {
            'projectName': params.projectName,
            'projectType': params.projectPlatform,
            'projectCreateDate': params.projectCreateDate
        }]);
    }, [ projectsState ]);

    const updateProject = useCallback((projectIndex, params) => {

    }, [ projectsState ]);

    const removeProject = useCallback((projectIndex) => {

    }, [ projectsState ]);

    return <Provider value={{ createProject, updateProject, removeProject }}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };