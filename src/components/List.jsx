import { useState } from "react";
import { motion } from "framer-motion";

export default function List({ categories, filterItems }) {
  const [active, setActive] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio__list"
    >
      {categories.map((category, index) => (
        <button
          className={`${
            active === index
              ? "active-work portfolio__list-item text-cs"
              : "portfolio__list-item text-cs"
          }`}
          key={index}
          onClick={() => {
            setActive(index);
            filterItems(category);
          }}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}