import React, { CSSProperties } from 'react';
import { Flex, Timeline, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { blue, grey } from '../../colors';

const LIST_ITEM_STYLE: CSSProperties = {
  marginBottom: 10,
  textAlign: 'left',
};

type JobItem = {
  title: string;
  company: string;
  description: JSX.Element;
};

const SOFTWARE_JOBS: JobItem[] = [
  {
    title: 'Software Developer',
    company: 'RenewaFi',
    description: (
      <ul style={{ padding: 0 }}>
        <li style={LIST_ITEM_STYLE}>
          <strong>Refactored PostgreSQL</strong> structure and optimized{' '}
          <strong>React components</strong>, boosting performance and
          simplifying workflows.
        </li>
        <li style={LIST_ITEM_STYLE}>
          <strong>Managed weekly releases</strong>, ensuring smooth deployment.
        </li>
        <li style={LIST_ITEM_STYLE}>
          <strong>Introduced streaming tech</strong>, cutting latency by{' '}
          <strong>30%</strong>, and built integrations with{' '}
          <strong>Webflow</strong> and <strong>HubSpot</strong>.
        </li>
        <li style={LIST_ITEM_STYLE}>
          <strong>Developed an SSH tool</strong> for{' '}
          <strong>database syncing</strong> and supported <strong>mypy</strong>{' '}
          and <strong>Swagger</strong> adoption.
        </li>
        <li style={LIST_ITEM_STYLE}>
          <strong>Delivered MVP</strong> on time within{' '}
          <strong>3 months</strong>.
        </li>
      </ul>
    ),
  },
  {
    title: 'Junior Software Developer',
    company: 'Montrose Software',
    description: (
      <ul style={{ padding: 0 }}>
        <li style={LIST_ITEM_STYLE}>
          <strong>Built scalable React components</strong> in{' '}
          <strong>TypeScript</strong> and developed backend APIs in{' '}
          <strong>Django (Python)</strong>, focusing on business logic and
          seamless integration with <strong>GraphQL</strong> endpoints.
        </li>
        <li style={LIST_ITEM_STYLE}>
          Practiced <strong>Test-Driven Development (TDD)</strong> to ensure
          reliability and maintainability of both frontend and backend
          codebases.
        </li>
        <li style={LIST_ITEM_STYLE}>
          Implemented <strong>CI/CD pipelines</strong> with{' '}
          <strong>Docker</strong> and managed{' '}
          <strong>AWS staging environments</strong>, supporting smooth
          deployment and testing workflows.
        </li>
      </ul>
    ),
  },
  {
    title: 'Software Intern',
    company: 'Montrose Software',
    description: (
      <ul style={{ padding: 0 }}>
        <li style={LIST_ITEM_STYLE}>
          Built a <strong>JavaScript React application</strong> for a
          challenging web platform game, implementing complex styling and{' '}
          <strong>algorithmic logic</strong> to create an engaging user
          experience.
        </li>
        <li style={LIST_ITEM_STYLE}>
          Contributed to internal applications written in{' '}
          <strong>Python</strong> and <strong>TypeScript</strong>, gaining
          hands-on experience in <strong>full-stack development</strong>.
        </li>
        <li style={LIST_ITEM_STYLE}>
          Developed the <strong>Vue.js frontend</strong> for the company
          website, delivering responsive and user-friendly interfaces.
        </li>
      </ul>
    ),
  },
];

const BUSINESS_JOBS: JobItem[] = [
  {
    title: 'Startup Scout',
    company: 'Montrose Software',
    description: (
      <ul style={{ padding: 0 }}>
        <li style={LIST_ITEM_STYLE}>
          <strong>Startup Scout</strong> - Sourced and assessed pre-seed/seed
          startups for partnerships and investment opportunities, with a focus
          on enhancing <strong>app technology</strong> and forming{' '}
          <strong>strategic alliances</strong>.
        </li>
        <li style={LIST_ITEM_STYLE}>
          Presented key prospects to <strong>C-level managers</strong>,
          leveraging my <strong>software development expertise</strong> to
          evaluate technical and strategic fit.
        </li>
      </ul>
    ),
  },
  {
    title: 'Founder',
    company: 'Typebalance',
    description: (
      <ul style={{ padding: 0 }}>
        <li style={LIST_ITEM_STYLE}>
          <strong>Startup Founder</strong> - Conducted comprehensive{' '}
          <strong>market research</strong> and <strong>trend analysis</strong>{' '}
          to design data-driven product strategies that aligned technology with
          business objectives.
        </li>
        <li style={LIST_ITEM_STYLE}>
          Successfully built and led a <strong>multidisciplinary team</strong>,
          fostering collaboration and managing projects to deliver impactful and
          innovative solutions.
        </li>
      </ul>
    ),
  },
];

const TimelineItem = ({ jobItem }: { jobItem: JobItem }) => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex vertical align={isMobileScreenSize ? 'flex-start' : 'center'}>
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
        <Flex
          vertical
          align="center"
          gap={20}
          style={{ width: isMobileScreenSize ? '100%' : '50%' }}
        >
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
            mode={isMobileScreenSize ? 'left' : 'alternate'}
            items={SOFTWARE_JOBS.map((jobItem) => ({
              children: <TimelineItem jobItem={jobItem} />,
            }))}
          />
        </Flex>
        <Flex
          vertical
          align="center"
          gap={20}
          style={{ width: isMobileScreenSize ? '100%' : '50%' }}
        >
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
            mode={isMobileScreenSize ? 'left' : 'alternate'}
            items={BUSINESS_JOBS.map((jobItem) => ({
              children: <TimelineItem jobItem={jobItem} />,
            }))}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExperienceSection;
