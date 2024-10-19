import React from 'react';
import { Layout, Flex } from 'antd';
import { grey } from '../colors';
import { PageHeader } from './components/PageHeader';
import { HelloSectionPage } from './components/HelloSectionPage';
import { useUtilityContext } from './contexts/UtilityContext';
import { MOBILE_PAGE_PADDING, DESKTOP_PAGE_PADDING } from './constants';
import { AboutSectionPage } from './components/AboutSectionPage';
const { Footer, Content } = Layout;

function App() {
  const { isMobileScreenSize } = useUtilityContext();
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
      <Content style={{ overflowY: 'scroll' }}>
        <Flex
          vertical
          gap={10}
          style={{
            padding: isMobileScreenSize
              ? MOBILE_PAGE_PADDING
              : DESKTOP_PAGE_PADDING,
          }}
        >
          <HelloSectionPage />
          <AboutSectionPage />
        </Flex>
      </Content>
      <Footer style={{ height: 20 }}></Footer>
    </Layout>
  );
}

export default App;
