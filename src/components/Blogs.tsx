import { motion, useAnimationControls } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

const blogs = [
  {
    title: "Trello Migration: From RabbitMQ to Kafka for Better Scalability and Lower Costs",
    excerpt: "Trello’s journey from using RabbitMQ to adopting Kafka, the challenges they faced, and the significant improvements they achieved in terms of scalability, reliability, and cost efficiency.",
    date: "Jan 23, 2025",
    readTime: "3 min read",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1737578135570/30cdabe3-030d-4171-8c41-d329c581df79.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://ujjwal18.hashnode.dev/trello-migration-from-rabbitmq-to-kafka-for-better-scalability-and-lower-costs"
  },
  {
    title: "Understanding the Sidecar Pattern: How Atlassian Reduced Latency by 70%",
    excerpt: "Deep Dive into the Sidecar Pattern, explore how Atlassian used it to reduce latency by 70% in their Tenant Contact Service (TCS)",
    date: "Feb 11, 2025",
    readTime: "5 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfAVqB7OahEobH_T6EjUWP0j7wiQJrrLdfg&s",
    link: "https://ujjwal18.hashnode.dev/understanding-the-sidecar-pattern-how-atlassian-reduced-latency-by-70"
  },
  {
    title: "Implementing Read-Your-Write Consistency in Distributed Databases: A Deep Dive into Bitbucket's Approach",
    excerpt: "Bitbucket, a popular code revisioning tool (similar to GitHub), tackled this problem to scale their database and improve performance. We’ll break down their approach, understand the underlying principles, and see how they implemented Read-Your-Write Consistency in a distributed PostgreSQL setup.",
    date: "March 9, 2025",
    readTime: "5 min read",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1741469299155/3a9fcfad-6d8f-4045-b835-e8392f721696.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://ujjwal18.hashnode.dev/implementing-read-your-write-consistency-in-distributed-databases-a-deep-dive-into-bitbuckets-approach"
  },
  {
    title: "Building Effective Agents: A Comprehensive Guide",
    excerpt: "This blog post will delve into the key concepts, strategies, and best practices for creating robust and efficient AI agents, inspired by the insights from Anthropic's engineering team.",
    date: "March 10, 2025",
    readTime: "4 min read",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1741546255495/5987c21c-7a25-499c-b8c6-7f1193886621.webp?auto=compress,format&format=webp",
    link: "https://chatteronai.hashnode.dev/building-effective-agents-a-comprehensive-guide"
  },
  {
    title: "How LinkedIn Improved Latency by 60%: A Deep Dive into Their Serialisation Strategy",
    excerpt: "LinkedIn, one of the largest professional networking platforms, recently achieved a 60% reduction in latency by making a strategic change in their data serialisation format. ",
    date: "March 18, 2025",
    readTime: "4 min read", 
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1742288877129/fa5906d1-78a7-4ca8-a89e-df77716074af.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://ujjwal18.hashnode.dev/how-linkedin-improved-latency-by-60-a-deep-dive-into-their-serialisation-strategy"
  },
  {
    title: "MCP Servers Explained: HTTPS Protocol for LLMs",
    excerpt: "MCP acts as a universal bridge between AI models and external tools, databases, or APIs",
    date: "March 29, 2025",
    readTime: "4 min read",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1743248364592/24d44bfd-ade5-45e6-b072-50fcae0bd34c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://chatteronai.hashnode.dev/mcp-servers-explained-https-protocol-for-llms"
  },
  {
    title: "Amazon Aurora: A Deep Dive into Cloud-Native Database Architecture",
    excerpt: "Amazon Aurora stands out as a revolutionary system that redefines how relational databases operate at scale.",
    date: "May 18, 2025",
    readTime: "3 min read",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1747509004196/3ea635f4-a4a0-4665-9cc5-2bf4aab4e0be.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://ujjwal18.hashnode.dev/amazon-aurora-a-deep-dive-into-cloud-native-database-architecture"
  }
];

interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <motion.a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-none w-[400px] group"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.article className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[500px] flex flex-col">
        <motion.div 
          className="relative h-48 flex-shrink-0 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-4">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              {blog.date}
            </span>
            <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
              {blog.readTime}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {blog.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow leading-relaxed">
            {blog.excerpt}
          </p>
          <div className="flex items-center text-blue-600 dark:text-blue-400 mt-auto group-hover:translate-x-2 transition-transform duration-300">
            <span className="font-medium mr-2">Read Article</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ArrowUpRight size={20} className="stroke-2" />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </motion.a>
  );
};

const Blogs = () => {
  const controls = useAnimationControls();
  
  useEffect(() => {
    const totalWidth = blogs.length * (400 + 32); // card width + gap
    
    const animateCarousel = async () => {
      await controls.start({
        x: [-100, -totalWidth],
        transition: {
          x: {
            duration: 25,
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
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Decoding Tech: My Senior Engineering Blog Space
        </motion.h2>
        
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={controls}
          >
            {/* First set of blogs */}
            {blogs.map((blog, index) => (
              <BlogCard key={`first-${index}`} blog={blog} />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {blogs.map((blog, index) => (
              <BlogCard key={`second-${index}`} blog={blog} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;