import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, FileText } from 'lucide-react';
import { projects } from '../../data/projects';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <Badge key={tech} color="blue" variant="pill">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <Button
                variant="primary"
                href={project.github}
                icon={<Github size={20} />}
              >
                Ver en GitHub
              </Button>
            )}
            {project.pdf && (
              <Button
                variant="secondary"
                href={project.pdf}
                icon={<FileText size={20} />}
              >
                Ver PDF
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-slate-800 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Description */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">Sobre el Proyecto</h2>
          <div className="prose prose-invert max-w-none">
            {project.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;