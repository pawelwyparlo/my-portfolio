import React from 'react';
import { useUtilityContext } from '../contexts/UtilityContext';
import { DesktopAboutSection } from './DesktopAboutSection';
import { MobileAboutSection } from './MobileAboutSection';

export const AboutSectionPage: React.FC = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return isMobileScreenSize ? <MobileAboutSection /> : <DesktopAboutSection />;
};
