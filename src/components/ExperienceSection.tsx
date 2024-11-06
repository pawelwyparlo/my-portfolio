import React from 'react';
import { Flex, Timeline, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { blue, grey } from '../../colors';

const SOFTWARE_JOBS = [
  {
    title: 'Software Developer',
    company: 'RenewaFi',
    description: 'Worked on the Google search engine',
  },
  {
    title: 'Software Developer',
    company: 'Montrose Software',
    description: 'Worked on the Facebook social media platform',
  },
  {
    title: 'Parametric Designer',
    company: 'Zaha Hadid Architects',
    description: 'Worked on the design of the Beijing Airport',
  },
];

const BUSINESS_JOBS = [
  {
    title: 'Startup Scout',
    company: 'RenewaFi',
    description: 'Worked on the Google search engine',
  },
  {
    title: 'Founder',
    company: 'Montrose Software',
    description: 'Worked on the Facebook social media platform',
  },
];

const TimelineItem = ({ jobItem }: { jobItem: any }) => {
  return (
    <Flex vertical>
      <Typography.Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: blue[1],
          lineHeight: 1.2,
        }}
      >
        {jobItem.title}
      </Typography.Text>
      <Typography.Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          color: grey[1],
          lineHeight: 1.2,
        }}
      >
        {jobItem.company}
      </Typography.Text>
      <Typography.Text
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: grey[1],
          lineHeight: 1.2,
          marginTop: 10,
        }}
      >
        {jobItem.description}
      </Typography.Text>
    </Flex>
  );
};

const ExperienceSection = () => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex
      id="experience"
      vertical
      justify="flex-start"
      align="center"
      style={{ paddingTop: 30, paddingBottom: 30 }}
      gap={isMobileScreenSize ? 30 : 50}
    >
      <Flex
        justify={isMobileScreenSize ? 'center' : 'flex-start'}
        style={{ width: isMobileScreenSize ? '100%' : '80%' }}
      >
        <Typography.Text
          style={{
            fontWeight: 600,
            fontSize: isMobileScreenSize ? 40 : 50,
            color: blue[1],
            lineHeight: 1.2,
          }}
        >
          Experience
        </Typography.Text>
      </Flex>
      <Flex
        justify="space-between"
        vertical={isMobileScreenSize}
        gap={isMobileScreenSize ? 30 : 60}
      >
        <Flex vertical align="center" gap={20}>
          <Typography.Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: blue[1],
              lineHeight: 1.2,
            }}
          >
            As a Software Developer
          </Typography.Text>
          <Timeline
            mode={isMobileScreenSize ? 'alternate' : 'left'}
            items={SOFTWARE_JOBS.map((jobItem) => ({
              children: <TimelineItem jobItem={jobItem} />,
              label: '2020',
            }))}
          />
        </Flex>
        <Flex vertical align="center" gap={20}>
          <Typography.Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: blue[1],
              lineHeight: 1.2,
            }}
          >
            As a Startup Enthusiast
          </Typography.Text>
          <Timeline
            mode={isMobileScreenSize ? 'alternate' : 'left'}
            items={BUSINESS_JOBS.map((jobItem) => ({
              children: <TimelineItem jobItem={jobItem} />,
              label: '2020',
            }))}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExperienceSection;
