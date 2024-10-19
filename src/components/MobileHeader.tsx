import React, { useState } from 'react';
import { Button, Drawer, Flex, Typography } from 'antd';
import { CodeBrackets } from '../icons';
import { BurgerMenu } from '../icons';
import { motion } from 'framer-motion';
import { blue, grey } from '../../colors';
import { MenuItem } from './PageHeader';

interface MobileHeaderProps {
  menuItems: MenuItem[];
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <Flex justify="space-between" align="center">
        <Flex gap={6} align="center">
          <CodeBrackets width="32px" height="32px" strokeColor={blue[1]} />
          <Typography.Text
            style={{
              color: grey[1],
              fontWeight: 500,
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            Code
          </Typography.Text>
        </Flex>
        <Flex>
          <Button
            style={{ border: 'none', boxShadow: 'none' }}
            icon={<BurgerMenu height="32px" width="32px" />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </Flex>
      </Flex>
      <Drawer
        rootStyle={{ marginTop: 64, overflow: 'hidden' }}
        styles={{
          body: {
            overflow: 'scroll',
            padding: 30,
            overscrollBehavior: 'contain',
          },
        }}
        closable={false}
        title={null}
        open={isMenuOpen}
        width="100%"
        placement="right"
      >
        <Flex vertical gap={30}>
          {menuItems.map((item) => (
            <Flex
              justify="center"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                item.onClick();
                setIsMenuOpen(false);
              }}
            >
              <Typography.Text
                key={item.name}
                style={{
                  color: grey[1],
                  fontWeight: 500,
                  fontSize: 22,
                  cursor: 'pointer',
                }}
              >
                <motion.div whileTap={{ color: blue[1] }}>
                  {item.name}
                </motion.div>
              </Typography.Text>
            </Flex>
          ))}
        </Flex>
      </Drawer>
    </>
  );
};
