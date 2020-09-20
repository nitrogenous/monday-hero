import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

type propTypesOfProvider = {
    children: ReactNode,
};

const defaultPropsOfContext = {
    projectsList: [{}],
    createProject: (params: Object) => {},
    updateProject: (projectIndex: number, params: Object) => {},
    removeProject: (projectIndex: number) => {},
};

const ProjectsContext = createContext(defaultPropsOfContext);
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    const [ projectsState, setProjectsState ] = useState(defaultPropsOfContext.projectsList);
    const [ forceRender, setForceRender ] = useState(0);


    useEffect(() => {
		const projectsStorage = JSON.parse(localStorage.getItem('projects-storage') || '[]');

		setProjectsState(projectsStorage);
	}, []);

    useEffect(() => {
        localStorage.setItem('projects-storage', JSON.stringify(projectsState));     
    });

    const createProject = useCallback((params) => {
        setProjectsState([...projectsState, {
            'projectName': params.projectName,
            'projectType': params.projectPlatform,
            'projectCreateDate': params.projectCreateDate
        }]);
    }, [ projectsState ]);

    const updateProject = useCallback((projectIndex, params) => {
        projectsState[projectIndex] = {...projectsState[projectIndex] as Object, ...params};

        setForceRender(forceRender + 1);
    }, [ projectsState, forceRender ]);
        
    const removeProject = useCallback((projectIndex) => {
        let newProjectsState = projectsState.filter((value, index) => projectIndex !== index);

        setProjectsState(newProjectsState);
    }, [ projectsState ]);

    return <Provider value={{ projectsList: projectsState, createProject, updateProject, removeProject }}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };