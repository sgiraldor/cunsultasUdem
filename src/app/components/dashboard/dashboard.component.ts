import { Component, OnInit } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCertificate, faAward, faGraduationCap, faBook, faClipboard, faTheaterMasks, faChalkboardTeacher, faUserGraduate, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { CertificadoCardComponent } from '../card/card.component'; // Importar el componente CertificadoCardComponent
import { CertificateValidationComponent } from '../certificate-validation/certificate-validation.component'; // Importar el componente CertificateValidationComponent
import { CareerInfoComponent } from '../career-info/career-info.component'; // Importar el componente CareerInfoComponent
interface Category {
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl?: string;
  generalInfo?: string;
  subjects?: string[];
  jobOpportunities?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CertificadoCardComponent,CertificateValidationComponent,CareerInfoComponent], // Importar CommonModule y CertificadoCardComponent aquí
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedCategory: string = 'certificates';
  cards: Category[] = [];
  showValidationForm: boolean = false;
  showSuccessMessage: boolean = false;
  showCareerInfo: boolean = false; // Añadir la propiedad showCareerInfo
  selectedCareer: Category | null = null; // Añadir la propiedad selectedCareer

  categories: { [key: string]: Category[] } = {
    certificates: [
      {
        title: 'Certificado de Especialización',
        description: 'Acredita conocimientos avanzados en un área específica dentro de un campo profesional',
        price: 20000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJObc10kuU5SV5ybK3hXArTY9AlS3zhs0Cw&s'
      },
      {
        title: 'Certificado de Prácticas Profesionales',
        description: 'Certifica que el estudiante ha completado su período de prácticas como parte de su formación académica.',
        price: 20000,
        rating: 4.8,
        imageUrl: 'https://cdn.venngage.com/template/thumbnail/310/373dad10-d9d7-4420-9e5d-15fdbb7ecc83.webp'
      },
      {
        title: 'Certificado de Estudio',
        description: 'Acredita que el estudiante está inscrito en la universidad y cursando un programa académico específico. Incluye detalles como la facultad, el nombre del programa, el semestre en curso y, en algunos casos, el horario de clases.',
        price: 15000,
        rating: 4.7,
        imageUrl: 'https://www.shutterstock.com/image-vector/modern-certificate-template-vector-design-600nw-2274718323.jpg'
      },
      {
        title: 'Certificado de Distinciones Académicas',
        description: 'Documento que destaca los logros académicos del estudiante, como matrícula de honor, premio a la excelencia académica o cualquier otra distinción otorgada.',
        price: 10000,
        rating: 5.0,
        imageUrl: 'https://marketplace.canva.com/EAEeG6O5lww/1/0/1600w/canva-negro-con-borde-certificado-estudiantil-oguQr8a5Vf4.jpg'
      },
      {
        title: 'Certificado de Idiomas',
        description: 'Acredita el dominio de un idioma extranjero, basado en pruebas o cursos específicos.',
        price: 30000,
        rating: 4.6,
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUDSm3a5-F0-9jySuZb1XvFiEsKRUDaST1g&s'
      },
      {
        title: 'Certificado de Participación en Conferencias',
        description: 'Certifica la asistencia y participación en conferencias académicas o profesionales.',
        price: 10000,
        rating: 4.5,
        imageUrl: 'https://yelenieramos.wordpress.com/wp-content/uploads/2020/04/img_6807-2.jpg?w=1024'
      },
      {
        title: 'Certificado de Voluntariado',
        description: 'Acredita la participación en actividades de voluntariado organizadas por la universidad o instituciones asociadas.',
        price: 20000,
        rating: 4.9,
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt78fbTDnAixKd-jgj_KlmQp2vqrNWyy4XwA&s'
      },
      {
        title: 'Certificado de Asistencia a Talleres',
        description: 'Certifica la asistencia y participación en talleres académicos o profesionales.',
        price: 10000,
        rating: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpIqnie6CrWaUuXebjzUz4rvF-TO5jRl5KQ&s'
      },
      {
        title: 'Certificado de Proyecto de Investigación',
        description: 'Acredita la participación y contribución en proyectos de investigación realizados en la universidad.',
        price: 25000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb3BU538ygpbSSTVw2_Ol3qicndPNf5XIvg&s'
      }
    ],
    diplomas: [
      {
        title: 'Diploma de Honor',
        description: 'Reconocimiento por excelencia académica.',
        price: 10000,
        rating: 5.0,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVjFQm3kyOffSnZa5iit6scitsGEVsUBw2A&s'
      },
      {
        title: 'Diploma de Participación',
        description: 'Acredita la participación en eventos académicos o profesionales.',
        price: 10000,
        rating: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHYjxLGz_x2HsIHRLdoY-iuIHZ1Td8Ne7Kw&s'
      },
      {
        title: 'Diploma de Mérito',
        description: 'Reconocimiento por logros destacados en un área específica.',
        price: 5000,
        rating: 4.9,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbboJWbf_pwqz7NUyAEX6ex1X0L502X9Sd4A&s'
      },
      {
        title: 'Diploma de Servicio Comunitario',
        description: 'Acredita la participación en actividades de servicio comunitario.',
        price: 5000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3eCGqoXGhwR5pZ1Yui6mTKCzM4CizXVWRg&s'
      },
      {
        title: 'Diploma de Liderazgo',
        description: 'Reconocimiento por habilidades de liderazgo demostradas en proyectos o actividades.',
        price: 5000,
        rating: 4.8,
        imageUrl: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=20,format=auto/media/diplomas/diploma-liderazgo-comportamientos-2023-2bf29e96-532a-47f1-9045-5db70948e2ea.jpeg'
      },
      {
        title: 'Diploma de Carrera',
        description: 'Acredita la finalización de un programa de estudios universitarios.',
        price: 50000,
        rating: 5.0,
        imageUrl: 'data:image/jpeg;base64,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'
      },
      {
        title: 'Diploma de Especialización',
        description: 'Acredita la finalización de un programa de especialización en un área específica.',
        price: 50000,
        rating: 4.9,
        imageUrl: 'data:image/jpeg;base64,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yyNP2L1qh2rPmg4tRpPjYvcq95NRpLjYvcq95d327Y/WqHas+az9uWP1mh2rPmgr/B9J8bF7lXvLOo0nxsXuVe8u/wC27J6zR7RnzWftuyes0e0Z80FeLPpLjYvcq99ZNDSXGx+5V76sBpmy+sUe0Z81n7Xs3rFHtG/NBWCz6T42L3KvfWdRpPjYvcq99WY0rZv49L32/NZ+07P/ABqfvt+aCr8H0nxsXZ1e+ng+k+Ni7Or31a/aVD+NT99vzWftCj/Fp++35oKjwfSfGxdnV76eD6T42Ls6vfVx4fR/is95vzTw6j/FZ7w+aCo8H0nxsXZ1e+ng+k+Ni7Or31ceG0v4jPeHzTwyl/EZ7w+aDyeluTlurua9xsgdTBALG1BeB8114kEezeV47SFgr0XEVKTqfQDcPQ4SCPavr3hdP02e8FkWin6besKq/KLfbZw+ZflGe4fFtWTBuvIPBpx6DC9RoDkhWrAOrzSpTe1eT39I8zDjj0Zr6EK7PSb1hSFRvEda814VidlZ1/IdLRkRjT4DS/ht6gi3XxxRX4wbKSIiIEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k='
      },
      {
        title: 'Diploma de Doctorado',
        description: 'Acredita la obtención del grado de doctor en una disciplina académica.',
        price: 50000,
        rating: 5.0,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sXwwwX7kNNh8NUqXkkH2RCTa2s5mA-WBcg&s'
      },
      {
        title: 'Diploma de Maestría',
        description: 'Acredita la obtención del grado de maestro en una disciplina académica.',
        price: 50000,
        rating: 4.8,
        imageUrl: 'https://udemedellin.edu.co/wp-content/uploads/2022/01/Noche-de-los-Mejores.jpg'
      }
    ],
    careers: [
      {
        title: 'Ingeniería de Sistemas',
        description: 'Programa de estudios en ingeniería de sistemas.',
        price: 11000000,
        rating: 4.5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFf2LWIZDEaArp1JTmrk3xvjRwkARIuWAmg&s',
        generalInfo: 'La Ingeniería de Sistemas se enfoca en el diseño, implementación y gestión de sistemas de información. Los estudiantes aprenderán sobre programación, bases de datos, redes y seguridad informática.',
        subjects: ['Programación', 'Bases de Datos', 'Redes de Computadoras', 'Seguridad Informática'],
        jobOpportunities: 'Los graduados pueden trabajar como desarrolladores de software, administradores de bases de datos, ingenieros de redes y consultores de seguridad informática.'
      },
      {
        title: 'Ingeniería Civil',
        description: 'Programa de estudios en ingeniería civil.',
        price: 11000000,
        rating: 4.6,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bf8pvfKDjgFKcnzOKbDiY8sxV8A-usQhlQ&s',
        generalInfo: 'La Ingeniería Civil se dedica al diseño, construcción y mantenimiento de infraestructuras como carreteras, puentes y edificios. Los estudiantes aprenderán sobre materiales de construcción, mecánica de suelos y gestión de proyectos.',
        subjects: ['Materiales de Construcción', 'Mecánica de Suelos', 'Gestión de Proyectos', 'Estructuras'],
        jobOpportunities: 'Los graduados pueden trabajar como ingenieros de proyectos, gerentes de construcción, consultores de infraestructura y diseñadores estructurales.'
      },
      {
        title: 'Ingeniería Financiera',
        description: 'Programa de estudios en ingeniería financiera.',
        price: 11000000,
        rating: 4.7,
        imageUrl: 'data:image/jpeg;base64,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',
        generalInfo: 'La Ingeniería Financiera combina principios de ingeniería y finanzas para resolver problemas financieros complejos. Los estudiantes aprenderán sobre análisis financiero, gestión de riesgos y mercados financieros.',
        subjects: ['Análisis Financiero', 'Gestión de Riesgos', 'Mercados Financieros', 'Modelos Financieros'],
        jobOpportunities: 'Los graduados pueden trabajar como analistas financieros, gestores de riesgos, consultores financieros y gestores de inversiones.'
      },
      {
        title: 'Ingeniería Ambiental',
        description: 'Programa de estudios en ingeniería ambiental.',
        price: 11000000,
        rating: 4.8,
        imageUrl: 'https://img.freepik.com/vector-premium/ingeniero-ambiental_1095437-328.jpg',
        generalInfo: 'La Ingeniería Ambiental se enfoca en la protección del medio ambiente mediante el diseño de soluciones sostenibles. Los estudiantes aprenderán sobre gestión de residuos, tratamiento de aguas y evaluación de impacto ambiental.',
        subjects: ['Gestión de Residuos', 'Tratamiento de Aguas', 'Evaluación de Impacto Ambiental', 'Energías Renovables'],
        jobOpportunities: 'Los graduados pueden trabajar como consultores ambientales, gestores de residuos, ingenieros de tratamiento de aguas y especialistas en energías renovables.'
      },
      
      {
        title: 'Ingeniería de Telecomunicaciones',
        description: 'Programa de estudios en ingeniería de telecomunicaciones.',
        price: 11000000,
        rating: 4.5,
        imageUrl: 'https://bit.coit.es/wp-content/uploads/2020/07/formando-ingenieros-de-telecomunicacion-imagen.png',
        generalInfo: 'La Ingeniería de Telecomunicaciones se dedica al diseño y gestión de sistemas de comunicación. Los estudiantes aprenderán sobre redes de telecomunicaciones, sistemas inalámbricos y transmisión de datos.',
        subjects: ['Redes de Telecomunicaciones', 'Sistemas Inalámbricos', 'Transmisión de Datos', 'Comunicaciones Digitales'],
        jobOpportunities: 'Los graduados pueden trabajar como ingenieros de telecomunicaciones, consultores de redes, diseñadores de sistemas inalámbricos y especialistas en comunicaciones digitales.'
      },
      {
        title: 'Comunicación Gráfica Publicitaria',
        description: 'Programa de estudios en comunicación gráfica publicitaria.',
        price: 10000000,
        rating: 4.7,
        imageUrl: 'https://baetica.com/wp-content/themes/baetica/dist/images/services/graphic-communication/comunicacion-grafica-comprension-baetica.svg?v=20200917171530',
        generalInfo: 'La Comunicación Gráfica Publicitaria se enfoca en el diseño visual y la comunicación efectiva. Los estudiantes aprenderán sobre diseño gráfico, publicidad y marketing digital.',
        subjects: ['Diseño Gráfico', 'Publicidad', 'Marketing Digital', 'Comunicación Visual'],
        jobOpportunities: 'Los graduados pueden trabajar como diseñadores gráficos, publicistas, especialistas en marketing digital y consultores de comunicación visual.'
      },
      {
        title: 'Ingeniería Electrónica',
        description: 'Programa de estudios en ingeniería electrónica.',
        price: 11000000,
        rating: 4.6,
        imageUrl: 'https://img.freepik.com/vector-gratis/concepto-flat-ingenieria-ordenadores_23-2148158932.jpg',
        generalInfo: 'La Ingeniería Electrónica se enfoca en el diseño y desarrollo de dispositivos electrónicos. Los estudiantes aprenderán sobre circuitos electrónicos, sistemas embebidos y automatización.',
        subjects: ['Circuitos Electrónicos', 'Sistemas Embebidos', 'Automatización', 'Electrónica Digital'],
        jobOpportunities: 'Los graduados pueden trabajar como ingenieros electrónicos, diseñadores de circuitos, desarrolladores de sistemas embebidos y especialistas en automatización.'
      },
      
      {
        title: 'Investigación Criminal',
        description: 'Programa de estudios en investigación criminal.',
        price: 11000000,
        rating: 4.7,
        imageUrl: 'https://i.pinimg.com/236x/54/5c/79/545c793ebb2b3f119be8dcba565d69ab.jpg',
        generalInfo: 'La Investigación Criminal se dedica al estudio de técnicas y métodos para resolver crímenes. Los estudiantes aprenderán sobre criminología, técnicas de investigación y análisis forense.',
        subjects: ['Criminología', 'Técnicas de Investigación', 'Análisis Forense', 'Derecho Penal'],
        jobOpportunities: 'Los graduados pueden trabajar como investigadores criminales, analistas forenses, consultores de seguridad y oficiales de policía.'
      },
      {
        title: 'Psicología',
        description: 'Programa de estudios en psicología.',
        price: 11000000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cZswv9WUqQtm0dSqJbP71XGfQM4s84KJkA&s',
        generalInfo: 'El programa de Psicología se enfoca en el estudio del comportamiento humano y los procesos mentales. Los estudiantes aprenderán sobre psicología clínica, psicología educativa y psicología organizacional.',
        subjects: ['Psicología Clínica', 'Psicología Educativa', 'Psicología Organizacional', 'Psicología Social'],
        jobOpportunities: 'Los graduados pueden trabajar como psicólogos clínicos, psicólogos educativos, consultores organizacionales y investigadores.'
      }
    ],

    notas: [
      {
        title: 'Matemáticas Discretas',
        description: 'Estudio de estructuras matemáticas que son fundamentalmente discretas en lugar de continuas.',
        price: 0,
        rating: 4.5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKYXNRPzcgCxM5QouT_fMjh1hpWCaT-bODg&s'
      },
      {
        title: 'Algoritmos y Estructuras de Datos',
        description: 'Estudio de algoritmos y estructuras de datos fundamentales para la programación.',
        price: 0,
        rating: 4.7,
        imageUrl: 'data:image/jpeg;base64,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'
      },
      {
        title: 'Programación Orientada a Objetos',
        description: 'Estudio de los principios de la programación orientada a objetos.',
        price: 0,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsCu67FeMSpj6wxxFRS-tvDOS73N5t_Vpyg&s'
      },
      {
        title: 'Bases de Datos',
        description: 'Estudio de los sistemas de gestión de bases de datos y su diseño.',
        price: 0,
        rating: 4.6,
        imageUrl: 'https://w1.pngwing.com/pngs/728/413/png-transparent-cartoon-computer-computer-servers-database-line-material-circle.png'
      },
      {
        title: 'Redes de Computadoras',
        description: 'Estudio de los principios y prácticas de las redes de computadoras.',
        price: 0,
        rating: 4.7,
        imageUrl: 'https://i.pinimg.com/736x/76/e9/96/76e99676f4f7539026462e81e3f5805e.jpg'
      },
      {
        title: 'Sistemas Operativos',
        description: 'Estudio de los principios y diseño de los sistemas operativos.',
        price: 0,
        rating: 4.8,
        imageUrl: 'https://img.freepik.com/vector-gratis/pequenos-programadores-que-actualizan-sistema-operativo-computadora-ilustracion-plana-aislada_74855-11138.jpg'
      },
      {
        title: 'Ingeniería de Software',
        description: 'Estudio de los principios y prácticas de la ingeniería de software.',
        price: 0,
        rating: 4.9,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrNQVYPI0N-L-JqWFX-WKdNPZ9SJ5ToPxGg&s'
      },
      {
        title: 'Inteligencia Artificial',
        description: 'Estudio de los principios y aplicaciones de la inteligencia artificial.',
        price: 0,
        rating: 4.8,
        imageUrl: 'https://pic.pikbest.com/02/22/85/80C888piCSpU.jpg!bw700'
      },
      {
        title: 'Seguridad Informática',
        description: 'Estudio de los principios y prácticas de la seguridad informática.',
        price: 0,
        rating: 4.7,
        imageUrl: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-seguridad-computacion-nube_335657-2105.jpg'
      },
      {
        title: 'Desarrollo Web',
        description: 'Estudio de los principios y prácticas del desarrollo web.',
        price: 0,
        rating: 4.8,
        imageUrl: 'https://img.freepik.com/vector-premium/programador-esta-trabajando-software-ilustracion-plana-dibujos-animados-desarrollador-web-independiente-computadora-aislada_97231-152.jpg'
      }
    ],
   
    nivelatorio: [
      {
        title: 'Nivelatorio de Matemáticas',
        description: 'Sesión de tutoría en matemáticas.',
        price: 1000000,
        rating: 4.6,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77NJZaHqlOdU339WE6d7nXld6iiGElcnYAA&s',
      },
 
      {
        title: 'Nivelatorio de Física',
        description: 'Sesión de tutoría en física.',
        price: 1000000,
        rating: 4.7,
        imageUrl: 'https://img.freepik.com/vector-premium/ilustracion-concepto-plano-fisica-asignatura-escolar-metafora-ciencias-naturales-clase-practica-curso-universitario-libros-texto-estudiantes-articulos-laboratorio-escuela-objetos-dibujos-animados-2d_151150-2664.jpg'
      },
      {
        title: 'Nivelatorio de Química',
        description: 'Sesión de tutoría en química.',
        price: 1000000,
        rating: 4.5,
        imageUrl: 'data:image/jpeg;base64,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'
      },
      {
        title: 'Nivelatorio de Cálculo',
        description: 'Sesión de tutoría en cálculo.',
        price: 1000000,
        rating: 4.8,
        imageUrl: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-matematicas_114360-4288.jpg'
      },
      {
        title: 'Nivelatorio de Álgebra Lineal',
        description: 'Sesión de tutoría en álgebra lineal.',
        price: 1000000,
        rating: 4.6,
        imageUrl: 'https://www.nibcode.com/images/contents/1129/primary.png'
      },
      {
        title: 'Nivelatorio de Estadística',
        description: 'Sesión de tutoría en estadística.',
        price: 1000000,
        rating: 4.7,
        imageUrl: 'https://img.freepik.com/vector-premium/grafico-estadisticas-3d-estilo-dibujos-animados-minimo_645574-369.jpg'
      },
      {
        title: 'Nivelatorio de Programación',
        description: 'Sesión de tutoría en programación.',
        price: 1000000,
        rating: 4.9,
        imageUrl: 'https://e7.pngegg.com/pngimages/782/918/png-clipart-poster-computer-programming-character-notebook-miscellaneous-cartoon-character.png'
      },
      {
        title: 'Nivelatorio de Termodinámica',
        description: 'Sesión de tutoría en termodinámica.',
        price: 1000000,
        rating: 4.6,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/6813/6813621.png'
      },
      {
        title: 'Nivelatorio de Mecánica de fluidos',
        description: 'Sesión de tutoría en mecánica de fluidos.',
        price: 1000000,
        rating: 4.7,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1184/1184130.png  '
      },


    ],
    
    diplomados: [
      {
        title: 'Diplomado en Ingeniería de Sistemas',
        description: 'Programa de estudios avanzados en ingeniería de sistemas.',
        price: 30000,
        rating: 4.8,
        imageUrl: 'https://st2.depositphotos.com/1001599/43591/v/450/depositphotos_435912208-stock-illustration-cross-platform-development-abstract-concept.jpg'

      },
      {
        title: 'Diplomado en Ingeniería Civil',
        description: 'Programa de estudios avanzados en ingeniería civil.',
        price: 30000,
        rating: 4.7,
        imageUrl: 'https://w7.pngwing.com/pngs/537/333/png-transparent-man-holding-paper-illustration-architectural-engineering-euclidean-engineer-building-hand-service.png'
      },
      {
        title: 'Diplomado en Ingeniería Financiera',
        description: 'Programa de estudios avanzados en ingeniería financiera.',
        price: 30000,
        rating: 4.9,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Tn_VDjlUiWw706e3awaBevOBF4Gg-fJuFg&s'
      },
      {
        title: 'Diplomado en Ingeniería Ambiental',
        description: 'Programa de estudios avanzados en ingeniería ambiental.',
        price: 30000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwc3cgT84hz2R2F9_gzT43NaL2qfBRVlh3mg&s'
      },
      {
        title: 'Diplomado en Ingeniería de Telecomunicaciones',
        description: 'Programa de estudios avanzados en ingeniería de telecomunicaciones.',
        price: 30000,
        rating: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElm2cgwNBz6k19wZMydYq0jKXdvRF8rDlyg&s'
      },
      {
        title: 'Diplomado en Ingeniería Electrónica',
        description: 'Programa de estudios avanzados en ingeniería electrónica.',
        price: 30000,
        rating: 4.8,
        imageUrl: 'https://png.pngtree.com/png-clipart/20201015/ourmid/pngtree-hand-drawn-cartoon-computer-gear-engineer-day-illustration-png-image_2367283.jpg'
      },
      {
        title: 'Diplomado en Comunicación Gráfica Publicitaria',
        description: 'Programa de estudios avanzados en comunicación gráfica publicitaria.',
        price: 25000,
        rating: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREybISnJPZ50jXAylQqDyAZRJvnTCpkNYcA&s'
      },
      {
        title: 'Diplomado en Comunicación Audiovisual',
        description: 'Programa de estudios avanzados en comunicación audiovisual.',
        price: 25000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnetLN7GTJCQErnh84b0OvbfngAbDO6RnSlA&s'

      },
      {
        title: 'Diplomado en Derecho',
        description: 'Programa de estudios avanzados en derecho.',
        price: 35000,
        rating: 4.9,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk719Z9uxf2Fq_mKIdpXodVCbvE9lGxgj6Kw&s'
      },
      {
        title: 'Diplomado en Investigación Criminal',
        description: 'Programa de estudios avanzados en investigación criminal.',
        price: 35000,
        rating: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8payCjs0VBSc_PDjTCeVgS_21rYsUrsAFKQ&s'
      },
      {
        title: 'Diplomado en Psicología',
        description: 'Programa de estudios avanzados en psicología.',
        price: 35000,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCloALdRi8rRGcMcVPHjF8AbdB9-fHWz9uWg&s'
      }
    ],
    teatro: [
      {
        title: 'Información de Teatro',
        description: 'Detalles sobre las obras de teatro y eventos próximos.',
        price: 0,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_0z_gDDXOEi_eL6Ti5TAaiYtiEyxdRSiWA&s'
      },
      {
        title: 'Compra de Boletas',
        description: 'Compra tus boletas para las próximas obras de teatro.',
        price: 5000,
        rating: 4.9,
        imageUrl: 'https://st4.depositphotos.com/4111759/23619/v/1600/depositphotos_236197134-stock-illustration-tickets-vector-close-up-top.jpg'
      },
      {
        title: 'Taller de Actuación',
        description: 'Participa en nuestro taller de actuación para mejorar tus habilidades.',
        price: 15000,
        rating: 4.7,
        imageUrl: 'https://w7.pngwing.com/pngs/610/311/png-transparent-theatre-stage-great-wall-of-china-miscellaneous-stage-cartoon.png'
        
      },
      {
        title: 'Visita Guiada al Teatro',
        description: 'Conoce la historia y los secretos del teatro con una visita guiada.',
        price: 10000,
        rating: 4.6,
        imageUrl: 'https://i.pinimg.com/originals/fe/a4/2d/fea42dd0c0edaf8eb3e56a452224c1d2.jpg'
      },
    ],
      
  asesorias: [
    {
      title: 'Asesoría en Probabilidad y Estadística Aplicada',
      description: 'Teoría de probabilidades, distribuciones estadísticas y análisis de datos, usados en análisis de riesgos y control de calidad.',
      price: 0,
      rating: 4.8,
      imageUrl: 'https://png.pngtree.com/png-clipart/20230825/original/pngtree-man-teacher-is-using-interactive-whiteboard-with-charts-teaching-statistical-analysis-picture-image_8465287.png'
    },
    {
      title: 'Asesoría en Métodos Numéricos',
      description: 'Solución de problemas matemáticos mediante métodos computacionales, esencial en simulaciones y modelado en ingeniería.',
      price: 0,
      rating: 4.7,
      imageUrl: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2021/09/metodo-ABN.jpg'
    },
    {
      title: 'Asesoría en Cálculo Diferencial e Integral',
      description: 'Enfocado en el análisis de límites, derivadas, integrales y aplicaciones en problemas de ingeniería.',
      price: 0,
      rating: 4.9,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZJkFa5Vp35FF8JL14x-nWmEN2SJVahXCgQ&s'
    },
    {
      title: 'Asesoría en Cálculo Multivariable',
      description: 'Extensión del cálculo en varias dimensiones, aplicable en campos como mecánica, electricidad y electrónica.',
      price: 0,
      rating: 4.8,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjSyhWI9Lx_RAuc6771CY8iGvggTL4XtRCw&s'
    },
    {
      title: 'Asesoría en Álgebra Lineal',
      description: 'Matrices, vectores, espacios vectoriales y transformaciones lineales, útiles en áreas como sistemas de control y procesamiento de señales.',
      price: 0,
      rating: 4.7,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRav2291ARwN9bGSa2qJDeEO1NEA8vjH3GoHQ&s'
    },
    {
      title: 'Asesoría en Ecuaciones Diferenciales',
      description: 'Resolución de ecuaciones que modelan fenómenos físicos, mecánicos y eléctricos.',
      price: 0,
      rating: 4.9,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtACaudGOVBmxUtymTXWi09s-YBIJpx6rz1w&s'
    },
  ],
    convenios: [
      {
        title: 'Convenio Sapiencia',
        description: 'Programa de becas y apoyos económicos para estudiantes de Medellín, Colombia, que cubre matrículas y brinda ayudas económicas. Beneficia a estudiantes de instituciones de educación superior públicas y algunas privadas de la ciudad.',
        price: 0,
        rating: 4.9,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwl--CQc5WE-wu_GJSKKrbucz3coQhUCNa9Q&s'
      },
      {
        title: 'Convenio ICETEX',
        description: 'Permite a estudiantes acceder a créditos educativos y becas para cursar estudios de pregrado o posgrado en universidades nacionales e internacionales. Este convenio suele renovarse para garantizar opciones de financiamiento.',
        price: 0,
        rating: 4.8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2sCL54LbC4MP-muavubPmjU5YDyshOIfbg&s'
      },
      {
        title: 'Convenios de Doble Titulación',
        description: 'Acuerdos con universidades extranjeras para que los estudiantes puedan obtener un título en ambas instituciones. Estos convenios benefician programas específicos, especialmente en ingeniería y administración.',
        price: 0,
        rating: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-BU2v5az0dRf4CrevDwqa4RIMVr7b3uE-w&s'
      },
      {
        title: 'Convenios con Empresas del Sector Productivo',
        description: 'Alianzas con empresas y corporaciones de diversos sectores (tecnología, construcción, energía) que permiten prácticas profesionales, pasantías, y empleo. Ejemplos incluyen empresas como Ecopetrol, EPM, y Google.',
        price: 0,
        rating: 4.8,
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmTtmFV5WfhdWW2UJQQCgwKzlap1Np-iHsw&s'
      },
      {
        title: 'Convenios con la Policía',
        description: 'Convenios específicos con la policía para programas de formación y desarrollo profesional.',
        price: 0,
        rating: 4.6,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrJBjrKPi93gTMt7HjdtrzqB8-dSoH-9gVA&s'

      },
    ],
      



    
    
  };

  constructor(library: FaIconLibrary) {
    library.addIcons(faCertificate, faAward, faGraduationCap, faBook, faClipboard, faTheaterMasks, faChalkboardTeacher, faUserGraduate, faHandshake);
  }

  ngOnInit() {
    this.updateCards();
  }

  onCategoryClick(category: string) {
    this.selectedCategory = category;
    this.updateCards();
  }

  updateCards() {
    this.cards = this.categories[this.selectedCategory] || [];
  }
  

  onCardSelected(card: Category) {
    if (this.selectedCategory === 'careers') {
      this.selectedCareer = card; // Mostrar la información de la carrera
      this.showCareerInfo = true;
    } else {
      this.showValidationForm = true; // Mostrar el formulario de validación
      this.showSuccessMessage = false; // Ocultar el mensaje de éxito
    }
  }

  onBack() {
    this.showValidationForm = false; // Volver al dashboard
    this.showSuccessMessage = false; // Ocultar el mensaje de éxito
    this.showCareerInfo = false; // Ocultar la información de la carrera
    this.selectedCareer = null;
  }

  onSubmit() {
    this.showValidationForm = false; // Ocultar el formulario de validación
    this.showSuccessMessage = true; // Mostrar el mensaje de éxito
  }
}