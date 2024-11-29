

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            
            Hey, This is Ujjwal Balaji! 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            I'm a 2024 graduate from SRM University, Sonepat, Delhi-NCR with a degree in Computer Science and Engineering (CSE), specializing in Artificial Intelligence and Data Science. I'm passionate about applying AI and data-driven techniques to solve real-world problems. Currently, I'm exploring opportunities in AI, NLP, and Machine Learning, while honing my skills through various full stack projects and contributions.


          </p>
          <a
            href="#experience"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Work Experience
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="Ujjwal.JPG"
            alt="Profile"
            className="rounded-lg w-85 h-85 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;