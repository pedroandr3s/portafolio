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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    gradient: 'from-indigo-500 to-purple-500',
    github: '',
    featured: false
  },
  {
    id: 'taskmaster',
    title: 'TaskMaster Pro',
    shortDescription: 'Gestor de tareas avanzado con metodología Kanban y Pomodoro.',
    description: 'Aplicación de gestión de tareas que combina la metodología Kanban con técnica Pomodoro para maximizar la productividad.',
    fullDescription: `TaskMaster Pro es una aplicación completa de gestión de tareas diseñada para profesionales y equipos que buscan aumentar su productividad.

    Características principales:
    • Tablero Kanban interactivo con drag & drop
    • Timer Pomodoro integrado con estadísticas
    • Sistema de etiquetas y prioridades personalizables
    • Colaboración en tiempo real entre equipos
    • Notificaciones inteligentes y recordatorios
    • Análisis de productividad con gráficos detallados
    • Modo oscuro y temas personalizables

    Desafíos técnicos:
    • Implementación de drag & drop fluido y responsivo
    • Sincronización en tiempo real entre múltiples usuarios
    • Optimización de rendimiento con grandes cantidades de tareas
    • Sistema de notificaciones sin afectar el rendimiento
    • Arquitectura escalable para equipos grandes

    Tecnologías utilizadas:
    • React + TypeScript para type safety
    • Redux Toolkit para manejo de estado complejo
    • Firebase Realtime Database para sincronización
    • React Beautiful DnD para drag & drop
    • Recharts para visualización de datos`,
    tech: ['React', 'TypeScript', 'Redux', 'Firebase', 'DnD'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    gradient: 'from-teal-500 to-cyan-500',
    github: '',
    featured: true
  },
  {
    id: 'ecommerce',
    title: 'ShopHub',
    shortDescription: 'E-commerce completo con carrito, pagos y gestión de inventario.',
    description: 'Plataforma de comercio electrónico full-stack con integración de pagos, gestión de inventario y panel de administración.',
    fullDescription: `ShopHub es una solución completa de e-commerce desarrollada para negocios pequeños y medianos que desean establecer su presencia online.

    Características principales:
    • Catálogo de productos con filtros avanzados
    • Carrito de compras con persistencia
    • Integración con pasarelas de pago (Stripe, PayPal)
    • Sistema de autenticación y perfiles de usuario
    • Panel de administración completo
    • Gestión de inventario en tiempo real
    • Sistema de reviews y calificaciones
    • Búsqueda inteligente con autocompletado
    • Envío de emails transaccionales

    Desafíos técnicos:
    • Implementación segura de pagos
    • Manejo de transacciones y concurrencia en inventario
    • Optimización de búsquedas con grandes catálogos
    • Sistema de caché para mejorar rendimiento
    • SEO optimization para mejor posicionamiento

    Tecnologías utilizadas:
    • Next.js para SSR y mejor SEO
    • Node.js + Express para el backend
    • PostgreSQL para base de datos relacional
    • Stripe API para procesamiento de pagos
    • Redis para caché y sesiones`,
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    gradient: 'from-rose-500 to-pink-500',
    github: '',
    featured: true
  },
  {
    id: 'weatherapp',
    title: 'WeatherNow',
    shortDescription: 'Aplicación del clima con pronósticos detallados y mapas interactivos.',
    description: 'App del clima con datos en tiempo real, pronósticos de 7 días, mapas de radar y alertas meteorológicas.',
    fullDescription: `WeatherNow es una aplicación meteorológica completa que proporciona información detallada del clima con una interfaz intuitiva y hermosa.

    Características principales:
    • Clima actual con datos detallados (humedad, viento, UV, etc.)
    • Pronóstico extendido de 7 días
    • Pronóstico por horas con gráficos interactivos
    • Mapas de radar de precipitación en tiempo real
    • Sistema de alertas meteorológicas
    • Ubicaciones favoritas guardadas
    • Diseño adaptativo con animaciones según clima
    • Soporte para múltiples idiomas y unidades

    Desafíos técnicos:
    • Integración con múltiples APIs meteorológicas
    • Manejo eficiente de datos geoespaciales
    • Optimización de llamadas a API con caché inteligente
    • Animaciones fluidas sin afectar rendimiento
    • Soporte offline con Service Workers

    Tecnologías utilizadas:
    • React Native para aplicación móvil multiplataforma
    • OpenWeather API para datos meteorológicos
    • Mapbox para mapas interactivos
    • AsyncStorage para persistencia local
    • React Query para manejo de caché`,
    tech: ['React Native', 'OpenWeather API', 'Mapbox', 'React Query'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    gradient: 'from-sky-400 to-blue-500',
    github: '',
    featured: false
  },
  {
    id: 'fitness',
    title: 'FitTrack',
    shortDescription: 'Aplicación de fitness con seguimiento de entrenamientos y nutrición.',
    description: 'App completa de fitness que combina seguimiento de ejercicios, planificación nutricional y análisis de progreso.',
    fullDescription: `FitTrack es una aplicación integral de fitness diseñada para ayudar a los usuarios a alcanzar sus objetivos de salud y bienestar.

    Características principales:
    • Biblioteca de más de 300 ejercicios con videos demostrativos
    • Planes de entrenamiento personalizados
    • Seguimiento de calorías y macronutrientes
    • Base de datos de alimentos con búsqueda rápida
    • Gráficos de progreso y estadísticas detalladas
    • Sistema de logros y gamificación
    • Integración con dispositivos wearables
    • Recordatorios para entrenamientos y comidas
    • Modo social para compartir progreso

    Desafíos técnicos:
    • Sincronización con APIs de dispositivos wearables
    • Algoritmos de recomendación de entrenamientos
    • Cálculos nutricionales precisos y en tiempo real
    • Manejo de gran cantidad de datos de usuario
    • Optimización de videos y contenido multimedia

    Tecnologías utilizadas:
    • React Native + Expo para desarrollo móvil
    • Node.js + MongoDB para backend
    • GraphQL para queries eficientes
    • AWS S3 para almacenamiento de videos
    • Socket.io para features sociales en tiempo real`,
    tech: ['React Native', 'Node.js', 'MongoDB', 'GraphQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    gradient: 'from-lime-500 to-green-500',
    github: '',
    featured: false
  },
  {
    id: 'chatapp',
    title: 'ChatConnect',
    shortDescription: 'Aplicación de mensajería en tiempo real con videollamadas.',
    description: 'Plataforma de comunicación completa con chat en tiempo real, videollamadas, llamadas de voz y compartir archivos.',
    fullDescription: `ChatConnect es una aplicación de mensajería moderna que ofrece todas las funcionalidades necesarias para comunicación efectiva.

    Características principales:
    • Mensajería instantánea con indicadores de lectura
    • Videollamadas 1:1 y grupales con calidad HD
    • Llamadas de voz con baja latencia
    • Compartir archivos, imágenes y videos
    • Creación de grupos y canales
    • Mensajes encriptados de extremo a extremo
    • Reacciones con emojis y respuestas en hilo
    • Búsqueda avanzada en historial de chats
    • Estados y stories temporales
    • Modo oscuro y temas personalizables

    Desafíos técnicos:
    • Implementación de WebRTC para videollamadas
    • Encriptación segura de mensajes
    • Optimización de transferencia de archivos grandes
    • Manejo de conexiones en tiempo real a escala
    • Compresión inteligente de multimedia
    • Sistema de notificaciones push eficiente

    Tecnologías utilizadas:
    • React + Socket.io para tiempo real
    • WebRTC para videollamadas
    • Node.js + Express para backend
    • MongoDB para almacenamiento de mensajes
    • Redis para presencia y caché
    • JWT para autenticación segura`,
    tech: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
    gradient: 'from-violet-500 to-fuchsia-500',
    github: '',
    featured: true
  }
];