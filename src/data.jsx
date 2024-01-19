import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Golu",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kumar",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bharat",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Current Address : ",
    description: "Gurgaon",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8210169217",
  },

  {
    id: 8,
    title: "Email: ",
    description: "golukumarsingh7323@gmail.com",
  },

  {
    id: 9,
    title: "Address  : ",
    description: "West Champaran(Bihar)",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "0+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "5+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: ".... - PRESENT",
    title: "************* <span> ***** </span>",
    desc: "*************,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: ".... - ....",
    title: "************** <span> ******** </span>",
    desc: "*************",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: ".... - ....",
    title: "*********** <span> ********* </span>",
    desc: "***************",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019-2023",
    title:
      "Engineering Degree <span> Maharshi Dayanand University Rohatak(Haryana) </span>",
    desc: "B tech in Computer Science & Engineering Score of 72%",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017-2019",
    title: "10+2(Science) <span> BSEB University(patna) </span>",
    desc: "Science Stream(pcm) Score of 70%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "10th<span> Raj High School(Patna) </span>",
    desc: "Total Score of 69%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "70",
  },

  {
    id: 3,
    title: "Bootstrap",
    percentage: "75",
  },

  {
    id: 4,
    title: "Javascript",
    percentage: "69",
  },

  {
    id: 5,
    title: "React js",
    percentage: "55",
  },

  {
    id: 6,
    title: "Java",
    percentage: "57",
  },

  {
    id: 7,
    title: "C++",
    percentage: "65",
  },

  {
    id: 8,
    title: "Node js",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
