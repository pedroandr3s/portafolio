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
<section className="min-h-screen flex items-center py-20 px-8 overflow-hidden">
  <div className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
    calculateTransform(300) > 0.3 ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
  }`}>
    <h2 className="text-4xl font-bold mb-8 relative">
      Sobre Mí
      <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <p className="text-gray-300 relative z-10 backdrop-blur-sm p-4 rounded-lg border border-gray-700 bg-gray-800/70">
          <span className="text-blue-400 font-mono">&lt;developer&gt;</span><br/>
          Soy un desarrollador web en formación, con experiencia en el desarrollo frontend utilizando <span className="text-yellow-400">React</span>, junto con tecnologías como <span className="text-green-400">Next.js</span>, 
          <span className="text-blue-500">Tailwind CSS</span> y <span className="text-blue-400">TypeScript</span>. Me apasiona construir interfaces dinámicas y responsivas, mejorar el rendimiento de las aplicaciones y 
          ofrecer experiencias de usuario intuitivas. Además, tengo un interés especial en la minería de datos, la ciberseguridad y el diseño UX.
          <br/><span className="text-blue-400 font-mono">&lt;/developer&gt;</span>
        </p>
        
        <div className="flex flex-wrap gap-2 my-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind', 'Next.js', 'Firebase', 'Git'].map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm transform transition-transform hover:scale-110 hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 relative z-10 backdrop-blur-sm p-4 rounded-lg border border-gray-700 bg-gray-800/70">
          <span className="text-purple-400 font-mono">&lt;mindset&gt;</span><br/>
          Con varios certificados en áreas relacionadas con desarrollo web y metodologías ágiles, siempre busco aprender y crecer profesionalmente. 
          Mi enfoque está en construir soluciones eficientes y accesibles, con una mentalidad orientada al detalle, la mejora continua y pensar fuera 
          de la caja, manteniendo un equilibrio entre la tecnología y el liderazgo en cada proyecto que realizo.
          <br/><span className="text-purple-400 font-mono">&lt;/mindset&gt;</span>
        </p>
      </div>
      
      <div className="flex flex-col justify-center items-center relative">
        {/* Elementos decorativos que representan código */}
        <div className="absolute opacity-20 top-0 left-0 text-xs text-blue-500 font-mono overflow-hidden h-full w-full">
          {'const Developer = () => {'}<br/>
          {'  const [skills] = useState([]);'}<br/>
          {'  useEffect(() => {'}<br/>
          {'    // Siempre aprendiendo'}<br/>
          {'    learnNewSkills();'}<br/>
          {'  }, []);'}<br/>
          {'  return <CreativeSolutions />;'}<br/>
          {'};'}
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-blue-600 transform hover:rotate-2 transition-all duration-500 relative z-10">
          <div className="absolute -top-4 -left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-md z-20 transform rotate-12">
            ./yo.jpg
          </div>
          <img 
            src="./yo.jpg" 
            alt="Pedro Vera" 
            className="w-full h-auto object-cover transform transition-all duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-center font-mono text-sm">
              <span className="text-yellow-400">function</span> <span className="text-green-400">creativeDeveloper</span>() &#123; <span className="text-purple-400">return</span> <span className="text-blue-400">true</span>; &#125;
            </p>
          </div>
        </div>
        
        {/* Terminal effect */}
        <div className="mt-6 w-full max-w-md bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
          <div className="bg-gray-800 p-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-400 ml-2">terminal</span>
          </div>
          <div className="p-3 font-mono text-xs text-green-400">
            <p>{`> Pedro.getExpertise()`}</p>
            <p className="text-white">{`["Frontend", "UX/UI", "Web Development", "ReactJS"]`}</p>
            <p>{`> Pedro.isLearning()`}</p>
            <p className="text-white">true <span className="animate-pulse">_</span></p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Visual programming stats */}
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
  {[
    { label: 'Proyectos', value: '5+' },
    { label: 'Tecnologías', value: '4+' },
    { label: 'Certificados', value: '15+' },
    { label: 'Café consumido', value: '∞' }
  ].map((stat, index) => (
    <div 
      key={index} 
      className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-3 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <p className="text-2xl md:text-3xl text-blue-400 font-bold">{stat.value}</p>
      <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
    </div>
  ))}
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
                tech: ['JSX', 'Tailwind CSS', 'Vite'],
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
                tech: ['React', 'Firebase', 'Ingeniosidad'],
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