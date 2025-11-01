export const projects = [
  {
    id: 'contabilidad',
    title: 'Contabilidad Digital',
    shortDescription: 'Sistema completo de gestión contable que digitaliza el proceso del libro mayor.',
    description: 'Sistema web diseñado para optimizar el tiempo en oficinas contables, digitalizando el proceso del libro mayor y automatizando la generación de balances anuales.',
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
       Una vez ingresados los datos, se almacenan en el historial, que es una adaptación digital del libro mayor contable. Se implementó una tabla con diseño cuadriculado similar a las hojas del libro mayor físico, facilitando la lectura y comprensión para los usuarios acostumbrados a los registros tradicionales.  

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
    • Diseño responsivo para su uso en distintos dispositivos`,
    tech: ['React', 'Firebase', 'Excel Export', 'Responsive Design'],
    image: '/portafolio/p5.png',
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/pedroandr3s/contabilidad',
    featured: true
  },
  {
    id: 'finup',
    title: 'FinUp Actualizado',
    shortDescription: 'Plataforma de gestión financiera personal con interfaz moderna.',
    description: 'Plataforma de gestión financiera personal que ayuda a los usuarios a tomar control de sus finanzas con una interfaz moderna y optimizada.',
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
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    image: '/portafolio/p1.webp',
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/pedroandr3s/finuppirata',
    pdf: '/portafolio/finup.pdf',
    featured: true
  },
  {
    id: 'sushiryl',
    title: 'Sushiryl',
    shortDescription: 'Aplicación web para restaurante con sistema de pedidos integrado.',
    description: 'Aplicación web para restaurante de sushi con sistema de pedidos integrado con WhatsApp Business para una comunicación fluida.',
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
    tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API'],
    image: '/portafolio/p2.webp',
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/pedroandr3s/pagina-web-sushiryl',
    featured: true
  },
  {
    id: 'balance',
    title: 'Balance Personal',
    shortDescription: 'Aplicación de registro de ingresos y egresos en tiempo real.',
    description: 'Aplicación web para registrar ingresos y egresos con visualización en tiempo real y almacenamiento en la nube.',
    fullDescription: `Balance Personal es una aplicación web diseñada para llevar un control detallado de ingresos y egresos personales.

    Características principales:
    • Registro rápido de transacciones
    • Visualización en tiempo real
    • Categorización automática
    • Reportes mensuales y anuales
    • Almacenamiento seguro en Firebase

    Desafíos técnicos:
    • Sincronización en tiempo real con Firebase
    • Implementación de gráficos interactivos
    • Optimización del rendimiento con grandes cantidades de datos

    Tecnologías utilizadas:
    • React para la interfaz de usuario
    • Firebase para backend y autenticación
    • Vite como build tool
    • Chart.js para visualizaciones`,
    tech: ['React', 'Firebase', 'Vite', 'Chart.js'],
    image: '/portafolio/p4.png',
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/pedroandr3s/cuaderno',
    featured: false
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personal',
    shortDescription: 'Portfolio personal con diseño moderno y animaciones.',
    description: 'Mi portfolio personal desarrollado con React, mostrando mis proyectos y habilidades con un diseño moderno y animaciones suaves.',
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
    tech: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    image: '/portafolio/p3.webp',
    gradient: 'from-indigo-500 to-purple-500',
    github: 'https://github.com/pedroandr3s/portafolio',
    featured: false
  }
];