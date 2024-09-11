import Items from "./Items";
import List from "./List";
import { projects } from "./data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const navCategories = [
  "all",
  ...new Set(projects.map((project) => project.category))
];

export default function Portfolio() {
  const [projectItems, setProjectItems] = useState(projects);
  const [categories, setCategories] = useState(navCategories);

  function filterItems(category) {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (project) => project.category === category
    );

    setProjectItems(newProjectItems);
  }

  return (
    <section className="portfolio section" id="work">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__title text-cs">Portfolio</h2>
        <p className="section__subtitle">
          My <span>Work</span>
        </p>
      </motion.div>

      <div>
        <List categories={categories} filterItems={filterItems} />
        <div className="portfolio__container container grid">
          <Items projectItems={projectItems} />
        </div>
      </div>
    </section>
  );
}

