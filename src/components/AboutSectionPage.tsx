import React from 'react';
import { Flex, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { ABOUT_SECTION_IMAGE_URL } from '../constants';
import { blue, grey } from '../../colors';
import { AboutMeInfoSection } from './AboutMeInfoSection';

const DesktopAboutSection = () => {
  return (
    <Flex justify="center" align="flex-start" style={{ height: 811 }} gap={30}>
      <Flex>
        <img
          src={ABOUT_SECTION_IMAGE_URL}
          style={{
            height: 553,
            width: 553,
            borderRadius: '50%',
            borderWidth: '1px',
            borderColor: '#F2F2F2',
            borderStyle: 'solid',
          }}
          alt="about-section"
        />
      </Flex>
      <Flex
        vertical
        align="flex-start"
        justify="center"
        style={{ maxWidth: 620 }}
        gap={50}
      >
        <Flex vertical>
          <Typography.Text
            style={{
              color: blue[1],
              fontSize: 20,
              textAlign: 'left',
              lineHeight: 1.2,
            }}
          >
            ABOUT ME
          </Typography.Text>
          <Flex vertical style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Typography.Text
              style={{
                fontWeight: 600,
                fontSize: 50,
                color: blue[1],
                lineHeight: 1.2,
              }}
            >
              Self-Taught Developer
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: 50,
                fontWeight: 600,
                color: grey[1],
                lineHeight: 1.2,
              }}
            >
              with a Passion for Building
            </Typography.Text>
          </Flex>
          <Typography.Text style={{ fontSize: 18, fontWeight: 300 }}>
            Hello there! I’m <strong>Pawel</strong>, a{' '}
            <strong>self-taught web developer</strong> with a passion for
            creating innovative solutions. With experience working in{' '}
            <strong>fast-paced startup environments</strong>, I’m driven by{' '}
            <strong>ambition</strong> and a commitment to{' '}
            <strong>continuous improvement</strong> in my craft.
          </Typography.Text>
        </Flex>
        <AboutMeInfoSection />
      </Flex>
    </Flex>
  );
};

const MobileAboutSection = () => {
  return <Flex>sdas</Flex>;
};

export const AboutSectionPage = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return <DesktopAboutSection />;
};
