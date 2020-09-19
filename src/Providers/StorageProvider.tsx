import React, { createContext, useState, useEffect, ReactNode } from 'react';

const StorageContext = createContext({});
const { Provider, Consumer: StorageConsumer } = StorageContext;

type ReactNodes = {
    children: ReactNode
};

const StorageProvider = ({ children }: ReactNodes) => {
    return <Provider value={{}} > { children } </Provider>
};

export { StorageProvider, StorageConsumer, StorageContext };