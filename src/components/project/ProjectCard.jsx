import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import Badge from '../ui/Badge';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 backdrop-blur text-white text-xs font-semibold rounded-full">
            Destacado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-8">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <Badge key={tech} color="blue" variant="default">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge color="purple" variant="default">
              +{project.tech.length - 3}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to={`/project/${project.id}`}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
          >
            Ver Detalles
            <ExternalLink size={16} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors duration-300 flex items-center justify-center"
              aria-label="Ver en GitHub"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;