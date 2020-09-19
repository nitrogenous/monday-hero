import React from 'react';
import { StorageProvider } from './StorageProvider';

export const Providers = ({ children }) => {
    return <StorageProvider> { children } </StorageProvider>;

}