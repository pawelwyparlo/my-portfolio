//@ts-ignore
import React from 'react';
import { Layout, Flex } from 'antd';
import { grey } from '../colors';
import { PageHeader } from './components/PageHeader';
import { HelloSectionPage } from './components/HelloSectionPage';
import { useUtilityContext } from './contexts/UtilityContext';
import { MOBILE_PAGE_PADDING, DESKTOP_PAGE_PADDING } from './constants';
import { AboutSectionPage } from './components/AboutSectionPage';
import { QuoteDividerSection } from './components/QuoteDividerSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import { ContactMeSection } from './components/ContactMeSection';

const { Content } = Layout;

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
        overflow: 'hidden',
      }}
    >
      <PageHeader />
      <Content style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
        <Flex
          vertical
          gap={30}
          style={{
            padding: isMobileScreenSize
              ? MOBILE_PAGE_PADDING
              : DESKTOP_PAGE_PADDING,
          }}
        >
          <HelloSectionPage />
          <QuoteDividerSection
            text="The only way to do great work is to love what you do"
            author="Steve Jobs"
          />
          <AboutSectionPage />
          <SkillsSection />
          <ExperienceSection />
          <ContactMeSection />
        </Flex>
      </Content>
    </Layout>
  );
}

export default App;
