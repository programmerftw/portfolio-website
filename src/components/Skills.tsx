
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

const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
