import {
  Box,
  Grid,
  GridItem,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import ProjectCard from '../../components/modules/project/ProjectCard';
import Project from '../../interfaces/Project.interface';
import { getAllProjects } from '../../lib/projects.api';

export interface IProjectPageProps {
  projects: Project[];
}
const ProjectsPage = ({ projects }: IProjectPageProps) => {
  const isTablet = useBreakpointValue({ base: true, lg: false });

  return (
    <Box>
      <Heading>Projects</Heading>
      <Grid
        gridTemplateRows={'repeat(auto-fill, 1fr)'}
        gridTemplateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
        pt={4}
      >
        {projects.map((project) => (
          <GridItem pl="2" key={project.title}>
            <ProjectCard project={project} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    'title',
    'author',
    'date',
    'category',
    'tags',
    'description',
    'content',
    'slug',
    'project_url',
    'image',
  ]);

  return {
    props: { projects },
  };
};
