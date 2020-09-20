import React from 'react';
import { ProjectsProvider } from "./ProjectsProvider";


export const Providers = ({ children }) => {
    return  <ProjectsProvider> { children } </ProjectsProvider>;
}