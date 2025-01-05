import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTransform = (offset) => {
    return Math.max(0, Math.min(1, (scrollY - offset) / 400));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center relative">
        <div className={`transform transition-all duration-1000 ${
          scrollY > 100 ? 'translate-y-[-50px] opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <h1 className="text-6xl font-bold mb-4">Pedro Vera</h1>
          <p className="text-xl text-gray-400">Desarrollador Web | Diseñador UX | Creativo</p>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={40} />
        </div>
      </header>

      {/* Sobre Mí */}
      <section className="min-h-screen flex items-center py-20 px-8">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
          calculateTransform(300) > 0.3 ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
        }`}>
          <h2 className="text-4xl font-bold mb-8">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
              Soy un desarrollador web en formación, con experiencia en el desarrollo full-stack utilizando tecnologías como MongoDB, Express,
               Angular, Node.js (MEAN Stack) y React. Me motiva resolver problemas complejos, crear interfaces intuitivas y optimizar la
                experiencia del usuario. Además, tengo un interés especial en la minería de datos, la ciberseguridad y el diseño UX.
              </p>
              <p className="text-gray-300">
              Con varios certificados en áreas relacionadas con desarrollo web y metodologías ágiles, siempre busco aprender y crecer 
                profesionalmente. Mi enfoque está en construir soluciones eficientes y accesibles, con una mentalidad orientada al detalle, 
                la mejora continua y pensar fuera de la caja manteniendo un equilibrio entre la tecnología y el liderazgo en cada proyecto que realizo.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Habilidades</h3>
            <div className="space-y-2">
                {['Backend', 'Front-end', 'Innovación', 'Creatividad', 'Liderazgo'].map((skill, index) => (
                <div key={skill} className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{
                        width: [
                            '75%', // Backend
                            '85%', // Front-end
                            '80%', // Innovación
                            '95%', // Creatividad
                            '90%'  // Liderazgo
                        ][index]
                        }}
                    ></div>
                    </div>
                    <span className="ml-2 min-w-[100px]">{skill}</span>
                </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
    <section className="min-h-screen py-20 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
                title: 'FinUp Actualizado',
                description: 'Versión mejorada...',
                tech: ['Html', 'CSS', 'JavaScript'],
                image: '/p1.png',
                id: 'finup'
            },
            {
                title: 'Sushiryl',
                description: 'Aplicación web...',
                tech: ['Html', 'Css', 'Javascript'],
                image: '/p2.png',
                id: 'sushiryl'
            },
            {
                title: 'Este Portafolio',
                description: 'Portafolio personal...',
                tech: ['React', 'Tailwind CSS', 'Vercel'],
                image: '/p3.png',
                id: 'portafolio'
            }].map((project, index) => (
                <div 
                key={index}
                className={`bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all duration-1000 ${
                    calculateTransform(800) > 0.3 ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
                }`}
                >
                <div className="h-48 bg-gray-700 overflow-hidden">
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                        {tech}
                        </span>
                    ))}
                    </div>
                    <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
                    Ver informe
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Contacto */}
<section className="min-h-screen flex items-center py-20 px-8">
  <div className={`max-w-4xl mx-auto w-full transform transition-all duration-1000 ${
    calculateTransform(1500) > 0.3 ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
  }`}>
    <h2 className="text-4xl font-bold mb-12 text-center">Contacto</h2>
    <div className="flex justify-center space-x-8">
      <a 
        href="https://github.com/pedroandr3s" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-blue-500 transition-colors"
      >
        <Github size={32} />
      </a>
      <a 
        href="https://www.linkedin.com/in/pedro-vera-5009a2283/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-blue-500 transition-colors"
      >
        <Linkedin size={32} />
      </a>
      <a 
        href="mailto:pedroverareal@gmail.com" 
        className="hover:text-blue-500 transition-colors"
      >
        <Mail size={32} />
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default PortfolioPage;