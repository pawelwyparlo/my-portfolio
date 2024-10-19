import React from 'react';
import { Button, Flex, Typography } from 'antd';
import { blue, grey } from '../../colors';
import { motion } from 'framer-motion';

export const DesktopHelloSection: React.FC = () => {
  return (
    <Flex
      id="about"
      justify="space-between"
      align="center"
      style={{ height: 727 }}
    >
      <Flex vertical gap={50}>
        <Flex
          vertical
          style={{
            maxWidth: 600,
          }}
        >
          <Typography.Text
            style={{
              fontWeight: 500,
              fontSize: 25,
            }}
          >
            Welcome to my Portfolio
          </Typography.Text>
          <Typography.Text
            style={{ fontSize: 60, fontWeight: 600, lineHeight: 1.2 }}
          >
            Hi I'm
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 70,
              fontWeight: 600,
              lineHeight: 1.2,
              color: blue[1],
            }}
          >
            Pawel
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 60,
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Software Developer
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 25,
              fontWeight: 200,
            }}
          >
            Colaborating with highly skilled individuals, our agency delivers
            top-quality services.
          </Typography.Text>
        </Flex>
        <Flex align="center" justify="flex-start" gap={30}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              style={{
                height: 50,
                width: 160,
                borderRadius: 50,
                backgroundColor: blue[1],
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
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              style={{
                height: 50,
                width: 250,
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
          </motion.div>
        </Flex>
      </Flex>
      <Flex>
        <img
          style={{
            height: 553,
            width: 553,
            borderRadius: '50%',
            borderWidth: '1px',
            borderColor: '#F2F2F2',
            borderStyle: 'solid',
          }}
          src="https://media.canva.com/v2/image-resize/format:PNG/height:1080/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FUkJfM%2FMAGUCsUkJfM%2F1%2Fp.png/watermark:F/width:1080?csig=AAAAAAAAAAAAAAAAAAAAAO8CWbXzaOIdNoaG7HvGgmqpMxDraDbGHz98wSoaaj8i&exp=1729378674&osig=AAAAAAAAAAAAAAAAAAAAAAgGcxL6JFatxweWjgUk4gLfwB4TU-lKP523A-XGEZVB&signer=media-rpc&x-canva-quality=screen_2x"
        />
      </Flex>
    </Flex>
  );
};
