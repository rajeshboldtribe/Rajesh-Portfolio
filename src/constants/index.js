import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: 'resume',
    title: 'Resume',
    link: '/Resume.pdf', // Ensure this path points to the correct file in the public folder
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Junior Application Developer",
    company_name: "BoldTribe Innovation Private Limited",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Till Date",
    points: [
      "🚀 Passionate Full-Stack Developer with hands-on experience in building and maintaining Mobile Applications using React Native and related technologies.",
      "📱 Developed smooth and feature-rich mobile apps, including a ticket booking app with event listings, ticket selection, and user authentication for a seamless user experience.",
      "🌐 Also crafted responsive and dynamic web applications, along with admin panels for managing news posts, reviewing advertisements, and overseeing user interactions — putting full control in the hands of admins!",
      "🧭 Implemented complex navigation with React Navigation, ensured state management with React Hooks (like useState, useEffect, useContext), and handled API calls effortlessly using fetch and axios.",
      "🛠️ Focused on writing reusable, maintainable UI components with performance optimization and solid error handling.",
      "💡 Whether it’s posting breaking news, approving content, or managing ads — I’ve built systems that are smooth, scalable, and a joy to use!"
    ],
  },
  {
    title: "Junior Developer",
    company_name: "APIMAN Labs Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2025",
    points: [
      "Developing and maintaining Mobile Applications using React Native and other related technologies.",
      "Implemented complex navigation with React Navigation.",
      "Managed state with React hooks (useState, useEffect, useContext).",
      "Created reusable and maintainable UI components and Handled API fetching with fetch and axios",
      "Ensured robust error handling and performance optimization.",
      "Built a ticket booking app, incorporating features like event listing, ticket selection, and user authentication, providing a complete and user-friendly booking experience."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Naresh I Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Managed state with React hooks (useState, useEffect, useContext).",
      "Created reusable and maintainable UI components and Handled API fetching with fetch and axios",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make an application as beautiful as our product, but Rajesh proved me wrong.",
    name: "Amaresh Pati",
    designation: "Founder & CEO",
    company: "APIMAN Labs Pvt Ltd.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHl3CNeVdWC7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703582444726?e=1736380800&v=beta&t=mF4AHYnnZaD78hB7TqOE4XQg558OebGGqhR8vey8-KM",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajesh does.",
    name: "Abhinav Tripathy",
    designation: "COO",
    company: "APIMAN Labs Private Limited",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFF8QDY-_Qv2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718213467120?e=1736380800&v=beta&t=A55wIL5OcLX5mTRg315HG2meXMmKWnmYbW48GQQS-Xo",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anurag Behera",
    designation: "CTO",
    company: "APIMAN Labs Private Limited",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEed_Itu_0NaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719017802631?e=1736380800&v=beta&t=qLY2dVGDvRH5byS9EOyaqfdt1ebi-kVoFBG_F_UtK9c",
  },
];

const projects = [
  {
    name: "Newztok",
    description:
      "A comprehensive news platform that enables users to post and explore news, while allowing editors and admins to manage journalists, approve content, and publish breaking updates.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      }
    ],
    image: figma,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Management System (TMS)",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: figma,
    source_code_link: "https://github.com/",
  },
  {
    name: "APIMAN Developer Club (ADC)",
    description:
      "Built a ticket booking app, incorporating features like event listing, ticket selection, and user authentication, providing a complete and user-friendly booking experience.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Shopping App (OSA)",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Video Tutorial Library (OVL)",
    description:
      "Understanding how to design a Video Library like YouTube application that allows admin to upload, modify and delete videos. Customer can watch videos after register and login. ",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
