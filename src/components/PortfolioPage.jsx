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
          <p className="text-xl text-gray-400">Desarrollador Web | Estudiante de Ingeniería en Informática | Creativo</p>
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
            Soy un desarrollador web en formación, con experiencia en el desarrollo frontend utilizando React, junto con tecnologías como Next.js, 
            Tailwind CSS y TypeScript. Me apasiona construir interfaces dinámicas y responsivas, mejorar el rendimiento de las aplicaciones y 
            ofrecer experiencias de usuario intuitivas. Además, tengo un interés especial en la minería de datos, la ciberseguridad y el diseño UX.
          </p>
          <p className="text-gray-300">
            Con varios certificados en áreas relacionadas con desarrollo web y metodologías ágiles, siempre busco aprender y crecer profesionalmente. 
            Mi enfoque está en construir soluciones eficientes y accesibles, con una mentalidad orientada al detalle, la mejora continua y pensar fuera 
            de la caja, manteniendo un equilibrio entre la tecnología y el liderazgo en cada proyecto que realizo.
          </p>

            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Habilidades</h3>
              <div className="space-y-2">
                {['Backend', 'Front-end', 'Innovación', 'Creatividad', 'Team Work'].map((skill, index) => (
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
            {[
              {
                title: 'FinUp Actualizado',
                description: 'Versión mejorada...',
                tech: ['Html', 'CSS', 'JavaScript'],
                image: '/portafolio/p1.webp',
                id: 'finup'
              },
              {
                title: 'Sushiryl',
                description: 'Aplicación web...',
                tech: ['Html', 'Css', 'Javascript'],
                image: '/portafolio/p2.webp',
                id: 'sushiryl'
              },
              {
                title: 'Este Portafolio',
                description: 'Portafolio personal...',
                tech: ['React', 'Tailwind CSS', 'Vite'],
                image: '/portafolio/p3.webp',
                id: 'portfolio'
              },
              {
                title: 'Balance',
                description: 'Balance de ingresos y egresos...',
                tech: ['React', 'Firebase', 'Vite'],
                image: '/portafolio/p4.png  ',
                id: 'balance'
              }
              ,
              {
                title: 'Contabilidad',
                description: 'Registro contable ...',
                tech: ['React', 'Firebase', 'Creatividad'],
                image: '/portafolio/p5.png  ',
                id: 'contabilidad'
              }
            ].map((project, index) => (
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

      {/* Cursos y Certificados */}
      <section className="min-h-screen py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Cursos y Certificados</h2>
          <div className="space-y-8">
            {[
              {
                title: 'MEAN Stack Developer',
                institution: 'EDUBCA',
                description: 'Curso enfocado en el desarrollo full-stack utilizando MongoDB, ExpressJS, Angular y NodeJS.',
                skills: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS', 'Full-stack'],
                link: 'https://coursera.org/verify/specialization/CH3KJ8CL035H'
              },
              {
                title: 'HTML, CSS, and Javascript for Web Developers',
                institution: 'Johns Hopkins University',
                description: 'Curso completo sobre desarrollo web con HTML, CSS y JavaScript, enfocado en la creación de aplicaciones dinámicas.',
                skills: ['HTML', 'CSS', 'JavaScript', 'Aplicaciones Web'],
                link: 'https://coursera.org/verify/2T0GL9G571R4'
              },
              {
                title: 'Introduction to HTML, CSS, & JavaScript',
                institution: 'IBM',
                description: 'Curso básico que cubre los fundamentos del desarrollo web con HTML, CSS y JavaScript.',
                skills: ['HTML', 'CSS', 'JavaScript', 'Desarrollo Web'],
                link: 'https://coursera.org/verify/H6DO8IYT8OCX'
              },
              {
                title: 'Angular Fundamentals: Building Responsive Web Apps with Ease',
                institution: 'EDUBCA',
                description: 'Curso sobre los fundamentos de Angular para construir aplicaciones web responsivas.',
                skills: ['Angular', 'Web Development'],
                link: 'https://coursera.org/verify/TD068QQWSSVM'
              },
              {
                title: 'Introduction to CSS3',
                institution: 'Johns Hopkins University',
                description: 'Curso especializado en las nuevas funcionalidades de CSS3, incluyendo transiciones, animaciones y diseño responsivo.',
                skills: ['CSS3', 'Animaciones', 'Responsive Design'],
                link: 'https://coursera.org/verify/IYQXAJJFJ8Y8'
              },
              {
                title: 'Python for Data Science, AI & Development',
                institution: 'IBM',
                description: 'Curso sobre el uso de Python en ciencia de datos, desarrollo de inteligencia artificial y aplicaciones de machine learning.',
                skills: ['Python', 'Data Science', 'AI', 'Machine Learning'],
                link: 'https://coursera.org/verify/7HT1WJ7YBN58'
              },
              {
                title: 'Scrum Master Certification',
                institution: 'LearnQuest',
                description: 'Certificación de Scrum Master, cubriendo los principios y la implementación de Scrum.',
                skills: ['Scrum', 'Gestión de proyectos', 'Metodologías Ágiles'],
                link: 'https://coursera.org/verify/specialization/K8QEZC1D01PR'
              },
              {
                title: 'Google Cybersecurity',
                institution: 'Google',
                description: 'Certificación profesional sobre ciberseguridad, cubriendo conceptos esenciales como análisis de riesgos, ataques y defensas.',
                skills: ['Ciberseguridad', 'Análisis de Riesgos', 'Seguridad de Redes'],
                link: 'https://coursera.org/verify/professional-cert/32R6N67N0Q87'
              },
              {
                title: 'Tools of the Trade: Linux and SQL',
                institution: 'Google',
                description: 'Curso sobre el uso de herramientas esenciales como Linux y SQL para el desarrollo y administración de sistemas.',
                skills: ['Linux', 'SQL', 'Sistemas'],
                link: 'https://coursera.org/verify/XJ0PPSVDBBVP'
              },
              {
                title: 'Temas avanzados de MySQL',
                institution: 'Meta',
                description: 'Curso avanzado que aborda temas complejos de MySQL, incluyendo índices, procedimientos almacenados y optimización de consultas.',
                skills: ['MySQL', 'Base de Datos', 'Optimización'],
                link: 'https://coursera.org/verify/3SDQZMIBK9WI'
              },
              {
                title: 'Introduction to Artificial Intelligence (AI)',
                institution: 'IBM',
                description: 'Introducción a los fundamentos de la inteligencia artificial, sus aplicaciones y principales algoritmos.',
                skills: ['AI', 'Machine Learning', 'Deep Learning'],
                link: 'https://coursera.org/verify/OIIZJ17S5NL6'
              },
              {
                title: 'Foundations of Digital Marketing and E-commerce',
                institution: 'Google',
                description: 'Curso sobre los fundamentos del marketing digital y el comercio electrónico, incluyendo SEO, SEM y análisis de datos.',
                skills: ['Marketing Digital', 'E-commerce', 'SEO', 'SEM'],
                link: 'https://coursera.org/verify/QTUVMIWHGOX3'
              },
              {
                title: 'Liderazgo y Desarrollo Personal',
                institution: 'Universidad de Palermo',
                description: 'Curso sobre técnicas de liderazgo, comunicación efectiva y desarrollo de habilidades personales.',
                skills: ['Liderazgo', 'Comunicación', 'Desarrollo Personal'],
                link: 'https://coursera.org/verify/KNFYSAZ9G0IM'
              },
              {
                title: 'Ethical Hacker',
                institution: 'Cisco',
                description: 'Certificación sobre técnicas y herramientas de hacking ético para garantizar la seguridad de sistemas y redes.',
                skills: ['Hacking Ético', 'Seguridad Informática', 'Redes'],
                link: 'https://www.credly.com/badges/d5470897-6cf1-4249-875b-5415212ff175/print'
              },
              {
                title: 'Introduction to Medical Software',
                institution: 'Yale',
                description: 'Introducción al desarrollo y validación de software médico, incluyendo estándares de la industria y requisitos regulatorios.',
                skills: ['Desarrollo de Software', 'Regulación Médica', 'Validación'],
                link: 'https://coursera.org/verify/U5SF1UADDO96'
              }
            ].map((cert, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                  calculateTransform(1200 + index * 100) > 0.3 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[-100px] opacity-0'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-blue-400 mb-4">{cert.institution}</p>
                <p className="text-gray-300 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"                  >
                    Ver Certificado
                  </a>
                )}
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