import Image from "next/image";
import experienceData from "../data/experiences.json";

const Experience = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>

      {experienceData.map((experience) => (
        <div key={experience.id} className="flex items-center mb-8">
          {/* <Image
            src={experience.logo}
            alt={experience.company}
            className="w-12 h-12 mr-4"
            width={48}
            height={48}
          /> */}
          <div>
            <h2 className="font-bold">{experience.position}</h2>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-gray-600">{experience.duration}</p>
            <p className="text-gray-600">{experience.location}</p>
            <p className="text-gray-600">
              Skills: {experience.skills.join(" · ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
