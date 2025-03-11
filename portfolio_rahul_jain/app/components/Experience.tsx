import React from "react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  color: string; // Unique color for each timeline point
  image: string;
}

const experiences: Experience[] = [
  {
    role: "SDE Intern",
    company: "Chainscore Labs",
    duration: "Nov 2024 - Present",
    description:
      "Developed and maintained scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality solutions and improved system performance by 30%.",
    color: "bg-blue-600",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQE-LQatPCYSWQ/company-logo_200_200/company-logo_200_200/0/1722721962649/chainscorehq_logo?e=1749686400&v=beta&t=-WfrwAvpluVkBWbN_VAlz_8hD5LoQnnp7qS-KzNP7oQ",
  },
  {
    role: "SDE Intern",
    company: "Kotak Mahindra Bank",
    duration: "Apr 2024 - Aug 2024",
    description:
      "Created interactive and user-friendly web interfaces with React.js and Tailwind CSS. Spearheaded the redesign of the company website, increasing user engagement by 40%.",
    color: "bg-green-600",
    image:
      "https://media.licdn.com/dms/image/v2/C510BAQF-GW7Nv4Reuw/company-logo_200_200/company-logo_200_200/0/1630581793286/kotak_mahindra_bank_logo?e=1749686400&v=beta&t=qkXgls0ghtKSkjfndToPlq_5yWdG0ZDcslAL4ofplEc",
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="bg-[#1F1468] py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto w-[92%] relative">
        <h2 className="mb-11 md:mb-8">
          <span className="block text-4xl uppercase tracking-wider text-center mb-3.5 relative text-white after:content-[''] after:absolute after:top-[calc(100%+1.5rem)] after:h-[5px] after:w-12 after:bg-white after:left-1/2 after:-translate-x-1/2 after:rounded-md">
            Experience
          </span>
        </h2>

        {/* Central Line */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 h-[90%] w-1 bg-gray-600"></div>

        <div className="relative mt-30">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-10 flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row md:items-center"
                  : "md:flex-row-reverse md:items-center"
              }`}
            >
              {/* Image Section */}
              <div className={`flex  items-center md:w-1/2`}>
                <img
                  src={exp.image}
                  alt={`${exp.company} Logo`}
                  className={`rounded-full border-4 shadow-lg ${
                    exp.color 
                  } ${index%2 === 0 ? "ml-106" : "ml-10"}`}
                  height={100}
                  width={100}
                />
              </div>

              {/* Timeline Card */}
              <div
                className={`p-6 bg-gray-800 rounded-lg shadow-lg md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="block text-gray-400 text-sm">
                  {exp.company} | {exp.duration}
                </span>
                <p className="mt-3 text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
