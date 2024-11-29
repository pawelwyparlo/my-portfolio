import React, { PropsWithChildren } from 'react';
import { Flex, Typography } from 'antd';
import { blue, grey } from '../../colors';
import { QuoteDividerSection } from './QuoteDividerSection';
import { useUtilityContext } from '../contexts/UtilityContext';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Location, LeetCode } from '../icons';
import { motion } from 'framer-motion';

const LocationWidget: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      style={{
        backgroundColor: grey[0],
        width: 120,
        height: 30,
        color: grey[1],
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      gap={5}
    >
      <Location width="20px" height="20px" />
      <Typography.Text style={{ fontSize: 14, fontWeight: 500 }}>
        {children}
      </Typography.Text>
    </Flex>
  );
};

const MediaWidget = ({ icon, link }: { icon: JSX.Element; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export const ContactMeSection = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex vertical id="contact">
      <QuoteDividerSection text="Sounds interesting? Contact me" />
      <Flex
        style={{
          backgroundColor: blue[1],
          width: '120%',
          transform: 'translateX(-10%)',
          height: 'auto',
          color: 'white',
          paddingBottom: 30,
          paddingTop: 30,
        }}
        align="center"
        justify="center"
      >
        <Flex vertical align="center" justify="center" gap={15}>
          <Typography.Text
            style={{
              color: 'inherit',
              fontSize: isMobileScreenSize ? 40 : 50,
              fontWeight: 500,
            }}
          >
            Contact Me
          </Typography.Text>
          <Flex gap={30}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MediaWidget
                icon={
                  <GithubOutlined style={{ fontSize: 30, color: grey[0] }} />
                }
                link="https://github.com/pawelwyparlo"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MediaWidget
                icon={<MailOutlined style={{ fontSize: 30, color: grey[0] }} />}
                link="mailto:pawyparlo@gmail.com"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MediaWidget
                icon={
                  <LinkedinOutlined style={{ fontSize: 30, color: grey[0] }} />
                }
                link="https://www.linkedin.com/in/pawe%C5%82-wypar%C5%82o-6990691a1/"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MediaWidget
                icon={<LeetCode color={grey[0]} width="30px" height="30px" />}
                link="https://leetcode.com/u/pawelwyparlo/"
              />
            </motion.div>
          </Flex>
          <Flex
            gap={15}
            vertical={isMobileScreenSize}
            style={{ marginTop: 10 }}
          >
            <LocationWidget>Remote</LocationWidget>
            <LocationWidget>Cracow</LocationWidget>
            <LocationWidget>Warsaw</LocationWidget>
          </Flex>
          <Typography.Text
            style={{
              color: 'inherit',
              fontSize: 14,
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            Copyright © 2024
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
