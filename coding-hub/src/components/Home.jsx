import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/dev3.jpg';
import img2 from '../assets/devoloper.jpg';
import img3 from '../assets/coding2.jpg';
import img4 from '../assets/coding1.jpg';
import img5 from '../assets/devpng2.png';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-90deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            padding={['4', '16']}
            textAlign={'center'}
          >
            Coding and programming are becoming more and more popular amongst
            children the world over. Programming is now a popular past time,
            with many kids being introduced to coding through games and
            platforms such as Minecraft and Roblox. Parents and schools are also
            increasing their attention on the subject, as coding is so relevant
            to kids’ futures. With dedication and education, children can learn
            how to code which still having fun. For example, FunTech offer a
            range of virtual courses aimed at kids. It’s the fun elements that
            make coding and programming appealing to kids. Harnessing those
            elements is key to encouraging them.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
        Future Tech.
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOption}>
        Future is Coding.
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
        Code can't lie.
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.800'} color={'white'} {...headingOption}>
        Code like a devil.
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
