import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';
import CustomLink from '../common/CustomLink';
import NavLink from '../common/NavLink';
import NavItems from '../constants/navbar.contants';

const Footer = () => {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        position={'fixed'}
        right={0}
        bottom={0}
        left={0}
        py={2}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Flex alignItems={'center'}>
            {NavItems.map((navItem) => (
              <NavLink
                href={navItem.href}
                key={navItem.title}
                target={navItem.target || ''}
              >
                {navItem.title}
              </NavLink>
            ))}
          </Flex>
          <Flex justifyContent={'center'} py={2}>
            <NextImage
              src="/assets/images/me.jpg"
              width={45}
              height={45}
              alt={'janzzen'}
              style={{
                borderRadius: '50%',
                height: '45px',
                objectFit: 'cover',
              }}
            />
          </Flex>
          <Flex justifyContent={'center'}>
            <Text fontSize={'sm'}>
              Developed by{' '}
              <CustomLink
                href="https://github.com/eddrichjanzzen"
                target="_blank"
              >
                Janzzen Ang{' '}
              </CustomLink>
              powered by <CustomLink href="#">Vercel</CustomLink>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
