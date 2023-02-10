import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  CardFooter,
  Divider,
} from '@chakra-ui/react';
import Project from '../../interfaces/Project.interface';
import ButtonLink from '../common/ButtonLink';
import CustomImage from '../common/CustomImage';

export interface IProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <Card maxW="lg" variant="outline" minH="xl">
      <CardBody>
        <CustomImage src={project.image} fill alt="project-image" />
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
