import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import randomId from 'random-id';

export type propTypesOfProvider = {
    children: ReactNode,
};

export type Project = {
    id: string,
    projectName: string,
    projectType: string,
    projectCreateDate: number
}

export type Props = {
    projectList: Project[],
    createProject: (params: Omit<Project, 'id'>) => void,
    updateProject: (projectId: string, params: Partial<Project>) => void,
    removeProject: (projectId: string) => void,
}

const defaultPropsOfContext: Props = {
    projectList: [],
    createProject: (params) => { },
    updateProject: (projectId) => { },
    removeProject: (projectId) => { },
};

const ProjectsContext = createContext(defaultPropsOfContext);
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    const [projectList, setProjectList] = useState<Project[]>(defaultPropsOfContext.projectList);

    useEffect(() => {
        const localList = JSON.parse(localStorage.getItem('projects-storage') || '[]');

        setProjectList(localList);
    }, []);

    useEffect(() => {
        localStorage.setItem('projects-storage', JSON.stringify(projectList));
    }, [projectList]);

    const createProject = useCallback((params: Omit<Project, 'id'>) => {
        const project = { ...params, id: randomId() }

        setProjectList([project, ...projectList]);
    }, [projectList]);

    const updateProject = useCallback((projectId, params: Partial<Omit<Project, 'id'>>) => {
        const newList = projectList.map((proj) => {
            if (proj.id !== projectId) return proj;

            return {
                ...proj,
                ...params,
            }
        });

        setProjectList(newList);
    }, [projectList]);

    const removeProject = useCallback((projectId) => {
        const newProjectsState = projectList.filter((value) => value.id !== projectId);

        setProjectList(newProjectsState);
    }, [projectList]);

    return <Provider value={{ projectList, createProject, updateProject, removeProject }}> {children} </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };