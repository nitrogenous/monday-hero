import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type propTypesOfProvider = {
    children: ReactNode,
};

export type Project = {
    projectName:string,
    projectType:string,
    projectCreateDate:number
}

export type Props ={
    projectList: Project[],
    createProject: (params:Project) => void,
    updateProject: (projectIndex:number, params:Partial<Project>) => void,
    removeProject: (projectIndex:number) => void,
}

const defaultPropsOfContext:Props = {
    projectList: [],
    createProject: (params) => {},
    updateProject: (projectIndex) => {},
    removeProject: (projectIndex) => {},
};

const ProjectsContext = createContext(defaultPropsOfContext);
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    const [ projectList, setProjectList ] = useState<Project[]>(defaultPropsOfContext.projectList);

    useEffect(() => {
		const localList = JSON.parse(localStorage.getItem('projects-storage') || '[]');
		setProjectList(localList);
	}, []);

    useEffect(() => {
        localStorage.setItem('projects-storage', JSON.stringify(projectList));     
    },[projectList]);

    const createProject = useCallback((params:Project) => {
        const project = {...params}
        setProjectList([project, ...projectList]);
    }, [ projectList ]);

    const updateProject = useCallback((projectIndex, params:Partial<Project>) => {
        const newList = projectList.map((proj,index)=>{
            if(index !== projectIndex) return proj;
            return {
                ...proj,
                ...params,
            }
        });

        setProjectList(newList);
    }, [ projectList ]);
        
    const removeProject = useCallback((projectIndex) => {
        let newProjectsState = projectList.filter((value, index) => projectIndex !== index);
        setProjectList(newProjectsState);
    }, [ projectList ]);

    return <Provider value={{ projectList, createProject, updateProject, removeProject }}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };