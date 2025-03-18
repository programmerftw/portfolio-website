import { Github, Twitter, Linkedin, FileDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleResumeDownload = () => {
    const resumeUrl = '/Ujjwal resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer"
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ujjwal Balaji
        </motion.h1>
        <div className="flex items-center gap-2 sm:gap-6">
          <motion.button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <motion.button
            onClick={handleResumeDownload}
            className="flex items-center gap-1 sm:gap-2 bg-blue-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown size={16} className="hidden sm:block" />
            <span>Resume</span>
          </motion.button>
          <div className="flex gap-2 sm:gap-4">
            <motion.a 
              href="https://github.com/programmerftw" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a 
              href="https://x.com/UjjwalCodes" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ujjwal-balaji-a26711254/" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;