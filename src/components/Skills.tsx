import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      },
      {
        name: "Next.js",
        logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      {
        name: "Prisma",
        logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg"
      },
      {
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
      },
      {
        name: "Express",
        logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
      },
      {
        name: "FastAPI",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg"
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      {
        name: "TensorFlow",
        logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
      },
      {
        name: "spaCy",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg"
      },
      {
        name: "NLTK",
        logo: "/logos/nltk.png"
      },
      {
        name: "Rasa",
        logo: "/logos/rasa.svg"
      },
      {
        name: "NumPy",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"
      },
      {
        name: "Langraph",
        logo: "/logos/langgraph.png"
      }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
      },
      {
        name: "Git",
        logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      },
      {
        name: "Jenkins",
        logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
      },
      {
        name: "Postman",
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
      },
      {
        name: "Locust",
        logo: "/logos/locust-logo.png"
      }
    ]
  }
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;