import React from 'react';
import { Layout } from 'antd';
import { grey } from '../colors';
import { PageHeader } from './components/PageHeader';

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: grey[0],
      }}
    >
      <PageHeader />
      <Content></Content>
      <Footer style={{ height: 20 }}></Footer>
    </Layout>
  );
}

export default App;
