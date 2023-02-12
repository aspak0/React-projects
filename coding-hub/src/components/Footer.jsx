import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Get in Touch
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'cyan'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Coding-Hub
          </Heading>
          <Text>@All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Follow Us
          </Heading>
          <Button variant={'link'} colorScheme={'red'}>
            <a
              target={'blank'}
              href="https://www.youtube.com/channel/UCVJ9nZ0dFOCGUh-5cd86SMg"
            >
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'linkedin'}>
            <a
              target={'blank'}
              href="https://www.linkedin.com/in/aspak-279142227/"
            >
              Linkedin
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'gray'}>
            <a target={'blank'} href="https://github.com/aspak0">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
