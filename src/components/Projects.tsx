
import { motion, useAnimationControls } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';


const projects = [
  {
    title: "Exam Time: Real Time Table Generator",
    description: "A dynamic time table generation system designed to eliminate scheduling conflicts between faculties availability and room bookings in school/college.",
    image: "/Exam-TIme.png",
    technologies: ["Next.js", "Shadcn", "Framer Motion", "Python", "Pandas"],
    github: "https://github.com/programmerftw/Exam-Scheduler",
    demo: "https://exam-scheduler-nu.vercel.app/"
  },
  {
    title: "Machine Learning Roadmap Guide",
    description: "A comprehensive ML guide website featuring a 6-month roadmap, curated resources, and study materials to kickstart their ML journey.",
    image: "/ML.png",
    technologies: ["React", "Shadcn", "Framer Motion", "TypeScript"],
    github: "https://github.com/programmerftw/ML-Roadmap",
    demo: "https://ml-roadmap-nine.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Website you are currently watching.",
    image: "/Portfolio.png",
    technologies: ["React", "Framer Motion", "Shadcn", "TypeScript"],
    github: "https://github.com/programmerftw/portfolio-website",
    demo: "https://portfolio-website-khaki-sigma.vercel.app/"
  },
  {
    title: "Iphone 15 Pro Landing Page",
    description: "Recreated version of Apple's Iphone 15 pro landing page, combining GSAP animations and ThreeJS animations.",
    image: "/Apple.png",
    technologies: ["React", "Javascript", "GSAP", "ThreeJS"],
    github: "https://github.com/programmerftw/iphone15pro-landingpage",
    demo: "https://iphone15pro-landingpage.vercel.app/"
  },
  {
    title: "Used Car Price Prediction with Regression",
    description: "Machine learning model to predict used car prices using Random Forest and Linear Regression. Leveraged scikit-learn for model implementation and Matplotlib for data visualization. Analyzed the model's performance to improve prediction accuracy.",
    image: "Used_Car.png",
    technologies: ["Python", "Matplotlib", "Scikit-learn", "Pandas"],
    github: "https://github.com/programmerftw/Used_Car_Price_Prediction",
    demo: "https://colab.research.google.com/github/programmerftw/Used_Car_Price_Prediction/blob/main/used_cars_price_detect.ipynb"
  }
];

const Projects = () => {
  const controls = useAnimationControls();
  
  useEffect(() => {
    const totalWidth = projects.length * (400 + 32); // card width + gap
    
    const animateCarousel = async () => {
      await controls.start({
        x: [-100, -totalWidth],
        transition: {
          x: {
            duration: 20,
            ease: "linear",
          },
        },
      });
      
      // Instantly reset position without animation
      controls.set({ x: -100 });
      
      // Restart the animation
      animateCarousel();
    };
    
    animateCarousel();
  }, [controls]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          From Ideas to Execution: My Projects
        </motion.h2>
        
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={controls}
          >
            {/* First set of projects */}
            {projects.map((project, index) => (
              <ProjectCard key={`first-${index}`} project={project} />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {projects.map((project, index) => (
              <ProjectCard key={`second-${index}`} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Extracted ProjectCard component for cleaner code
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="flex-none w-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;