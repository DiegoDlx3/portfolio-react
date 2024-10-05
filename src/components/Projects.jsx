import { span } from "framer-motion/client";
import{PROJECTS} from "../constants" 
import {motion} from "framer-motion"


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projetos</motion.h2>
        {PROJECTS.map((project, index,) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className="w-full lg:w-1/4">
              
              
              <img  
              src={project.image} 
              width={200} 
              height={200}
              alt={project.title} 
              className="mb-6 rounded"
              />
              
              </motion.div>
              <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration: 1}}

              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neural-400">{project.description}</p>
              {project.technologies.map((tech, index) =>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                
                
              ))}
              <div className="w-full max-w-xl lg:w-3/4">
              <a href="/projetcs/projects.html" className="mb-4 text-neural-900"><h6 className="my-5  text-left text-2xl text-red-900">{project.link1}</h6></a>
              <a href="/projetcs/projects.html" className="mb-4 text-neural-400"><h6 className="my-5  text-left text-2xl text-red-900">{project.link2}</h6></a>
              <a href="/templates/templates.html" className="mb-4 text-neural-400"><h6 className="my-5  text-left text-2xl text-red-900">{project.link3}</h6></a>
              <a href="/social_media/social_media.html" className="mb-4 text-neural-400"><h6 className="my-5  text-left text-2xl text-red-900">{project.link4}</h6></a>
              </div>
              </motion.div>
              
        </div>
       ))}
    </div>
  );
};

export default Projects;