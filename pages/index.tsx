import { Box, Heading, Stack, Text } from '@chakra-ui/react';
const Home = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <Heading fontWeight={300}>About</Heading>

        <Text>
          Hello! My name is Eddrich Janzzen Ang, but you can call me Janzzen. I
          am a software engineer who loves to code, read books, and explore new
          technologies. I also enjoy spending time around nature because it's a
          nice opportunity to unwind, destress, and clear my mind.
        </Text>

        <Heading fontWeight={300}>Experience</Heading>
        <Text>
          As a developer, I have experience working with different technology
          platforms such as Web Apps, Databases, and Cloud providers. I have
          experience using different application development frameworks such as
          Django, Flask and .NET.
        </Text>

        <Text>
          For frontend development, I have used frameworks such as React, React
          Native, Vue.js, and Nextjs to develop simple user interfaces.
        </Text>

        <Text>
          One aspect of software engineering I am very passionate about is
          DevOps. I enjoy building pipelines and automating tasks in order to
          speed up development and alleviate the bottle necks.
        </Text>

        <Heading fontWeight={300}>Technologies</Heading>

        <Text>
          React, React Native, Nextjs, Python, Java, Javascript, HTML, CSS, C#,
          C++, .NET Core, Vue.js, Django, Flask, Google Cloud Platform,
          Kubernetes, Docker, Amazon Web Services, Microsoft Azure, Azure
          DevOps, MySql, MongoDB, git, Apache Kafka, Redis, Elastic Search,
          Nginx, Terraform
        </Text>
      </Stack>
    </Box>
  );
};

export default Home;
