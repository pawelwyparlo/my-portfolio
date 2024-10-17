import React from 'react';
import { Button, Flex, Layout, Typography } from 'antd';
import { blue, grey } from '../../colors';
import { CodeBrackets } from '../icons';
import { motion } from 'framer-motion';

const { Header } = Layout;

const menuItems = [
  { name: 'About' },
  { name: 'Portfolio' },
  { name: 'Experience' },
  { name: 'Contact' },
];

const MobileHeader: React.FC = () => {
  return (
    <Flex>
      <Flex>Logo</Flex>
      <Flex>Menu</Flex>
    </Flex>
  );
};

const DesktopHeader: React.FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <Flex gap={6} align="center">
        <CodeBrackets width="40px" height="40px" strokeColor={blue[1]} />
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
      <Flex gap={24} align="center" justify="space-between">
        {menuItems.map((item) => (
          <Flex style={{ cursor: 'pointer' }}>
            <Typography.Text
              key={item.name}
              style={{
                color: grey[1],
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
              }}
            >
              <motion.div whileHover={{ color: blue[1] }}>
                {item.name}
              </motion.div>
            </Typography.Text>
          </Flex>
        ))}
      </Flex>
      <Flex align="center">
        <Button
          style={{
            height: 50,
            width: 160,
            borderRadius: 25,
            backgroundColor: blue[1],
          }}
        >
          <Typography.Text
            style={{
              color: grey[0],
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: 1.2,
            }}
          >
            Let's Chat
          </Typography.Text>
        </Button>
      </Flex>
    </Flex>
  );
};

const PageHeader: React.FC = () => {
  return (
    <Header
      style={{
        backgroundColor: grey[0],
        marginTop: 16,
        height: 80,
      }}
    >
      {/* <MobileHeader /> */}
      <DesktopHeader />
    </Header>
  );
};

export default PageHeader;
