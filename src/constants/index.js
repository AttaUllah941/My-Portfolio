import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  jquery,
  laravel,
  angular,
  mysql,
  postman,
  git,
  restapi,
  aws,
  trz,
  clarisync,
  devsol,
  gifter,
  alhamd,
  palsome,
  bookingapp,
  jobposting,
  rewards,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Projects",
  },
  {
    id: "skills",
    title: "My Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: angular,
  },
  {
    title: "React Developer",
    icon: reactjs,
  }
  
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
    title: "Angular (v14-v17)"
  },
  {
    name: "TypeScript",
    icon: javascript,
    title: "TypeScript"
  },
  {
    name: "NgRx",
    icon: reactjs,
    title: "NgRx"
  },
  {
    name: "RxJS",
    icon: reactjs,
    title: "RxJS"
  },
  {
    name: "Angular Material",
    icon: bootstrap,
    title: "Angular Material"
  },
  {
    name: "Tailwind CSS",
    icon: css,
    title: "Tailwind CSS"
  },
  {
    name: "Rest APIs",
    icon: restapi,
    title: "RESTful APIs"
  },
  {
    name: "GraphQL",
    icon: restapi,
    title: "GraphQL"
  },
  {
    name: "MySQL",
    icon: mysql,
    title: "MySQL"
  },
  {
    name: "MongoDB",
    icon: mysql,
    title: "MongoDB"
  },
  {
    name: "Git Github",
    icon: git,
    title: "Git & GitHub"
  },
  {
    name: "AWS",
    icon: aws,
    title: "AWS (S3)"
  },
  {
    name: "HTML 5",
    icon: html,
    title: "HTML5"
  },
  {
    name: "CSS 3",
    icon: css,
    title: "CSS3"
  },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "Clarisync",
    icon: clarisync,
    iconBg: "#383E56",
    date: "03/2024 – Present",
    points: [
      "Develop reusable components, modules, directives, and pipes using Angular to enhance application efficiency and developer productivity.",
      "Implement application routing and performance optimization strategies, resulting in faster load times and a smoother user experience.",
      "Collaborate with cross-functional teams to analyze requirements, design solutions, and ensure the timely delivery of high-quality features.",
      "Enhance application robustness by implementing centralized HTTP interceptors for error handling, skeleton loaders, and spinners.",
    ],
  },
  {
    title: "Angular Developer",
    company_name: "Welltime Ltd.",
    icon: devsol,
    iconBg: "#E6DEDD",
    date: "05/2023 – 02/2024",
    points: [
      "Led the successful migration of the entire application to the latest Angular 16, improving performance and aligning with modern standards.",
      "Engineered a secure and modular authentication system and built a library of reusable UI components to accelerate development.",
      "Managed complex application state effectively using NgRx and implemented reactive forms for robust data handling and validation.",
      "Improved UI/UX and code quality by actively participating in and leading peer code reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vendor Portal",
    description:
      "Developed a vendor management portal for a multinational construction organization, enabling vendors to manage profiles, access resources, and communicate efficiently.",
    tags: [
      {
        name: "Angular 17",
      },
      {
        name: "TypeScript",
      },
      {
        name: "PHP/Laravel",
      },
      {
        name: "MySQL",
      }
    ],
    image: bookingapp,
    source_code_link: "https://github.com",
  },
  {
    name: "CBRE Horizon Center",
    description:
      "Contributed to a high-level, multi-vendor web application for construction management, building and maintaining front-end features with a focus on performance and scalability.",
    tags: [
      {
        name: "Angular 16",
      },
      {
        name: "TypeScript",
      },
      {
        name: "PHP/Laravel",
      },
      {
        name: "MySQL",
      },
    ],
    image: jobposting,
    source_code_link: "https://github.com",
  },
  {
    name: "AppointMentor",
    description:
      "Worked on a service-matching platform, developing front-end components and features to facilitate user connections and appointments with seamless user experience.",
    tags: [
      {
        name: "Angular 14",
      },
      {
        name: ".NET Core",
      },
      {
        name: "MySQL",
      },
    ],
    image: palsome,
    source_code_link: "https://github.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
