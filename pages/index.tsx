import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import CustomLink from '../components/common/CustomLink';
import PolyTree from '../components/common/PolyTree';
import ThreeCanvas from '../components/layout/ThreeCanvas';
const Home = () => {
  return (
    <Box>
      <Box>
        <Stack spacing={4}>
          <Heading fontWeight={300}>About Me</Heading>
          <Text>
            Hey there! I'm Janzzen. 👋 I'm a software engineer who loves to get
            creative with code and is always on the lookout for the latest and
            greatest technologies. When I'm not staring at a computer screen,
            you can find me outside soaking up nature 🌲. It's the perfect
            escape from the tech world and helps me recharge.
          </Text>
          <ThreeCanvas>
            <PolyTree />
          </ThreeCanvas>
          <Text>
            I've had the opportunity to work with a variety of tech platforms,
            💻 from web apps to databases and cloud providers. I've used
            development frameworks such as{' '}
            <CustomLink href="https://www.djangoproject.com/">
              Django
            </CustomLink>
            ,{' '}
            <CustomLink href="https://flask.palletsprojects.com/en/2.2.x/">
              Flask
            </CustomLink>
            , and{' '}
            <CustomLink href="https://dotnet.microsoft.com/en-us/">
              .NET
            </CustomLink>{' '}
            to bring my ideas to life. On the frontend, I've worked with
            frameworks like{' '}
            <CustomLink href="https://reactjs.org/">React</CustomLink>,{' '}
            <CustomLink href="https://vuejs.org/">Vue.js</CustomLink>, and{' '}
            <CustomLink href="https://nextjs.org/">Nextjs</CustomLink> to create
            user-friendly interfaces.
          </Text>
          <Text>
            One of my favorite parts of being a software engineer is DevOps. 👨‍💻
            I get a thrill out of building 👷 pipelines and automating tasks to
            make development smoother and faster.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
