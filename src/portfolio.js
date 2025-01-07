import file from './files/prabal-raj-resume.pdf';
const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Prabal',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prabal Raj',
  role: 'React Js Developer',
  description: '3.5 years of experience in React JS and front-end development. Proficient in designing user interfaces and building dynamic web apps. Skilled in HTML, CSS, JavaScript, and React libraries. Strong debugging and optimization skills, focused on delivering top-notch user experiences.',
  resume: file,
  social: {
    linkedin: 'https://www.linkedin.com/in/prabal-raj-r-b2ba44204/',
    github: 'https://github.com/PrabalRajRS',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'RealSmart Agent',
    description:
      'This project focuses on the real estate market in the United States which handles the work of a Real Estate Agent',
    stack: ['React', 'Redux', 'React Bootstrap'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'RealSmart Franchise Manager',
    description:
      'This project is specifically designed for the real estate Franchise Managers affiliated with Realsmart to streamline and enhance their workflow.',
    stack: ['React', 'Redux', 'React Bootstrap'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Digital Menu',
    description:
      'This application offers an accessible and economical way for homeless and low-income individuals to obtain food.',
    stack: ['React Ionic', 'TypeScript', 'Context', 'Firebase'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Osool',
    description:
      'This application is designed for individuals and family seeking a partner, Bride, Groom for marriage.',
    stack: ['React Native', 'Redux'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'College ERP',
    description:
      'This application is used for managing and organizing college staffs, Admin, Director, Students data.',
    stack: ['React', 'Redux', 'Material UI', 'Node.js'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Analogyx BI',
    description:
      'This application is used for managing businesses and to analyze and visualize their data in different forms to gain insights and make informed decisions.',
    stack: ['React', 'Redux', 'React Bootstrap', 'Ant design', 'Sockets', 'Luckysheet'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Woodland Warehouse App',
    description:
      'An efficient Warehouse Application to streamline inventory control and logistics, significantly improving operational efficiency and accuracy.',
    stack: ['React Native', 'Redux'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'Redux',
  'React Native',
  'Ionic React',
  'HTML',
  'CSS',
  'JavaScript',
  'SASS',
  'Material UI',
  'React Bootstrap',
  'AntDesign',
  'Node.js',
  'Firebase',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'prabalrajrs@gmail.com',
}

export { header, about, projects, skills, contact }
