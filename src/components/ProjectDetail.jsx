import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';
const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    finup: {
      title: 'FinUp Actualizado',
      fullDescription: `FinUp es una plataforma de gestión financiera personal que ayuda a los usuarios a tomar control de sus finanzas. 
      Esta versión actualizada incluye mejoras significativas en términos de diseño y usabilidad.
        
      Características principales:
      • Interfaz completamente rediseñada para mejor experiencia de usuario
      • Sistema de seguimiento de gastos optimizado
      • Nuevas funcionalidades de visualización de datos
      • Mejoras en el rendimiento general de la aplicación

      Desafíos técnicos:
      • Optimización del rendimiento en dispositivos móviles
      • Implementación de nuevas funcionalidades manteniendo la simplicidad
      • Mejora de la accesibilidad para todos los usuarios

      Tecnologías utilizadas:
      • HTML5 para la estructura
      • CSS3 para estilos y animaciones
      • JavaScript para la lógica e interactividad
      • Diseño responsive para todos los dispositivos`,
      image: '/p1.png',
      tech: ['Html', 'CSS', 'JavaScript']
    },
    sushiryl: {
      title: 'Sushiryl',
      fullDescription: `Sushiryl es una aplicación web para un restaurante de sushi que facilita la gestión de pedidos en línea. 
      El sistema está integrado con WhatsApp para una comunicación fluida con los clientes.

      Características principales:
      • Catálogo digital completo con imágenes y descripciones
      • Sistema de pedidos en línea
      • Integración con WhatsApp Business
      • Panel de administración para el restaurante

      Desafíos técnicos:
      • Integración seamless con WhatsApp
      • Optimización de carga de imágenes
      • Sistema de pedidos en tiempo real

      Tecnologías utilizadas:
      • HTML5 para la estructura
      • CSS3 para el diseño responsivo
      • JavaScript para la interactividad
      • API de WhatsApp Business`,
      image: '/p2.png',
      tech: ['Html', 'Css', 'Javascript']
    },
    portfolio: {
      title: 'Portfolio Personal',
      fullDescription: `Mi portfolio personal es una muestra de mi trabajo y habilidades como desarrollador web. 
      Diseñado y desarrollado completamente por mí utilizando tecnologías modernas.

      Características principales:
      • Diseño moderno y minimalista
      • Animaciones suaves al hacer scroll
      • Secciones bien organizadas de proyectos y habilidades
      • Totalmente responsive

      Desafíos técnicos:
      • Implementación de animaciones optimizadas
      • Diseño adaptativo para todos los dispositivos
      • Optimización del rendimiento

      Tecnologías utilizadas:
      • React para la estructura y componentes
      • Tailwind CSS para los estilos
      • Vercel para el deployment`,
      image: '/p3.png',
      tech: ['React', 'Tailwind CSS', 'Vercel']
    }
  };

  const project = projects[id];

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8">
        <ArrowLeft className="mr-2" />
        Volver al inicio
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <div className="mb-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-lg shadow-xl mb-6"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          {project.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
        {/* Coloca el botón debajo de la imagen en los tres proyectos */}
        <div className="mt-8">
        {id === 'finup' && (
            <Button text="Github del proyecto" link="https://github.com/pedroandr3s/finuppirata" />
        )}
        {id === 'sushiryl' && (
            <Button text="Ver Proyecto" link="https://github.com/pedroandr3s/pagina-web-sushiryl" />
        )}
        {id === 'portfolio' && (
            <Button text="Ver Proyecto" link="#" />
        )}
        </div>


        {/* Mostrar el botón solo para "FinUp" */}
        {id === 'finup' && (
           <div className="container mt-8">
           <a href="/finup.pdf" target="_blank" rel="noopener noreferrer">
             <button className="button">PDF</button>
           </a>
         </div>
        )}
      </div>

      <style>
        {`
          .button {
            font-size: 1.4em;
            padding: 0.6em 19em; /* Ajustado el padding para que el botón esté más equilibrado */
            border-radius: 0.5em;
            border: none;
            background-color: black;
            color: #fff;
            cursor: pointer;
            box-shadow: 2px 5px 3px #ffff;
            position: relative;
            z-index: 10;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectDetail;