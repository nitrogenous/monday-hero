import React, { createContext, useState, useEffect, ReactNode } from 'react';

const ProjectsContext = createContext({});
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

type propTypesOfProvider = {
    children: ReactNode
};

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    const [ ProjectsState, setProjectsState ] = useState({});

    const createProject = () => {

    };

    const updateProject = () => {

    }

    const removeProject = () => {

    };

    return <Provider value={{ createProject, updateProject, removeProject }}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };