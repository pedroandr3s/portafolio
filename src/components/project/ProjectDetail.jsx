import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Code2, Rocket, Lightbulb, Zap } from 'lucide-react';
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

  // Parse fullDescription into sections
  const parseDescription = (description) => {
    const sections = description.split('\n\n');
    const parsed = {
      intro: [],
      features: [],
      challenges: [],
      technologies: []
    };

    let currentSection = 'intro';

    sections.forEach(section => {
      const trimmed = section.trim();
      if (trimmed.toLowerCase().includes('características principales:') ||
          trimmed.toLowerCase().includes('características:')) {
        currentSection = 'features';
      } else if (trimmed.toLowerCase().includes('desafíos técnicos:') ||
                 trimmed.toLowerCase().includes('desafíos:')) {
        currentSection = 'challenges';
      } else if (trimmed.toLowerCase().includes('tecnologías utilizadas:') ||
                 trimmed.toLowerCase().includes('tecnologías:')) {
        currentSection = 'technologies';
      } else if (trimmed && !trimmed.includes(':') ||
                 (trimmed.includes(':') && currentSection === 'intro')) {
        parsed[currentSection].push(trimmed);
      } else if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
        parsed[currentSection].push(trimmed);
      }
    });

    return parsed;
  };

  const content = parseDescription(project.fullDescription);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r ${project.gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse`} />
        <div className={`absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-l ${project.gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 lg:mb-12 transition-all duration-300 group bg-slate-900/30 backdrop-blur px-4 py-2 rounded-lg border border-slate-800 hover:border-slate-600"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Volver</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Project Info */}
          <div className="space-y-8">
            {/* Project Header */}
            <div>
              <div className="inline-block mb-4">
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-blue-500/30`}>
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Proyecto Destacado
                  </span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                {project.title}
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-blue-400" size={20} />
                <h3 className="text-lg font-bold text-white">Stack Tecnológico</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={tech}
                    color="blue"
                    variant="pill"
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {(project.github || project.pdf) && (
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Button
                    variant="primary"
                    href={project.github}
                    icon={<Code2 size={20} />}
                    className="flex-1 sm:flex-none"
                  >
                    Ver en GitHub
                  </Button>
                )}
                {project.pdf && (
                  <Button
                    variant="secondary"
                    href={project.pdf}
                    icon={<FileText size={20} />}
                    className="flex-1 sm:flex-none"
                  >
                    Ver PDF
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Project Image */}
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000`} />
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group-hover:border-slate-700 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </div>
          </div>
        </div>

        {/* Project Description Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          {content.intro.length > 0 && (
            <div className="bg-slate-900/30 backdrop-blur border border-slate-800 rounded-2xl p-8 lg:p-10 hover:border-slate-700 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <Rocket className="text-blue-400" size={28} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Sobre el Proyecto
                </h2>
              </div>
              <div className="space-y-6">
                {content.intro.map((paragraph, index) => {
                  // Check if paragraph contains numbered sections or special formatting
                  const hasNumbering = /^\d+\./.test(paragraph);
                  const isSectionTitle = paragraph.includes(':') && paragraph.split(':')[1].trim() === '';

                  if (isSectionTitle) {
                    return (
                      <h3 key={index} className="text-xl lg:text-2xl font-bold text-blue-400 mt-8 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
                        {paragraph.replace(':', '')}
                      </h3>
                    );
                  }

                  if (hasNumbering) {
                    const [number, ...rest] = paragraph.split(/\.\s+/);
                    const text = rest.join('. ');
                    return (
                      <div key={index} className="flex gap-4 group/item">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center font-bold text-white shadow-lg group-hover/item:scale-110 transition-transform`}>
                          {number}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-300 leading-relaxed text-base lg:text-lg group-hover/item:text-gray-100 transition-colors">
                            {text}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p key={index} className="text-gray-300 leading-relaxed text-base lg:text-lg pl-2 border-l-2 border-slate-700 hover:border-blue-500/50 hover:text-gray-100 transition-all duration-300 py-1">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Features and Challenges Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            {content.features.length > 0 && (
              <div className="bg-slate-900/30 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                    <Zap className="text-green-400" size={24} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold">Características</h2>
                </div>
                <ul className="space-y-3">
                  {content.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-300 leading-relaxed flex items-start gap-3 group/item hover:text-white transition-colors"
                    >
                      <span className="text-green-400 mt-1 flex-shrink-0">▸</span>
                      <span>{feature.replace(/^[•\-]\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {content.challenges.length > 0 && (
              <div className="bg-slate-900/30 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all">
                    <Lightbulb className="text-orange-400" size={24} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold">Desafíos Técnicos</h2>
                </div>
                <ul className="space-y-3">
                  {content.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="text-gray-300 leading-relaxed flex items-start gap-3 group/item hover:text-white transition-colors"
                    >
                      <span className="text-orange-400 mt-1 flex-shrink-0">▸</span>
                      <span>{challenge.replace(/^[•\-]\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Technologies Used */}
          {content.technologies.length > 0 && (
            <div className="bg-slate-900/30 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Code2 className="text-purple-400" size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">Tecnologías Utilizadas</h2>
              </div>
              <ul className="space-y-3 grid md:grid-cols-2 gap-3">
                {content.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="text-gray-300 leading-relaxed flex items-start gap-3 group/item hover:text-white transition-colors"
                  >
                    <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                    <span>{tech.replace(/^[•\-]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {(project.github || project.pdf) && (
          <div className="mt-16 text-center">
            <div className="inline-block bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">¿Te interesa este proyecto?</h3>
              <p className="text-gray-400 mb-6">Explora el código y descubre cómo fue construido</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.github && (
                  <Button
                    variant="primary"
                    href={project.github}
                    icon={<Code2 size={20} />}
                  >
                    Ver Repositorio
                  </Button>
                )}
                {project.pdf && (
                  <Button
                    variant="secondary"
                    href={project.pdf}
                    icon={<FileText size={20} />}
                  >
                    Documentación
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;