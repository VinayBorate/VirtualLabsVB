// import React from "react";

// export const Projects = () => {
//   return <div className=" text-primaryText">Projects</div>;
// };

// export default Projects;

import React from 'react'
import { useSelector } from 'react-redux'
import {motion} from "framer-motion";

const Projects = () => {
  const Projects = useSelector((state) =>state.Projects?.Projects);
  return (
    <div className="w-full py-6 flex items-center justify-center gap-6 flex-warp">
    {Projects && Projects.map((project,index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ))}
      
    </div>
  );
};

const ProjectCard = ({project,index}) =>{

  return (
    <motion.div key={index}
     className="w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4" >
      <div className="bg-primary w-full h-full rounded-md overflow-hidden" style={{overflow:"hidden",height:"100%" }} >
      
      <iframe
                title="Result"
                srcDoc={project.output}
                style={{ border: "non", width: "100%", height: "100%" }}
              />
      </div>
     </motion.div>
  );
};

export default Projects
