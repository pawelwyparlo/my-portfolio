import React from 'react';
import { useUtilityContext } from '../contexts/UtilityContext';
import { DesktopHelloSection } from './DesktopHelloSection';
import { MobileHelloSection } from './MobileHelloSection';

export const HelloSectionPage: React.FC = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return isMobileScreenSize ? <MobileHelloSection /> : <DesktopHelloSection />;
};
