import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  CardFooter,
  Divider,
  Box,
  Image,
} from '@chakra-ui/react';
import Project from '../../interfaces/Project.interface';
import ButtonLink from '../common/ButtonLink';
// import Image from 'next/image';

export interface IProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <Card maxW="lg" variant="outline" minH="xl">
      <CardBody>
        <Box style={{ position: 'relative' }}>
          <Image
            src={project.image}
            style={{ objectFit: 'contain' }}
            alt="project-image"
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md" color="teal.500">
            {project.title}
          </Heading>
          <Text fontSize={12}>{project.content}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <ButtonLink
            variant="solid"
            colorScheme="teal"
            href={project.project_url}
            title={'See more'}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
