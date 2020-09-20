import React from 'react';
import List from '../Components/List';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Projects = () => {
    return (
        <Layout>
            <Header>
                Projects
                <button>+</button>
            </Header>   
            <Content>
                <List />
            </Content> 
            <Footer>
                Made by Toprak Koc
            </Footer>
        </Layout>
    );
};

export default Projects;