import React from 'react';
import { Layout } from 'antd';
import { grey } from '../../colors';
import { DesktopHeader } from './DesktopHeader';
import { useUtilityContext } from '../contexts/UtilityContext';
import { MobileHeader } from './MobileHeader';
import { scrollTo } from '../utils';
import { DESKTOP_PAGE_PADDING, MOBILE_PAGE_PADDING } from '../constants';

const { Header } = Layout;

export type MenuItem = {
  name: string;
  id: string;
  onClick: () => void;
};

const menuItems = [
  { name: 'About', id: 'about' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

const updatedMenutItems = menuItems.map((item) => ({
  ...item,
  onClick: () => scrollTo(item.id),
}));

export const PageHeader: React.FC = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Header
      style={{
        width: '100%',
        backgroundColor: grey[0],
        marginTop: isMobileScreenSize ? 8 : 16,
        height: isMobileScreenSize ? 48 : 80,
        padding: isMobileScreenSize
          ? MOBILE_PAGE_PADDING
          : DESKTOP_PAGE_PADDING,
      }}
    >
      {isMobileScreenSize ? (
        <MobileHeader menuItems={updatedMenutItems} />
      ) : (
        <DesktopHeader menuItems={updatedMenutItems} />
      )}
    </Header>
  );
};
