import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Vision Valt",
    position: "Machine Learning Intern",
    location: "Remote",
    period: "Aug 2024 - Nov 2024",
    description: "Developed the MVP of a conversational AI chatbot for personalized travel recommendations, optimizing model efficiency and user engagement using NLP techniques. Integrated Hugging Face models for natural language understanding and generation, enhancing response accuracy and contextual relevance. Leveraged machine learning libraries like SpaCy and NLTK to refine conversational flow and entity recognition, ensuring seamless interactions and an improved user experience.",
    skills: ["Python", "TensorFlow", "Hugging Face", "Spacy", "NLTK"],
    achievements: [
      "Optimized model efficiency by 40% using TensorFlow and Hugging Face models",
      "Enhanced user engagement through personalized travel recommendations",
      "Integrated Spacy and NLTK for natural language understanding and generation"
    ]
  },
  {
    company: "Lorraine Music Academy",
    position: "Full Stack SDE Intern",
    location: "Gurugram, India",
    period: "July 2023 - Sept 2023",
    description: "As a Full Stack SDE Intern at Lorraine Music Academy, I optimised server costs by using Jenkins, conducted load testing with Locust, built a conversational AI chatbot, documented system design architecture, and developed multiple projects using React, enhancing Learning Management System efficiency and user interaction.",
    skills: ["React", "Jenkins", "Rasa AI", "Locust", "Python", "Selenium", "Docker"],
    achievements: [
      "Reduced server costs by 30% by optimizing Jenkins CI/CD master-slave architecture",
      "Conducted load testing with Locust to improve system performance",
      "Developed a conversational AI chatbot using Rasa AI for user interaction"
    ]
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
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
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
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {exp.position}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 gap-2">
                      <Calendar size={16} className="flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 gap-2">
                      <MapPin size={16} className="flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-500/5 dark:from-blue-400/20 dark:to-blue-400/10 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;