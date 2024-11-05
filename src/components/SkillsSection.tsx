import React from 'react';
import { Flex, Typography, Row, Col } from 'antd';
import { useUtilityContext } from '../contexts/UtilityContext';
import { blue, grey } from '../../colors';
import { motion } from 'framer-motion';
import {
  AmazonwebservicesOriginalWordmark,
  Css3Original,
  CypressioOriginal,
  DjangoPlain,
  DjangorestPlainWordmark,
  DockerOriginal,
  GithubactionsOriginal,
  GithubOriginal,
  GitOriginal,
  Html5Original,
  JestPlain,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  TypescriptOriginal,
} from 'devicons-react';

const DESKTOP_SKILLS_ARRAY = [
  [
    { name: 'Python', icon: <PythonOriginal size={60} /> },
    { name: 'TypeScript', icon: <TypescriptOriginal size={60} /> },
    { name: 'React', icon: <ReactOriginal size={60} /> },
    { name: 'Django', icon: <DjangoPlain size={60} /> },
  ],
  [
    {
      name: 'Html & CSS',
      icon: (
        <Flex gap={5}>
          <Html5Original size={60} /> <Css3Original size={60} />
        </Flex>
      ),
    },
    { name: 'PostgreSQL', icon: <PostgresqlOriginal size={60} /> },
    { name: 'Django REST', icon: <DjangorestPlainWordmark size={60} /> },
    {
      name: 'AWS Server',
      icon: <AmazonwebservicesOriginalWordmark size={60} />,
    },
  ],
  [
    {
      name: 'Git & Github',
      icon: (
        <Flex gap={5}>
          <GitOriginal size={60} />
          <GithubOriginal size={60} />
        </Flex>
      ),
    },
    { name: 'React Jest', icon: <JestPlain size={60} /> },
    { name: 'Cypress', icon: <CypressioOriginal size={60} /> },
  ],
  [
    { name: 'Docker', icon: <DockerOriginal size={60} /> },
    { name: 'Github Actions', icon: <GithubactionsOriginal size={60} /> },
  ],
];

const MOBILE_SKILLS_ARRAY = DESKTOP_SKILLS_ARRAY.flat().reduce(
  (acc: any[], skill: any, index: number) => {
    if (index % 2 === 0) {
      acc.push([skill]);
    } else {
      acc[acc.length - 1].push(skill);
    }
    return acc;
  },
  [],
);

const ItemElement = ({
  skillName,
  icon,
}: {
  skillName: string;
  icon: React.ReactElement;
}) => {
  return (
    <motion.div
      style={{
        width: 170,
        height: 170,
        backgroundColor: grey[0],
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: grey[1],
        cursor: 'pointer',
        gap: 5,
      }}
      whileHover={{ backgroundColor: blue[0], scale: 1.1 }}
    >
      <Flex>{icon}</Flex>
      <Flex align="flex-end" style={{ height: 50 }}>
        <Typography.Text
          style={{
            color: 'inherit',
            fontSize: 18,
            fontWeight: 500,
            whiteSpace: 'wrap',
            textAlign: 'center',
          }}
        >
          {skillName}
        </Typography.Text>
      </Flex>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { isMobileScreenSize } = useUtilityContext();

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        backgroundColor: blue[1],
        width: '120%',
        transform: 'translateX(-8%)',
        paddingTop: 50,
        paddingBottom: 50,
      }}
      gap={20}
    >
      <Flex
        vertical
        align="center"
        justify="center"
        gap={5}
        style={{ width: 300 }}
      >
        <Typography.Text
          style={{
            fontWeight: 400,
            fontSize: 18,
            color: grey[0],
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          I'm open to learn anything <br />
          but here are some of
        </Typography.Text>
        <Typography.Text
          style={{
            fontWeight: 600,
            fontSize: isMobileScreenSize ? 40 : 50,
            color: grey[0],
            lineHeight: 1.2,
          }}
        >
          My Skills
        </Typography.Text>
      </Flex>
      {isMobileScreenSize ? (
        <Flex vertical justify="center" align="center" gap={24}>
          {MOBILE_SKILLS_ARRAY.map((row, index) => (
            <Row key={index} gutter={[16, 0]}>
              {row.map((skill: any, index: number) => (
                <Col key={index} md={12} xl={24 / row.length}>
                  <ItemElement
                    key={skill.name}
                    skillName={skill.name}
                    icon={skill.icon}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Flex>
      ) : (
        <Flex vertical justify="center" align="center" gap={24}>
          {DESKTOP_SKILLS_ARRAY.map((row, index) => (
            <Row key={index} gutter={[20, 20]}>
              {row.map((skill: any, index: number) => (
                <Col key={index} md={12} xl={24 / row.length}>
                  <ItemElement
                    key={skill.name}
                    skillName={skill.name}
                    icon={skill.icon}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default SkillsSection;
