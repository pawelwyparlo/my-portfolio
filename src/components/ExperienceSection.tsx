import React from 'react';
import { Flex, Timeline, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { blue, grey } from '../../colors';
import { Web } from '../icons';

const JOBS = [
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

const TimelineItem = ({
  jobItem,
  minWidth,
}: {
  jobItem: any;
  minWidth: number;
}) => {
  return (
    <Flex vertical style={{ minWidth: minWidth }}>
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
      vertical
      justify="flex-start"
      align="center"
      style={{ paddingTop: 50, paddingBottom: 50, height: 600 }}
      gap={50}
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
      <Flex justify="center">
        <Timeline
          mode={isMobileScreenSize ? 'alternate' : 'left'}
          items={JOBS.map((jobItem) => ({
            children: (
              <TimelineItem
                minWidth={isMobileScreenSize ? 150 : 300}
                jobItem={jobItem}
              />
            ),
            label: '2020',
          }))}
        />
      </Flex>
    </Flex>
  );
};

export default ExperienceSection;
