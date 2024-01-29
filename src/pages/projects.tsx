import Image from "next/image";
import projectsData from "../data/projects.json";
import { FaCode } from "react-icons/fa";
import DevIcon from "devicon-react-svg";

import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiPhpmyadmin,
  SiPostman,
  SiSwift,
} from "react-icons/si"; // Example icons for different languages
import { IconType } from "react-icons";

const languageIcons: { [key: string]: IconType } = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Python: SiPython,
  MongoDB: SiMongodb,
  React: SiReact,
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  NextJS: SiNextdotjs,
  NodeJS: SiNodedotjs,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Express: SiExpress,
  PHPMyAdmin: SiPhpmyadmin,
  Postman: SiPostman,
  Swift: SiSwift,
};

// const languageIcons: { [key: string]: { icon: IconType; color: string } } = {
//   HTML: { icon: SiHtml5, color: 'blue' },
//   CSS: { icon: SiCss3, color: 'green' },
//   JavaScript: { icon: SiJavascript, color: 'yellow' },
//   Python: { icon: SiPython, color: 'red' },
//   Django: { icon: SiDjango, color: 'purple' },
// };

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      {/* devicon */}
      <DevIcon icon="python" style="plain" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white shadow-lg p-4 rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
              width={720}
              height={400}
            />
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <div className="flex gap-2 mb-2">
              {/* {project.languages.map((language) => (
                <span
                  key={language}
                  className="bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded mr-2"
                >
                  {language}
                </span>
              ))} */}

              {project.languages.map((language) => {
                const IconComponent = languageIcons[language] || FaCode;
                return (
                  <span
                    key={language}
                    className="bg-gray-200 text-gray-800 px-3 py-2 text-sm rounded"
                  >
                    <IconComponent />
                  </span>
                );
              })}
            </div>
            <div className="flex justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Version
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
