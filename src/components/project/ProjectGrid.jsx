import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, showAll = false }) => {
  const displayProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {displayProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;