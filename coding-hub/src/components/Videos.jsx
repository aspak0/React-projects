import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://assets.mixkit.co/videos/preview/mixkit-woman-typing-on-her-laptop-in-a-coffee-shop-206-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-professional-programmer-working-on-a-big-computer-41642-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-successful-hacker-finishing-programming-29903-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-programmer-using-his-cell-phone-while-working-at-his-desk-41638-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-while-drinks-coffee-1730-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-office-workers-hands-typing-on-their-devices-4835-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-computer-code-running-on-a-screen-10325-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-young-creatives-making-working-on-video-editing-23148-large.mp4',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} p={'.5rem'} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>
            <u>Tech Videos</u>
          </Heading>
          <Text>
            <strong>Technology </strong>is the application of knowledge for
            achieving practical goals in a reproducible way.The word technology
            can also mean the products resulting from such efforts, and
            intangible ones such as <em>software.</em>
            <br />
            <strong>Computer programmers</strong> write, modify, and test code
            and scripts that allow computer software and applications to
            function properly. They turn the designs created by software
            developers and engineers into instructions that a computer can
            follow.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
