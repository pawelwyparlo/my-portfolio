import React from 'react';
import { Flex, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { grey } from '../../colors';
import { motion } from 'framer-motion';

export const QuoteDividerSection = ({ text }: { text: string }) => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex
      style={{
        width: '120%',
        transform: 'translateX(-10%)',
        height: 180,
        backgroundColor: '#F8F8F8',
        paddingLeft: '20%',
        paddingRight: '20%',
      }}
      align="center"
      justify="center"
    >
      <Typography.Text
        italic
        style={{
          fontSize: isMobileScreenSize ? 25 : 50,
          color: grey[1],
          opacity: 0.2,
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </Typography.Text>
    </Flex>
  );
};
