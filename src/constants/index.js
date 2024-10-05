import { image, link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";



export const HERO_CONTENT = `Desenvolvedor Fullstack especialista em back-end com sólida compreensão dos princípios do design de software, estruturas de dados, algoritmos e sistemas distribuído. Com mais de 7 anos de experiência, venho ajudando empresas e pessoas a existirem no mundo digital criando toda sua identidade visual, do zero, passando pela papelaria na criação de ideias, desenvolvendo logotipo, sites (incluindo SEO) e aplicativos. Sempre defendendo e aplicando metodologias ágeis para impulsionar o crescimento dos negócios para oferecerem experiências excecionais ao usuário.`;

export const ABOUT_TEXT = `Através de uma profunda curiosidade sobre como as coisas funcionam e evoluiu para uma carreira na qual me esforço, eu prospero em ambientes colaborativos em uma ampla gama de plataformas, como Scrum e Kanban, para construção de sistemas e promovendo o equilíbrio entre as partes interessadas desde a área de negócios até a engenharia, buscando sempre entregar soluções de excelência que atendam as demandas e evitem o retrabalho. Trabalhei com diversas tecnologias e linguagens como: TypeScript, Javascript, .net, c#, Java, Jest, Node.js, Nest.js, Redis, React.js, Angular, Docker, MySql, Postgres, MongoDB, AWS, Github Actions, CI/CD, GitLab.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Desenvolvedor Full Stack Sênior",
    company: "iNode Inc.",
    description: `Desenvolvimento de uma plataforma cripto de investimentos em Litecoin (LTC). Implementando APIs RESTful, Mult-Sig e integrou com bancos de dados MongoDB. Colaborou com as partes interessadas para definir os requisitos e cronogramas do projeto.`,
    technologies: ["Python", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Desenvolvedor Full Stack",
    company: "Faces e Vozes - Brasil",
    description: `Construção da entidade visual, desde a logo usando programas da Adobe até o site final desenvolvido com React e Next.js. Trabalho realizado com esboços, componentes front-end com APIs do Node.js, otimização de designs responsivos e o desempenho final.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Desenvolvedor Front-End",
    company: "ETEC-SP",
    description: `Responsável pela equipe de TI elaborando aplicativos web usando JavaScript, React.js e Node.js. Projetou e implementou APIs RESTful para comunicação de dados. Colaborou com equipes multifuncionais para entregar produtos de software de alta qualidade dentro do cronograma da instituição.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2018 - 2019",
    role: "Desenvolvedor de Software",
    company: "PagSeguro",
    description: `Responsável para o desenvolvimento de checkout de pagamentos usando JavaScript, React.js e Node.js. Gerenciamento de bancos de dados implementando soluções de armazenamento usando MongoDB.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  { 
    title: "Sistemas Web",
    image: project1,
    description:
      "Criações Web Designer do logotipo até o website, com uma identidade visual própria e otimização SEO para todos os navegadores.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link1:"Visualizar Projetos",
  },
  {
    title: "Aplicativos para Android e IOs",
    image: project2,
    description:
      "Aplicativos para gerenciar tarefas e projetos, com recursos como criação de tarefas, atribuição e acompanhamento de progresso.",
    technologies: ["HTML", "Java", "Angular", "Firebase"],
    link2:"Visualizar Projetos",
  },
  {
    title: "Projetos UX/UI",
    image: project3,
    description:
      "Todos os recursos; Ilustração; Craft; Marketing e Negócios; Fotografia e Vídeo; Design; 3D e Animação; Arquitetura e Espaços; Escrita; Moda; Web e App Design.",
    technologies: ["Design", "Web", "XD", "Figma"],
    link3:"Visualizar Templates",
  },
  {
    title: "Edições para Redes Sociais",
    image: project4,
    description:
      "Criação de reels para Instagram e Youtube, edições de videos com técnicas cinematográficas; geração de imagens em IA no prompt; manipulação de imagens profissionais, com programas como Photoshop, Illustrator, Avid Media Composer, Lightworks, DaVinci.",
    technologies: ["Design", "Photoshop", "Final Cut Pro"],
    link4:"Visualizar Design",
  },
];

export const CONTACT = {
  address: "Localização: Bauru - SP , Brasil ",
  phoneNo: "(14) 99120 - 3571",
  email: "diiegoteodoro@gmail.com",
};







