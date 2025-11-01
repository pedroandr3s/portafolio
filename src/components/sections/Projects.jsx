import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectGrid from '../project/ProjectGrid';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="min-h-screen py-32 px-6 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Una selección de mis trabajos más recientes, donde combino creatividad y código para crear soluciones efectivas">
          Proyectos Destacados
        </SectionTitle>

        <ProjectGrid projects={projects} showAll={showAll} />

        {/* Show More Button */}
        {!showAll && projects.length > projects.filter(p => p.featured).length && (
          <div className="flex justify-center mt-12">
            <Button
              variant="secondary"
              onClick={() => setShowAll(true)}
            >
              Ver Todos los Proyectos ({projects.length})
            </Button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-12">
            <Button
              variant="ghost"
              onClick={() => setShowAll(false)}
            >
              Mostrar Menos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;