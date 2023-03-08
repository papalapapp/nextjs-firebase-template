import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Accordion({ index, expanded, setExpanded, accordion }) {
  const isOpen = index === expanded;
  console.log(isOpen);
  return (
    <>
      <motion.header
        initial={false}
        // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : index)}
        className="w-100 p-4 bg-gray-100 rounded-lg mt- mb-4 relative cursor-pointer"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-6 h-6 absolute right-4"
        >
          <ChevronDownIcon />
        </motion.div>
        {accordion.header}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", scale: 1 },
              collapsed: { height: 0, scale: 0.5 },
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pb-4">{accordion.answer}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Accordion;
