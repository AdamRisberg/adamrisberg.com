import React from "react";

const resumeWorkHistory = [
  {
    title: "Freelance Web Development, 2016-Present",
    description:
      "Full-stack development, specializing in React and Node based websites."
  },
  {
    title: "Freelance Programmer & Computer Technician, 2011-2018",
    description:
      "Custom programming (Windows software), static websites, computer repair, and technical support."
  }
];

const resumeWebProjects = [
  {
    title: "Only Music Folders Online Store",
    link: {
      label: "www.onlymusicfolders.com",
      href: "https://www.onlymusicfolders.com"
    },
    description:
      "Installed, configured, and customized OpenCart. Wrote extensions and tweaked source code to handle product option requirements, fit their workflow, and allow integration with the company's business software. (OpenCart, PHP, MYSQL)"
  },
  {
    title: "Deer River Folio Website",
    link: {
      label: "www.deerriverfolio.com",
      href: "https://www.deerriverfolio.com"
    },
    description:
      "Redesign of an old site to make it mobile friendly with improved look, user experience, and maintainability. (React & Static Rendering)"
  },
  {
    title: "React Express Cart",
    link: {
      label: "www.cart.adamrisberg.com",
      href: "https://www.cart.adamrisberg.com"
    },
    description:
      "An open source React and Express based shopping cart system. Similar to Magento, OpenCart, etc. (React, Express, MongoDB)"
  },
  {
    title: "React Input Position",
    link: {
      label: "adamrisberg.github.io/react-input-position",
      href: "https://adamrisberg.github.io/react-input-position"
    },
    description:
      "An open source React component that decorates it's children with mouse/touch position tracking and a status toggle fired by click/gesture events. (React)"
  },
  {
    title: "React Image Magnifiers",
    link: {
      label: "adamrisberg.github.io/react-image-magnifiers",
      href: "https://adamrisberg.github.io/react-image-magnifiers"
    },
    description:
      "An open source collection of responsive, image magnifying React components with mouse and touch interactions. (React)"
  }
];

const resumeWindowsProjects = [
  {
    title: "Deer River Folio Business Software",
    description:
      "Business software including accounting, payroll, orders, inventory, etc. Worked closely with the company to automate everything possible and tailor the software to their desired workflow. (C#, WPF, MYSQL)"
  },
  {
    title: "Deer River Folio Time Clock Software",
    description:
      "Windows software allowing employees to clock in/out and request vacation days. (C#, WPF, MYSQL)"
  }
];

const resumeEducation = [
  {
    title: "College",
    description:
      "AA - Digital Animation Production - University of Advancing Technologies"
  },
  {
    title: "Highschool",
    description: "Deer River High School"
  }
];

const resumePersonalInfo = [
  {
    title: "Location",
    description: "Copperas Cove, TX"
  },
  {
    title: "E-mail",
    description: <a href="mailto:myniztan@hotmail.com">myniztan@hotmail.com</a>
  },
  {
    title: "Portfolio",
    description: <a href="http://www.adamrisberg.com">www.adamrisberg.com</a>
  },
  {
    title: "LinkedIn",
    description: (
      <a href="https://www.linkedin.com/in/adamrisberg">
        linkedin.com/in/adamrisberg
      </a>
    )
  },
  {
    title: "Github",
    description: (
      <a href="https://github.com/adamrisberg">github.com/adamrisberg</a>
    )
  }
];

const resumeSkills = [
  {
    title: "Front End",
    description: "Javascript, React, Redux, HTML, CSS"
  },
  {
    title: "Back End",
    description: "Node, Express"
  },
  {
    title: "Databases",
    description: "MYSQL, MongoDB"
  },
  {
    title: "Other",
    description: "Jest, C#, WPF"
  }
];

const resumeTools = [
  {
    title: "Editors / IDEs",
    description: "VS Code, Visual Studio"
  },
  {
    title: "Version Control",
    description: "Git, Github"
  },
  {
    title: "Terminals",
    description: "Powershell, Bash"
  },
  {
    title: "Multimedia",
    description: "Photoshop, Illustrator, Premiere, After Effects, Maya"
  }
];

export default {
  description:
    "Full-stack Web Developer, specializing in React and Node based web apps with a background in windows software development. A hard worker who is always excited to learn and face new challenges.",
  mainSections: [
    {
      title: "WORK HISTORY",
      skills: resumeWorkHistory
    },
    {
      title: "WEB PROJECTS",
      skills: resumeWebProjects
    },
    {
      title: "WINDOWS PROJECTS",
      skills: resumeWindowsProjects
    },
    {
      title: "EDUCATION",
      skills: resumeEducation
    }
  ],
  sideBarSections: [
    {
      title: "PERSONAL INFO",
      skills: resumePersonalInfo
    },
    {
      title: "SKILLS",
      skills: resumeSkills
    },
    {
      title: "TOOLS",
      skills: resumeTools
    }
  ]
};
