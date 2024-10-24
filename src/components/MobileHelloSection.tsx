import React from 'react';
import { Button, Flex, Typography } from 'antd';
import { blue, grey } from '../../colors';
import { HELLO_SECTION_IMAGE_URL } from '../constants';

export const MobileHelloSection: React.FC = () => {
  return (
    <Flex
      vertical
      id="about"
      justify="center"
      align="space-between"
      style={{ marginTop: 30 }}
      gap={15}
    >
      <Flex align="center" justify="center">
        <img
          style={{
            height: 350,
            width: 350,
            borderRadius: '50%',
            borderWidth: '1px',
            borderColor: '#F2F2F2',
            borderStyle: 'solid',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
          src={HELLO_SECTION_IMAGE_URL}
          alt="hello-section"
        />
      </Flex>
      <Flex vertical align="center" gap={30}>
        <Flex
          vertical
          style={{
            maxWidth: 600,
          }}
          gap={15}
        >
          <Typography.Text
            style={{
              fontWeight: 500,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            Welcome to my Portfolio
          </Typography.Text>
          <Flex vertical>
            <Typography.Text
              style={{
                fontSize: 50,
                fontWeight: 600,
                lineHeight: 1.1,
                textAlign: 'center',
              }}
            >
              Hi I'm
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: 50,
                fontWeight: 600,
                lineHeight: 1.1,
                color: blue[1],
                textAlign: 'center',
              }}
            >
              Pawel
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: 50,
                fontWeight: 600,
                lineHeight: 1.1,
                textAlign: 'center',
              }}
            >
              Software Developer
            </Typography.Text>
          </Flex>
          <Typography.Text
            style={{
              fontSize: 20,
              fontWeight: 200,
              textAlign: 'center',
            }}
          >
            Colaborating with highly skilled individuals, our agency delivers
            top-quality services.
          </Typography.Text>
        </Flex>
        <Flex vertical align="center" justify="flex-start" gap={15}>
          <Button
            style={{
              height: 50,
              borderRadius: 50,
              backgroundColor: blue[1],
              width: '100%',
            }}
          >
            <Typography.Text
              style={{
                color: grey[0],
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: 1.2,
              }}
            >
              Hire Me!
            </Typography.Text>
          </Button>
          <Button
            style={{
              height: 50,
              width: '100%',
              borderRadius: 50,
              borderColor: blue[1],
            }}
          >
            <Typography.Text
              style={{
                color: blue[1],
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: 1.2,
              }}
            >
              Download CV
            </Typography.Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
