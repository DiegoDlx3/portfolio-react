import { FaGithub } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import { motion } from "framer-motion";

export default function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((projectItem) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          key={projectItem.id}
          className="portfolio__items card card-two"
        >
          <div className="portfolio__img-wrapper">
            <img src={projectItem.img} alt="" className="portfolio__img" />
          </div>
          <span className="portfolio__category text-cs">
            {projectItem.category}
          </span>
          <div className="portfolio__title">{projectItem.title}</div>
          <p className="portfolio__description">{projectItem.description}</p>

          <div className="links">
            <a href="#" className="link">
              <SiOpenproject />
              Project
            </a>
            <a href="#" className="link">
              <FaGithub />
              Code
            </a>
          </div>
        </motion.div>
      ))}
    </>
  );
}