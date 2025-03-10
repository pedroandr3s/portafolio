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
      image: '/portafolio/p1.webp',
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
      image: '/portafolio/p2.webp',
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
      image: '/portafolio/p3.webp',
      tech: ['React', 'Tailwind CSS', 'Vercel']
    },
    contabilidad: {
      title: 'Contabilidad',
      fullDescription: `Contabilidad es una página web diseñada para optimizar el tiempo en una oficina contable, digitalizando el proceso del libro mayor y automatizando la generación de balances anuales. 
      Antes, realizar registros manuales en el libro mayor consumía demasiado tiempo y aumentaba la posibilidad de errores, lo que complicaba la elaboración de estados financieros. Con esta solución, todo el proceso contable se maneja desde una única plataforma web, facilitando la organización y el análisis de datos.
    
      Estructura y funcionamiento:  
    
      1. Empresa  
         El proceso comienza con el registro de la empresa. A través de un botón simple, se ingresa el nombre y RUT de la empresa, lo que permite gestionar sus registros contables de manera organizada.  
    
      2. Registro  
         Luego, se accede al formulario de registros contables, diseñado para recopilar de manera eficiente toda la información necesaria para optimizar el uso de los datos. Este formulario incluye campos para:  
         • Nombre-Año-Mes de la cuenta contable  
         • Monto del debe y haber
         • Cuenta a la que se dirige el monto 
         • Otros datos clave para la categorización y análisis financiero  
    
      3. Historial  
         Una vez ingresados los datos, se almacenan en el historial, que es una adaptación digital del libro mayor contable. Se implementó una tabla con diseño cuadriculado similar a las hojas del libro mayor físico, facilitando la lectura y comprensión para los usuarios acostumbrados a los registros tradicionales. En esta tabla se reflejan todas las operaciones contables realizadas, organizadas por fecha y categoría.  
    
      4. Balance  
         Con base en los registros del historial, el sistema genera automáticamente un balance contable detallado. En este balance se procesan y organizan los datos en secciones como:  
         • Nombre de Cuentas  
         • Sumas: Débito y Crédito  
         • Saldos: Deudor y Acreedor  
         • Inventario: Activo y Pasivo  
         • Resultado: Pérdidas y Ganancias  
    
         Una de las principales ventajas es que el balance generado puede descargarse en formato Excel, simplificando el proceso de generación de informes contables y permitiendo su uso en auditorías o reportes financieros.  
    
      Desafíos técnicos:  
      • Creación de una interfaz intuitiva que facilite la transición del registro manual al digital  
      • Manejo eficiente del estado de los datos para actualizar los registros en tiempo real  
      • Implementación de almacenamiento seguro para garantizar la integridad de los datos contables  
      • Diseño responsivo para su uso en distintos dispositivos  
    
      Tecnologías utilizadas:  
      • React para la interfaz interactiva  
      • Firebase para almacenamiento y gestión de datos  
      • GitHub Pages para el deployment`,
      image: '/portafolio/p5.png',
      tech: ['React', 'Firebase', 'GitHub Pages']
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
        <div className="prose prose-invert max-w-none whitespace-pre-line text-gray-300">
  {project.fullDescription}
        </div>
        <div className="mt-8">
          {id === 'finup' && <Button text="Github del proyecto" link="https://github.com/pedroandr3s/finuppirata" />}
          {id === 'sushiryl' && <Button text="Ver Proyecto" link="https://github.com/pedroandr3s/pagina-web-sushiryl" />}
          {id === 'portfolio' && <Button text="Ver Proyecto" link="https://github.com/pedroandr3s/portafolio" />}
          {id === 'balance' && <Button text="Ver Proyecto" link="https://github.com/pedroandr3s/cuaderno" />}
        </div>

        {id === 'finup' && (
          <div className="container mt-8">
            <a href="/portafolio/finup.pdf" target="_blank" rel="noopener noreferrer">
              <button className="button">PDF</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
