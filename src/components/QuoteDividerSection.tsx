// @ts-ignore
import React from 'react';
import { Flex, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { grey } from '../../colors';
import { motion } from 'framer-motion';

export const QuoteDividerSection = ({
  text,
  author,
}: {
  text: string;
  author?: string;
}) => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex
      style={{
        position: 'relative',
        width: '120%',
        transform: 'translateX(-10%)',
        height: isMobileScreenSize ? 130 : 180,
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
          fontSize: isMobileScreenSize ? 22 : 32,
          color: grey[1],
          opacity: 0.2,
          textAlign: 'center',
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
        {author ? (
          <Typography.Text
            style={{
              position: 'absolute',
              right: '20%',
              bottom: '10%',
              fontSize: isMobileScreenSize ? 16 : 22,
              color: grey[1],
              textAlign: 'center',
            }}
          >
            ~{author}
          </Typography.Text>
        ) : null}
      </Typography.Text>
    </Flex>
  );
};
