import React from 'react';
import { Layout } from 'antd';
import { grey } from '../../colors';
import { DesktopHeader } from './DesktopHeader';
import { useUtilityContext } from '../contexts/UtilityContext';
import { MobileHeader } from './MobileHeader';

const { Header } = Layout;

const menuItems = [
  { name: 'About' },
  { name: 'Portfolio' },
  { name: 'Experience' },
  { name: 'Contact' },
];

export const PageHeader: React.FC = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Header
      style={{
        width: '100%',
        backgroundColor: grey[0],
        marginTop: isMobileScreenSize ? 8 : 16,
        height: isMobileScreenSize ? 48 : 80,
        padding: isMobileScreenSize ? '0px 10px 0px 10px' : '0px 50px 0px 50px',
      }}
    >
      {isMobileScreenSize ? (
        <MobileHeader menuItems={menuItems} />
      ) : (
        <DesktopHeader menuItems={menuItems} />
      )}
    </Header>
  );
};
