import { services } from "./data";
import {motion} from "framer-motion"


export default function Services() {
  return ( <div className="border-b border-neutral-900 pb-4">
    <div className="services-container">
      {services.map((service) => (
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        key={service.id} className="service-card">
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y: -100}}
          transition={{duration:0.5}}
          className="icon">{service.icon}</motion.div>
          <motion.h2 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: 100}}
          transition={{duration: 1}}
          className="service-title">{service.title}</motion.h2>
          <p className="service-description">{service.description}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
}