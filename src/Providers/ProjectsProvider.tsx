import React, { createContext, useState, useEffect, ReactNode } from 'react';

const ProjectsContext = createContext({});
const { Provider, Consumer: ProjectsConsumer } = ProjectsContext;

type ReactNodes = {
    children: ReactNode
};

const ProjectsProvider = ({ children }: ReactNodes) => {
    return <Provider value={{}}> { children } </Provider>
};

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };