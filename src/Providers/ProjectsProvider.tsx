import React, { createContext, useState, useEffect, ReactNode } from 'react';

const ProjectsContext = createContext({});
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

type propTypesOfProvider = {
    children: ReactNode
};

const ProjectsProvider = ({ children }: propTypesOfProvider) => {
    return <Provider value={{}}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };