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
  RightArrow,
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
      <Flex justify="space-between" align="center" gap={5}>
        <Bridge width="60px" height="60px" color={grey[1]} />
        <RightArrow width="60px" height="60px" color={grey[1]} />
        <Web width="70px" height="70px" color={grey[1]} />
      </Flex>
    ),
    description:
      'Experienced in helping early-stage startups grow, from ideation to scaling.',
  },
  {
    name: 'Technical Management in IT (IT Business Management)',
    icon: (
      <img
        src="https://pawyparlo-portfolio.s3.us-east-1.amazonaws.com/logo_agh.jpg"
        alt="AGH University of Science and Technology"
        style={{
          width: 70,
        }}
      />
    ),
    description:
      'Specializing in energy innovation, particularly clean and sustainable solutions.',
  },
];

const MainSkillItem = ({ skill }: { skill: any; height?: number }) => {
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex vertical key={skill.name} gap={10}>
      <Flex justify="center" align="center" style={{ height: 110 }}>
        {skill.icon}
      </Flex>
      <Flex
        vertical
        align="center"
        justify="center"
        gap={5}
        style={{ width: isMobileScreenSize ? '100%' : 'fit-content' }}
      >
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
            width: '100%',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          {skill.description}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

const MainSkillsSection: React.FC = () => {
  const { isMobileScreenSize } = useUtilityContext();

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
          width: isMobileScreenSize ? '360px' : '620px',
          lineHeight: '160px',
          textAlign: 'center',
        }}
      >
        <div>
          <Flex vertical={isMobileScreenSize} justify="space-between" key={1}>
            {MAIN_SKILLS_CONTENT.map((skill, index) =>
              index % 2 == 0 ? <MainSkillItem skill={skill} /> : null,
            )}
          </Flex>
        </div>
        <div>
          <Flex vertical={isMobileScreenSize} justify="space-between" key={2}>
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
  const { isMobileScreenSize } = useUtilityContext();
  return (
    <Flex justify="space-between" vertical={isMobileScreenSize}>
      {INDUSTRIES_CONTENT.map((industry, index) => (
        <MainSkillItem skill={industry} key={index} />
      ))}
    </Flex>
  );
};

const EducationSection: React.FC = () => {
  const { isMobileScreenSize } = useUtilityContext();

  return (
    <Flex justify="space-between" vertical={isMobileScreenSize}>
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
        gap={isMobileScreenSize ? 15 : 30}
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
