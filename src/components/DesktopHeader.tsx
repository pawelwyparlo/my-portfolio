import React from 'react';
import { Flex, Typography, Button } from 'antd';
import { CodeBrackets } from '../icons';
import { motion } from 'framer-motion';
import { blue, grey } from '../../colors';

interface DekstopHeaderProps {
  menuItems: { name: string }[];
}

export const DesktopHeader: React.FC<DekstopHeaderProps> = ({ menuItems }) => {
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
