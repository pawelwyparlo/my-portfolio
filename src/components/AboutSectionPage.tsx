import React from 'react';
import { Flex } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';

const DesktopAboutSection = () => {
  return <Flex>sdas</Flex>;
};

const MobileAboutSection = () => {
  return <Flex>sdas</Flex>;
};

export const AboutSectionPage = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return <DesktopAboutSection />;
};
