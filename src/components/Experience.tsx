import { motion } from "framer-motion";

const experiences = [
  {
    company: "Vision Valt",
    position: "Machine Learning Intern (Remote)",
    period: "Aug 2024 - Nov 2024",
    description: "Developed an MVP chatbot for personalized travel recommendations, optimizing model efficiency and user engagement using NLP techniques. Integrated Hugging Face models, Spacy, and NLTK to enhance conversational capabilities and deliver natural language understanding and generation.",
  },
  {
    company: "Lorraine Music Academy, Gurugram",
    position: "Full Stack SDE Intern (On-Site)",
    period: "July 2023 - Sept 2023",
    description: "As a Full Stack SDE Intern at Lorraine Music Academy, I optimized server costs by 30% using Jenkins, conducted load testing with Locust, built a Rasa-based conversational AI chatbot, documented system architecture, and developed multiple projects using React, enhancing Learning Management System efficiency and user interaction.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.position}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;