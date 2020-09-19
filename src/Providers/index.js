import React from 'react';
import { StorageProvider } from "./StorageProvider";
import { ProjectsProvider } from "./ProjectsProvider";


export const Providers = ({ children }) => {
    return <StorageProvider> 
        <ProjectsProvider> { children } </ProjectsProvider>
    </StorageProvider>;
}