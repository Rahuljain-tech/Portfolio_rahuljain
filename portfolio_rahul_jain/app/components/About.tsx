import React from "react";

interface Skill {
  name: string;
  icon?: string; // URL of the image/icon
}

const skills: Skill[] = [
  { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "ShadCN", icon: "https://imgs.search.brave.com/7BwEk3hRk5K421rrxokCMPgdz5ACmVa1iFnEckrfmbA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUxLzEvc2hhZGNu/LXVpLWxvZ28tcG5n/X3NlZWtsb2dvLTUx/OTc4Ni5wbmc" }, // ShadCN
  { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" }, // MySQL
  { name: "Prisma", icon: "https://raw.githubusercontent.com/prisma/prisma/main/docs/static/images/symbols/prisma-favicon.png" }, // Prisma
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-[#050621] py-16 md:py-24">
      <div className="max-w-7xl mx-auto w-[92%] px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-4">
            Skills
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and frameworks I work with to build modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-gray-800/70 text-white py-6 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800"
            >
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-4 object-contain"
                  loading="lazy"
                />
              )}
              <span className="font-medium text-lg text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;