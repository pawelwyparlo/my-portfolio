import React from 'react';
import { Flex, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { ABOUT_SECTION_IMAGE_URL } from '../constants';
import { blue, grey } from '../../colors';
import { AboutMeInfoSection } from './AboutMeInfoSection';

interface AboutMeSectionProps {
  titleFontSize: number;
  subtitleFontSize: number;
  descriptionFontSize: number;
}

const AboutMeTextSection: React.FC<AboutMeSectionProps> = ({
  titleFontSize,
  subtitleFontSize,
  descriptionFontSize,
}) => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex
      vertical
      align={isMobileScreenSize ? 'center' : 'flex-start'}
      style={{ maxWidth: isMobileScreenSize ? 500 : '100%' }}
    >
      <Typography.Text
        style={{
          color: blue[1],
          fontSize: titleFontSize,
          textAlign: 'left',
          lineHeight: 1.2,
        }}
      >
        ABOUT ME
      </Typography.Text>
      <Flex
        align={isMobileScreenSize ? 'center' : 'flex-start'}
        vertical
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Typography.Text
          style={{
            fontWeight: 600,
            fontSize: subtitleFontSize,
            color: blue[1],
            lineHeight: 1.2,
            textAlign: isMobileScreenSize ? 'center' : 'left',
          }}
        >
          Self-Taught Developer
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: subtitleFontSize,
            fontWeight: 600,
            color: grey[1],
            lineHeight: 1.2,
            textAlign: isMobileScreenSize ? 'center' : 'left',
          }}
        >
          with a Passion for Building
        </Typography.Text>
      </Flex>
      <Typography.Text
        style={{
          fontSize: descriptionFontSize,
          fontWeight: 300,
          textAlign: isMobileScreenSize ? 'center' : 'left',
        }}
      >
        Hello there! I’m <strong>Pawel</strong>, a{' '}
        <strong>self-taught web developer</strong> with a passion for creating
        innovative solutions. With experience working in{' '}
        <strong>fast-paced startup environments</strong>, I’m driven by{' '}
        <strong>ambition</strong> and a commitment to{' '}
        <strong>continuous improvement</strong> in my craft.
      </Typography.Text>
    </Flex>
  );
};

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
        <AboutMeTextSection
          titleFontSize={20}
          subtitleFontSize={50}
          descriptionFontSize={18}
        />
        <AboutMeInfoSection />
      </Flex>
    </Flex>
  );
};

const MobileAboutSection = () => {
  return (
    <Flex
      vertical
      justify="flex-start"
      align="center"
      style={{ marginTop: 30, marginBottom: 30 }}
      gap={30}
    >
      <Flex justify="center" align="center">
        <img
          src={ABOUT_SECTION_IMAGE_URL}
          style={{
            width: '350px',
            borderRadius: '50%',
            borderWidth: '1px',
            borderColor: '#F2F2F2',
            borderStyle: 'solid',
          }}
          alt="about-section"
        />
      </Flex>
      <AboutMeTextSection
        titleFontSize={18}
        subtitleFontSize={40}
        descriptionFontSize={18}
      />
      <AboutMeInfoSection />
    </Flex>
  );
};

export const AboutSectionPage = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return isMobileScreenSize ? <MobileAboutSection /> : <DesktopAboutSection />;
};
