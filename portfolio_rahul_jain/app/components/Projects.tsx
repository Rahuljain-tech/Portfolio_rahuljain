// import Image from 'next/image'

// interface Project {
//   id: number
//   title: string
//   description: string
//   image: string
//   repoLink: string
//   demoLink?: string
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Criczzac",
//     description: "Built with React.js, this cricket score board app offers user registration and login. It provides real-time score tracking and correction with an undo feature, including support for bye and leg bye runs. A standout feature is the timeline, showing the last ten balls played and their corresponding scores, offering valuable insights into the match's history.",
//     image: "/assets/jpeg/cricczac.jpg",
//     repoLink: "https://github.com/Rahuljain-tech/Cricket_Scoreboard"
//   },
//   {
//     id: 2,
//     title: "Employee Management System",
//     description: "Our Employee Management System is a robust solution built with Django, offering comprehensive functionalities such as CRUD operations for seamless management of employee records. It features a secure login and signup process leveraging Django's built-in authentication system.",
//     image: "/assets/jpeg/ems.jpg",
//     repoLink: "https://github.com/Rahuljain-tech/EmployeeManagementSystem.git",
//     demoLink: "https://employeemanagementsystem-navi.onrender.com/"
//   },
//   {
//     id: 3,
//     title: "Parking System",
//     description: "It is an automated solution designed to streamline parking facility management, reducing the workload of security guards. It features user-friendly data entry, pass generation, and efficient management with diverse pass types and timestamping.",
//     image: "/assets/jpeg/parking_system.jpg",
//     repoLink: "https://github.com/Rahuljain-tech/Parking-System"
//   }
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-[#1F4068] py-12 md:py-24">
//       <div className="max-w-7xl mx-auto w-[92%]">
//         <h2 className="mb-11 md:mb-8">
//           <span className="block text-4xl uppercase tracking-wider text-center mb-3.5 relative text-white after:content-[''] after:absolute after:top-[calc(100%+1.5rem)] after:h-[5px] after:w-12 after:bg-white after:left-1/2 after:-translate-x-1/2 after:rounded-md">
//             Projects
//           </span>
//         </h2>
//         <div className="h-[400px] overflow-y-auto">
//           {projects.map((project) => (
//             <div key={project.id} className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-2 md:gap-10 mb-11 md:mb-8 md:text-left text-center">
//               <div className="overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={`${project.title} Screenshot`}
//                   className="w-full block object-cover rounded"
//                   width={600}
//                   height={400}
//                   loading="lazy"
//                 />
//               </div>
//               <div className="py-2 flex justify-center flex-col md:items-start items-center">
//                 <h3 className="font-bold text-2xl md:text-[2.8rem] mb-2 md:mb-4 text-white">
//                   {project.demoLink ? (
//                     <a href={project.demoLink} target="_blank" rel="noreferrer">
//                       {project.title}
//                     </a>
//                   ) : (
//                     project.title
//                   )}
//                 </h3>
//                 <p className="text-lg md:text-[1.8rem] text-gray-400 max-w-[60rem] leading-7 mb-3 md:mb-6">
//                   {project.description}
//                 </p>
                
//                   <a href={project.repoLink}
//                   className="bg-[#0062b9] text-white uppercase tracking-wider inline-block font-bold rounded shadow-lg hover:-translate-y-1 transition-transform duration-300 py-1.5 px-5 text-base"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Repository
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Criczzac",
    description:
      "Built with React.js, this cricket score board app offers user registration and login. It provides real-time score tracking and correction with an undo feature, including support for bye and leg bye runs. A standout feature is the timeline, showing the last ten balls played and their corresponding scores, offering valuable insights into the match's history.",
    image: "/assets/jpeg/cricczac.jpg",
    repoLink: "https://github.com/Rahuljain-tech/Cricket_Scoreboard",
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "Our Employee Management System is a robust solution built with Django, offering comprehensive functionalities such as CRUD operations for seamless management of employee records. It features a secure login and signup process leveraging Django's built-in authentication system.",
    image: "/assets/jpeg/ems.jpg",
    repoLink: "https://github.com/Rahuljain-tech/EmployeeManagementSystem.git",
    demoLink: "https://employeemanagementsystem-navi.onrender.com/",
  },
  {
    id: 3,
    title: "Parking System",
    description:
      "It is an automated solution designed to streamline parking facility management, reducing the workload of security guards. It features user-friendly data entry, pass generation, and efficient management with diverse pass types and timestamping.",
    image: "/assets/jpeg/parking_system.jpg",
    repoLink: "https://github.com/Rahuljain-tech/Parking-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#1F4068] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white text-4xl font-bold uppercase tracking-wider mb-12 relative">
          Projects
          <span className="block h-[5px] w-12 bg-white mx-auto mt-3 rounded-md"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#162447] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-48 object-cover"
                width={600}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-gray-400 text-sm mb-5">{project.description}</p>
                <a
                  href={project.repoLink}
                  className="inline-block bg-[#0062b9] text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-[#004a91] transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}