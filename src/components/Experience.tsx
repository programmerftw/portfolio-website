

const experiences = [
  {
    company: "Vision Valt",
    position: "Machine Learning Intern",
    period: "Aug 2024 - Present",
    description: "Developed an MVP chatbot for personalized travel recommendations, optimizing model efficiency and user engagement using NLP techniques. Integrated Hugging Face models, Spacy, and NLTK to enhance conversational capabilities and deliver natural language understanding and generation.",
  },
  {
    company: "Lorraine Music Academy",
    position: "Full Stack SDE Intern",
    period: "July 2023 - Sept 2023",
    description: "As a Full Stack SDE Intern at Lorraine Music Academy, I optimized server costs by 30% using Jenkins, conducted load testing with Locust, built a Rasa-based conversational AI chatbot, documented system architecture, and developed multiple projects using React, enhancing Learning Management System efficiency and user interaction.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.position}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;