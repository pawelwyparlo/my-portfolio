import React, { useState } from 'react';
import { Button, Carousel, Flex, Typography } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { motion } from 'framer-motion';
import { blue, grey } from '../../colors';
import {
  CodeBrain,
  HourGlass,
  Communication,
  Learning,
  Rocket,
  Turbine,
  Bridge,
  Web,
} from '../icons';

const ABOUT_ME_INFO = [
  {
    title: 'Main Skills',
  },
  {
    title: 'Industries',
  },
  {
    title: 'Education',
  },
];

const MAIN_SKILLS_CONTENT = [
  {
    name: 'Problem Solving',
    icon: <CodeBrain width="70px" height="70px" />,
    description:
      'Excelling in overcoming technical challenges with creativity and logical thinking.',
  },
  {
    name: 'Self-Management',
    icon: <HourGlass width="70px" height="70px" />,
    description:
      'Strong ability to prioritize tasks and manage time efficiently in fast-paced environments.',
  },
  {
    name: 'Effective Communication',
    icon: <Communication width="70px" height="70px" />,
    description:
      'Demonstrating clarity in both written and verbal communication with teams and clients.',
  },
  {
    name: 'Continuous Learning',
    icon: <Learning width="70px" height="70px" />,
    description:
      'Passion for learning new technologies and methodologies to stay up-to-date with industry trends.',
  },
];

const INDUSTRIES_CONTENT = [
  {
    name: 'Startups',
    icon: <Rocket width="70px" height="70px" />,
    description:
      'Experienced in helping early-stage startups grow, from ideation to scaling.',
  },
  {
    name: 'Energy Industry',
    icon: <Turbine width="70px" height="70px" />,
    description:
      'Specializing in energy innovation, particularly clean and sustainable solutions.',
  },
];

const EDUCATION_CONTENT = [
  {
    name: 'Bachelor’s Degree in Civil Engineering',
    icon: (
      <Flex>
        <Bridge width="70px" height="70px" />
        <Web width="70px" height="70px" />{' '}
      </Flex>
    ),
    description:
      'Experienced in helping early-stage startups grow, from ideation to scaling.',
  },
  {
    name: 'Technical Management in IT (IT Business Management)',
    icon: <Turbine width="70px" height="70px" />,
    description:
      'Specializing in energy innovation, particularly clean and sustainable solutions.',
  },
];

const MainSkillItem = ({ skill }: { skill: any }) => {
  return (
    <Flex vertical key={skill.name} gap={10}>
      <Flex justify="center">{skill.icon}</Flex>
      <Flex vertical gap={5}>
        <Typography.Text
          style={{
            fontWeight: 600,
            fontSize: 20,
            color: blue[1],
            textAlign: 'center',
          }}
        >
          {skill.name}
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: 15,
            textAlign: 'center',
          }}
        >
          {skill.description}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

const MainSkillsSection: React.FC = () => {
  return (
    <Flex vertical>
      <Carousel
        autoplay
        dots={false}
        adaptiveHeight={true}
        fade={true}
        autoplaySpeed={3000}
        draggable={true}
        style={{
          width: '620px',
          lineHeight: '160px',
          textAlign: 'center',
        }}
      >
        <div>
          <Flex justify="space-between" key={1}>
            {MAIN_SKILLS_CONTENT.map((skill, index) =>
              index % 2 == 0 ? <MainSkillItem skill={skill} /> : null,
            )}
          </Flex>
        </div>
        <div>
          <Flex justify="space-between" key={2}>
            {MAIN_SKILLS_CONTENT.map((skill, index) =>
              index % 2 != 0 ? <MainSkillItem skill={skill} /> : null,
            )}
          </Flex>
        </div>
      </Carousel>
    </Flex>
  );
};

const IndustriesSection: React.FC = () => {
  return (
    <Flex justify="space-between">
      {INDUSTRIES_CONTENT.map((industry, index) => (
        <MainSkillItem skill={industry} key={index} />
      ))}
    </Flex>
  );
};

const EducationSection: React.FC = () => {
  return (
    <Flex justify="space-between">
      {EDUCATION_CONTENT.map((education, index) => (
        <MainSkillItem skill={education} key={index} />
      ))}
    </Flex>
  );
};

export const AboutMeInfoSection = () => {
  const { isMobileScreenSize } = useUtilityContext();
  const [selectedInfo, setSelectedInfo] = useState(ABOUT_ME_INFO[0].title);

  return (
    <Flex
      vertical
      style={{ width: '100%' }}
      align="center"
      justify="center"
      gap={40}
    >
      <Flex
        vertical={isMobileScreenSize}
        justify={isMobileScreenSize ? 'center' : 'space-between'}
        style={{ width: '100%' }}
      >
        {ABOUT_ME_INFO.map((info, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer' }}
            key={index}
          >
            <Button
              style={{
                width: isMobileScreenSize ? '100%' : 170,
                height: 50,
                borderRadius: 25,
                borderColor: selectedInfo == info.title ? grey[0] : blue[1],
                backgroundColor:
                  selectedInfo == info.title ? blue[1] : 'transparent',
                boxShadow: 'none',
              }}
              onClick={() => setSelectedInfo(info.title)}
            >
              <Typography.Text
                style={{
                  fontWeight: 600,
                  color: selectedInfo == info.title ? grey[0] : blue[1],
                }}
              >
                {info.title}
              </Typography.Text>
            </Button>
          </motion.div>
        ))}
      </Flex>
      <Flex>
        {selectedInfo == 'Main Skills' ? <MainSkillsSection /> : null}
        {selectedInfo == 'Industries' ? <IndustriesSection /> : null}
        {selectedInfo == 'Education' ? <EducationSection /> : null}
      </Flex>
    </Flex>
  );
};
