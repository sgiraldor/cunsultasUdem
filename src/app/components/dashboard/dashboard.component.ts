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
        imageUrl: 'https://files.oaiusercontent.com/file-sFothwnlX87rQv5J2mgy5Snc?se=2024-10-29T00%3A01%3A50Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcbbe8d96-bcc3-4854-8c72-c32e1ffcd8ea.webp&sig=mbcZQbwsx/Z6QoI6dZdZ%2B1QmeGDhZ34961DD8Hcedmk%3D'
      },
      {
        title: 'Certificado de Prácticas Profesionales',
        description: 'Certifica que el estudiante ha completado su período de prácticas como parte de su formación académica.',
        price: 20000,
        rating: 4.8
      },
      {
        title: 'Certificado de Estudio',
        description: 'Acredita que el estudiante está inscrito en la universidad y cursando un programa académico específico. Incluye detalles como la facultad, el nombre del programa, el semestre en curso y, en algunos casos, el horario de clases.',
        price: 15000,
        rating: 4.7
      },
      {
        title: 'Certificado de Distinciones Académicas',
        description: 'Documento que destaca los logros académicos del estudiante, como matrícula de honor, premio a la excelencia académica o cualquier otra distinción otorgada.',
        price: 0,
        rating: 5.0
      },
      {
        title: 'Certificado de Idiomas',
        description: 'Acredita el dominio de un idioma extranjero, basado en pruebas o cursos específicos.',
        price: 18000,
        rating: 4.6
      },
      {
        title: 'Certificado de Participación en Conferencias',
        description: 'Certifica la asistencia y participación en conferencias académicas o profesionales.',
        price: 10000,
        rating: 4.5
      },
      {
        title: 'Certificado de Voluntariado',
        description: 'Acredita la participación en actividades de voluntariado organizadas por la universidad o instituciones asociadas.',
        price: 0,
        rating: 4.9
      },
      {
        title: 'Certificado de Asistencia a Talleres',
        description: 'Certifica la asistencia y participación en talleres académicos o profesionales.',
        price: 12000,
        rating: 4.7
      },
      {
        title: 'Certificado de Proyecto de Investigación',
        description: 'Acredita la participación y contribución en proyectos de investigación realizados en la universidad.',
        price: 25000,
        rating: 4.8
      }
    ],
    diplomas: [
      {
        title: 'Diploma de Honor',
        description: 'Reconocimiento por excelencia académica.',
        price: 0,
        rating: 5.0
      },
      {
        title: 'Diploma de Participación',
        description: 'Acredita la participación en eventos académicos o profesionales.',
        price: 5000,
        rating: 4.7
      },
      {
        title: 'Diploma de Mérito',
        description: 'Reconocimiento por logros destacados en un área específica.',
        price: 0,
        rating: 4.9
      },
      {
        title: 'Diploma de Servicio Comunitario',
        description: 'Acredita la participación en actividades de servicio comunitario.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Diploma de Liderazgo',
        description: 'Reconocimiento por habilidades de liderazgo demostradas en proyectos o actividades.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Diploma de Carrera',
        description: 'Acredita la finalización de un programa de estudios universitarios.',
        price: 0,
        rating: 5.0
      },
      {
        title: 'Diploma de Especialización',
        description: 'Acredita la finalización de un programa de especialización en un área específica.',
        price: 0,
        rating: 4.9
      },
      {
        title: 'Diploma de Doctorado',
        description: 'Acredita la obtención del grado de doctor en una disciplina académica.',
        price: 0,
        rating: 5.0
      },
      {
        title: 'Diploma de Maestría',
        description: 'Acredita la obtención del grado de maestro en una disciplina académica.',
        price: 0,
        rating: 4.8
      }
    ],
    careers: [
      {
        title: 'Ingeniería de Sistemas',
        description: 'Programa de estudios en ingeniería de sistemas.',
        price: 50000,
        rating: 4.5,
        generalInfo: 'La Ingeniería de Sistemas se enfoca en el diseño, implementación y gestión de sistemas de información. Los estudiantes aprenderán sobre programación, bases de datos, redes y seguridad informática.',
        subjects: ['Programación', 'Bases de Datos', 'Redes de Computadoras', 'Seguridad Informática'],
        jobOpportunities: 'Los graduados pueden trabajar como desarrolladores de software, administradores de bases de datos, ingenieros de redes y consultores de seguridad informática.'
      },
      {
        title: 'Ingeniería Civil',
        description: 'Programa de estudios en ingeniería civil.',
        price: 50000,
        rating: 4.6,
        generalInfo: 'La Ingeniería Civil se dedica al diseño, construcción y mantenimiento de infraestructuras como carreteras, puentes y edificios. Los estudiantes aprenderán sobre materiales de construcción, mecánica de suelos y gestión de proyectos.',
        subjects: ['Materiales de Construcción', 'Mecánica de Suelos', 'Gestión de Proyectos', 'Estructuras'],
        jobOpportunities: 'Los graduados pueden trabajar como ingenieros de proyectos, gerentes de construcción, consultores de infraestructura y diseñadores estructurales.'
      },
      {
        title: 'Ingeniería Financiera',
        description: 'Programa de estudios en ingeniería financiera.',
        price: 50000,
        rating: 4.7,
        generalInfo: 'La Ingeniería Financiera combina principios de ingeniería y finanzas para resolver problemas financieros complejos. Los estudiantes aprenderán sobre análisis financiero, gestión de riesgos y mercados financieros.',
        subjects: ['Análisis Financiero', 'Gestión de Riesgos', 'Mercados Financieros', 'Modelos Financieros'],
        jobOpportunities: 'Los graduados pueden trabajar como analistas financieros, gestores de riesgos, consultores financieros y gestores de inversiones.'
      },
      {
        title: 'Ingeniería Ambiental',
        description: 'Programa de estudios en ingeniería ambiental.',
        price: 50000,
        rating: 4.8
      },
      {
        title: 'Ingeniería Ambiental',
        description: 'Programa de estudios en ingeniería ambiental.',
        price: 50000,
        rating: 4.8,
        generalInfo: 'La Ingeniería Ambiental se enfoca en la protección del medio ambiente mediante el diseño de soluciones sostenibles. Los estudiantes aprenderán sobre gestión de residuos, tratamiento de aguas y evaluación de impacto ambiental.',
        subjects: ['Gestión de Residuos', 'Tratamiento de Aguas', 'Evaluación de Impacto Ambiental', 'Energías Renovables'],
        jobOpportunities: 'Los graduados pueden trabajar como consultores ambientales, gestores de residuos, ingenieros de tratamiento de aguas y especialistas en energías renovables.'
      },
      {
        title: 'Ingeniería de Telecomunicaciones',
        description: 'Programa de estudios en ingeniería de telecomunicaciones.',
        price: 50000,
        rating: 4.5,
        generalInfo: 'La Ingeniería de Telecomunicaciones se dedica al diseño y gestión de sistemas de comunicación. Los estudiantes aprenderán sobre redes de telecomunicaciones, sistemas inalámbricos y transmisión de datos.',
        subjects: ['Redes de Telecomunicaciones', 'Sistemas Inalámbricos', 'Transmisión de Datos', 'Comunicaciones Digitales'],
        jobOpportunities: 'Los graduados pueden trabajar como ingenieros de telecomunicaciones, consultores de redes, diseñadores de sistemas inalámbricos y especialistas en comunicaciones digitales.'
      },
      {
        title: 'Comunicación Gráfica Publicitaria',
        description: 'Programa de estudios en comunicación gráfica publicitaria.',
        price: 40000,
        rating: 4.7,
        generalInfo: 'La Comunicación Gráfica Publicitaria se enfoca en el diseño visual y la comunicación efectiva. Los estudiantes aprenderán sobre diseño gráfico, publicidad y marketing digital.',
        subjects: ['Diseño Gráfico', 'Publicidad', 'Marketing Digital', 'Comunicación Visual'],
        jobOpportunities: 'Los graduados pueden trabajar como diseñadores gráficos, publicistas, especialistas en marketing digital y consultores de comunicación visual.'
      },
      {
        title: 'Ingeniería Electrónica',
        description: 'Programa de estudios en ingeniería electrónica.',
        price: 50000,
        rating: 4.6,
        generalInfo: 'La Ingeniería Electrónica se enfoca en el diseño y desarrollo de dispositivos electrónicos. Los estudiantes aprenderán sobre circuitos electrónicos, sistemas embebidos y automatización.',
        subjects: ['Circuitos Electrónicos', 'Sistemas Embebidos', 'Automatización', 'Electrónica Digital'],
        jobOpportunities: 'Los graduados pueden trabajar como ingenieros electrónicos, diseñadores de circuitos, desarrolladores de sistemas embebidos y especialistas en automatización.'
      },
      {
        title: 'Comunicación Gráfica Publicitaria',
        description: 'Programa de estudios en comunicación gráfica publicitaria.',
        price: 40000,
        rating: 4.7,
        generalInfo: 'La Comunicación Gráfica Publicitaria se enfoca en el diseño visual y la comunicación efectiva. Los estudiantes aprenderán sobre diseño gráfico, publicidad y marketing digital.',
        subjects: ['Diseño Gráfico', 'Publicidad', 'Marketing Digital', 'Comunicación Visual'],
        jobOpportunities: 'Los graduados pueden trabajar como diseñadores gráficos, publicistas, especialistas en marketing digital y consultores de comunicación visual.'
      },
      {
        title: 'Investigación Criminal',
        description: 'Programa de estudios en investigación criminal.',
        price: 45000,
        rating: 4.7,
        generalInfo: 'La Investigación Criminal se dedica al estudio de técnicas y métodos para resolver crímenes. Los estudiantes aprenderán sobre criminología, técnicas de investigación y análisis forense.',
        subjects: ['Criminología', 'Técnicas de Investigación', 'Análisis Forense', 'Derecho Penal'],
        jobOpportunities: 'Los graduados pueden trabajar como investigadores criminales, analistas forenses, consultores de seguridad y oficiales de policía.'
      },
      {
        title: 'Psicología',
        description: 'Programa de estudios en psicología.',
        price: 45000,
        rating: 4.8,
        generalInfo: 'El programa de Psicología se enfoca en el estudio del comportamiento humano y los procesos mentales. Los estudiantes aprenderán sobre psicología clínica, psicología educativa y psicología organizacional.',
        subjects: ['Psicología Clínica', 'Psicología Educativa', 'Psicología Organizacional', 'Psicología Social'],
        jobOpportunities: 'Los graduados pueden trabajar como psicólogos clínicos, psicólogos educativos, consultores organizacionales y investigadores.'
      }
    ],
    courses: [
      {
        title: 'Curso de Programación',
        description: 'Curso intensivo de programación.',
        price: 15000,
        rating: 4.7
      }
    ],
    grades: [
      {
        title: 'Matemáticas Discretas',
        description: 'Estudio de estructuras matemáticas que son fundamentalmente discretas en lugar de continuas.',
        price: 0,
        rating: 4.5
      },
      {
        title: 'Algoritmos y Estructuras de Datos',
        description: 'Estudio de algoritmos y estructuras de datos fundamentales para la programación.',
        price: 0,
        rating: 4.7
      },
      {
        title: 'Programación Orientada a Objetos',
        description: 'Estudio de los principios de la programación orientada a objetos.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Bases de Datos',
        description: 'Estudio de los sistemas de gestión de bases de datos y su diseño.',
        price: 0,
        rating: 4.6
      },
      {
        title: 'Redes de Computadoras',
        description: 'Estudio de los principios y prácticas de las redes de computadoras.',
        price: 0,
        rating: 4.7
      },
      {
        title: 'Sistemas Operativos',
        description: 'Estudio de los principios y diseño de los sistemas operativos.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Ingeniería de Software',
        description: 'Estudio de los principios y prácticas de la ingeniería de software.',
        price: 0,
        rating: 4.9
      },
      {
        title: 'Inteligencia Artificial',
        description: 'Estudio de los principios y aplicaciones de la inteligencia artificial.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Seguridad Informática',
        description: 'Estudio de los principios y prácticas de la seguridad informática.',
        price: 0,
        rating: 4.7
      },
      {
        title: 'Desarrollo Web',
        description: 'Estudio de los principios y prácticas del desarrollo web.',
        price: 0,
        rating: 4.8
      }
    ],
    theater: [
      {
        title: 'Obra de Teatro',
        description: 'Participación en obra de teatro.',
        price: 10000,
        rating: 4.9
      }
    ],
    tutorials: [
      {
        title: 'Tutorial de Matemáticas',
        description: 'Sesión de tutoría en matemáticas.',
        price: 5000,
        rating: 4.6
      }
    ],
    nivelatorios: [
      {
        title: 'Asesoría Académica',
        description: 'Sesión de asesoría académica.',
        price: 8000,
        rating: 4.8
      },
      {
        title: 'Asesoría en Matemáticas Discretas',
        description: 'Sesión de asesoría en Matemáticas Discretas para resolver dudas y ejercicios.',
        price: 10000,
        rating: 4.8
      },
      {
        title: 'Asesoría en Algoritmos y Estructuras de Datos',
        description: 'Sesión de asesoría en Algoritmos y Estructuras de Datos para mejorar tus habilidades de programación.',
        price: 12000,
        rating: 4.9
      },
      {
        title: 'Asesoría en Programación Orientada a Objetos',
        description: 'Sesión de asesoría en Programación Orientada a Objetos para entender mejor los conceptos y prácticas.',
        price: 11000,
        rating: 4.7
      },
      {
        title: 'Asesoría en Bases de Datos',
        description: 'Sesión de asesoría en Bases de Datos para aprender sobre diseño y gestión de bases de datos.',
        price: 13000,
        rating: 4.8
      },
      {
        title: 'Asesoría en Redes de Computadoras',
        description: 'Sesión de asesoría en Redes de Computadoras para entender los principios y prácticas de las redes.',
        price: 14000,
        rating: 4.6
      },
      {
        title: 'Asesoría en Sistemas Operativos',
        description: 'Sesión de asesoría en Sistemas Operativos para comprender mejor los principios y diseño de los sistemas operativos.',
        price: 12000,
        rating: 4.8
      },
      {
        title: 'Asesoría en Ingeniería de Software',
        description: 'Sesión de asesoría en Ingeniería de Software para aprender sobre los principios y prácticas de la ingeniería de software.',
        price: 15000,
        rating: 4.9
      },
      {
        title: 'Asesoría en Inteligencia Artificial',
        description: 'Sesión de asesoría en Inteligencia Artificial para explorar los principios y aplicaciones de la inteligencia artificial.',
        price: 16000,
        rating: 4.8
      },
      {
        title: 'Asesoría en Seguridad Informática',
        description: 'Sesión de asesoría en Seguridad Informática para entender los principios y prácticas de la seguridad informática.',
        price: 14000,
        rating: 4.7
      },
      {
        title: 'Asesoría en Desarrollo Web',
        description: 'Sesión de asesoría en Desarrollo Web para aprender sobre los principios y prácticas del desarrollo web.',
        price: 13000,
        rating: 4.8
      }
    ],
    diplomados: [
      {
        title: 'Diplomado en Ingeniería de Sistemas',
        description: 'Programa de estudios avanzados en ingeniería de sistemas.',
        price: 30000,
        rating: 4.8
      },
      {
        title: 'Diplomado en Ingeniería Civil',
        description: 'Programa de estudios avanzados en ingeniería civil.',
        price: 30000,
        rating: 4.7
      },
      {
        title: 'Diplomado en Ingeniería Financiera',
        description: 'Programa de estudios avanzados en ingeniería financiera.',
        price: 30000,
        rating: 4.9
      },
      {
        title: 'Diplomado en Ingeniería Ambiental',
        description: 'Programa de estudios avanzados en ingeniería ambiental.',
        price: 30000,
        rating: 4.8
      },
      {
        title: 'Diplomado en Ingeniería de Telecomunicaciones',
        description: 'Programa de estudios avanzados en ingeniería de telecomunicaciones.',
        price: 30000,
        rating: 4.7
      },
      {
        title: 'Diplomado en Ingeniería Electrónica',
        description: 'Programa de estudios avanzados en ingeniería electrónica.',
        price: 30000,
        rating: 4.8
      },
      {
        title: 'Diplomado en Comunicación Gráfica Publicitaria',
        description: 'Programa de estudios avanzados en comunicación gráfica publicitaria.',
        price: 25000,
        rating: 4.7
      },
      {
        title: 'Diplomado en Comunicación Audiovisual',
        description: 'Programa de estudios avanzados en comunicación audiovisual.',
        price: 25000,
        rating: 4.8
      },
      {
        title: 'Diplomado en Derecho',
        description: 'Programa de estudios avanzados en derecho.',
        price: 35000,
        rating: 4.9
      },
      {
        title: 'Diplomado en Investigación Criminal',
        description: 'Programa de estudios avanzados en investigación criminal.',
        price: 35000,
        rating: 4.7
      },
      {
        title: 'Diplomado en Psicología',
        description: 'Programa de estudios avanzados en psicología.',
        price: 35000,
        rating: 4.8
      }
    ],
    teatro: [
      {
        title: 'Información de Teatro',
        description: 'Detalles sobre las obras de teatro y eventos próximos.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Compra de Boletas',
        description: 'Compra tus boletas para las próximas obras de teatro.',
        price: 5000,
        rating: 4.9
      },
      {
        title: 'Taller de Actuación',
        description: 'Participa en nuestro taller de actuación para mejorar tus habilidades.',
        price: 15000,
        rating: 4.7
      },
      {
        title: 'Visita Guiada al Teatro',
        description: 'Conoce la historia y los secretos del teatro con una visita guiada.',
        price: 10000,
        rating: 4.6
      },
    ],
      teatros: [
  {
    title: 'Información de Teatro',
    description: 'Detalles sobre las obras de teatro y eventos próximos.',
    price: 0,
    rating: 4.8
  },
  {
    title: 'Compra de Boletas',
    description: 'Compra tus boletas para las próximas obras de teatro.',
    price: 5000,
    rating: 4.9
  },
  {
    title: 'Taller de Actuación',
    description: 'Participa en nuestro taller de actuación para mejorar tus habilidades.',
    price: 15000,
    rating: 4.7
  },
  {
    title: 'Visita Guiada al Teatro',
    description: 'Conoce la historia y los secretos del teatro con una visita guiada.',
    price: 10000,
    rating: 4.6
  },
],
  asesorias: [
    {
      title: 'Asesoría en Probabilidad y Estadística Aplicada',
      description: 'Teoría de probabilidades, distribuciones estadísticas y análisis de datos, usados en análisis de riesgos y control de calidad.',
      price: 10000,
      rating: 4.8
    },
    {
      title: 'Asesoría en Métodos Numéricos',
      description: 'Solución de problemas matemáticos mediante métodos computacionales, esencial en simulaciones y modelado en ingeniería.',
      price: 12000,
      rating: 4.7
    },
    {
      title: 'Asesoría en Cálculo Diferencial e Integral',
      description: 'Enfocado en el análisis de límites, derivadas, integrales y aplicaciones en problemas de ingeniería.',
      price: 11000,
      rating: 4.9
    },
    {
      title: 'Asesoría en Cálculo Multivariable',
      description: 'Extensión del cálculo en varias dimensiones, aplicable en campos como mecánica, electricidad y electrónica.',
      price: 13000,
      rating: 4.8
    },
    {
      title: 'Asesoría en Álgebra Lineal',
      description: 'Matrices, vectores, espacios vectoriales y transformaciones lineales, útiles en áreas como sistemas de control y procesamiento de señales.',
      price: 14000,
      rating: 4.7
    },
    {
      title: 'Asesoría en Ecuaciones Diferenciales',
      description: 'Resolución de ecuaciones que modelan fenómenos físicos, mecánicos y eléctricos.',
      price: 15000,
      rating: 4.9
    },
  ],
    convenios: [
      {
        title: 'Convenio Sapiencia',
        description: 'Programa de becas y apoyos económicos para estudiantes de Medellín, Colombia, que cubre matrículas y brinda ayudas económicas. Beneficia a estudiantes de instituciones de educación superior públicas y algunas privadas de la ciudad.',
        price: 0,
        rating: 4.9
      },
      {
        title: 'Convenio ICETEX',
        description: 'Permite a estudiantes acceder a créditos educativos y becas para cursar estudios de pregrado o posgrado en universidades nacionales e internacionales. Este convenio suele renovarse para garantizar opciones de financiamiento.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Convenios de Doble Titulación',
        description: 'Acuerdos con universidades extranjeras para que los estudiantes puedan obtener un título en ambas instituciones. Estos convenios benefician programas específicos, especialmente en ingeniería y administración.',
        price: 0,
        rating: 4.7
      },
      {
        title: 'Convenios con Empresas del Sector Productivo',
        description: 'Alianzas con empresas y corporaciones de diversos sectores (tecnología, construcción, energía) que permiten prácticas profesionales, pasantías, y empleo. Ejemplos incluyen empresas como Ecopetrol, EPM, y Google.',
        price: 0,
        rating: 4.8
      },
      {
        title: 'Convenios con la Policía',
        description: 'Convenios específicos con la policía para programas de formación y desarrollo profesional.',
        price: 0,
        rating: 4.6
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