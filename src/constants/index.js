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
    title: "Portfolio",
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
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "PHP Laravel Developer",
    icon: backend,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  }
  
];

const technologies = [
  {
    name: "Laravel",
    icon: laravel,
    title: "Laravel"
  },
  {
    name: "React JS",
    icon: reactjs,
    title: "React JS"
  },
  {
    name: "Angular JS",
    icon: angular,
    title: "Angular"
  },
  {
    name: "Rest APIs",
    icon: restapi,
    title: "Rest APIs"
  },
  {
    name: "MySQL",
    icon: mysql,
    title: "MySQL"
  },
  {
    name: "Git Github",
    icon: git,
    title: "Git Github"
  },
  {
    name: "Postman",
    icon: postman,
    title: "Postman"
  },
  {
    name: "AWS",
    icon: aws,
    title: "AWS Configration"
  },
  {
    name: "JavaScript",
    icon: javascript,
    title: "JavaScript"
  },
  {
    name: "JQuery",
    icon: jquery,
    title: "jQuery"
  },
  {
    name: "HTML 5",
    icon: html,
    title: "HTML"
  },
  {
    name: "CSS 3",
    icon: css,
    title: "CSS"
  },
  {
    name: "BootStrap",
    icon: bootstrap,
    title: "Bootstrap"
  },
];

const experiences = [
  {
    title: "PHP Laravel Developer",
    company_name: "TRZ Technologies",
    icon: trz,
    iconBg: "#E6DEDD",
    date: "May 2021 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Php/Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing RESTful endpoints, handling authentication and authorization, and ensuring API security.",
    ],
  },
  {
    title: "Laravel Developer & Rest APIs",
    company_name: "Developify Solution",
    icon: devsol,
    iconBg: "#383E56",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Responsible for developing APIs (Application Programming Interfaces) using Laravel's built-in API tools.",
      "As a Laravel developer, optimize the application's performance by identifying and addressing performance bottlenecks.",
      "Develop reusable UI components, manage state, handle data fetching, optimize performance, and ensure code quality in React web applications.",
      "I worked with MySQL or PostgreSQL, to design and create database schemas, write optimized SQL queries, and handle data migration and manipulation. Laravel's ORM tool, Eloquent, will be used for efficient database management.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Clarisync",
    icon: clarisync,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Create dynamic and responsive user interfaces with React, ensuring seamless integration with backend functionalities for optimal user experiences.",
      "Spearhead the end-to-end development process, from conceptualization to deployment, using Laravel for backend logic and RESTful API development.",
      "Design and maintain MySQL databases, implementing efficient schemas and queries to ensure data integrity and scalability of applications.",
      "Develop robust APIs in Laravel, enabling smooth communication between frontend and backend systems, and integrate third-party APIs for enhanced functionality.",
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
    name: "GiftingWave",
    description:
      "An eCommerce admin panel is a web interface for managing an online store. It enables tasks such as adding products, updating prices, processing orders, and monitoring website performance.",
    tags: [
      {
        name: "PHP/Laravel",
      },
      {
        name: "APIs",
      },
      {
        name: "MySQL",
      }
    ],
    image: gifter,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Alhamd Traders",
    description:
      "An eCommerce website enables online shopping, allowing customers to browse, select, and purchase products or services, with features like shopping carts, secure payments, and product listings.",
    tags: [
      {
        name: "Laravel",
      },
      {
        name: "Html & CSS",
      },
      {
        name: "MySQL",
      },
    ],
    image: alhamd,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Palsome",
    description:
      "This website social media platform, offering profile creation, social connections, status updates, media sharing, and a news feed for user interactions, potentially raising legal questions. Same as Facebook",
    tags: [
      {
        name: "Laravel",
      },
      {
        name: "React JS",
      },
      {
        name: "APIs",
      },
      {
        name: "MySQL",
      },
    ],
    image: palsome,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Job Posing",
    description:
      "Revolutionizing job searches with intuitive design, advanced filters, real-time notifications, and simplified application tracking for seamless hiring experiences.",
    tags: [
      {
        name: "Laravel",
      },
      {
        name: "HTML/CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "MySQL",
      },
    ],
    image: jobposting,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Booking App",
    description:
      "Crafting seamless booking experiences with intuitive UI/UX, secure payments, real-time availability checks, and responsive design for optimal user satisfaction.",
    tags: [
      {
        name: "Laravel",
      },
      {
        name: "Angular JS",
      },
      {
        name: "APIs",
      },
      {
        name: "MySQL",
      },
    ],
    image: bookingapp,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Loyalty & Rewards",
    description:
      "Elevate customer loyalty with personalized rewards, exclusive offers, points tracking, and seamless redemption for an enhanced user engagement.",
    tags: [
      {
        name: "Laravel",
      },
      {
        name: "React JS",
      },
      {
        name: "APIs",
      },
      {
        name: "MySQL",
      },
    ],
    image: rewards,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
