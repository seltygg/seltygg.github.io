
import { ExternalLink, Github, Globe } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "CodeCrushersDatabase",
      description: "A comprehensive database management system designed for coding challenges and programming competitions. Features include user management, problem categorization, contest scheduling, and performance analytics with real-time leaderboards.",
      technologies: ["Python", "PostgreSQL", "Flask", "SQLAlchemy"],
      githubUrl: "https://github.com/seltygg/CodeCrushersDatabase",
      category: "Backend Development",
      isLive: true
    },
    {
      title: "Custom Web Scraper",
      description: "Advanced web scraping framework capable of extracting structured data from various sources. Implements intelligent rate limiting, proxy rotation, and data validation with support for both static and dynamic content extraction.",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
      githubUrl: "https://github.com/seltygg/custom-scraper",
      category: "Data Engineering"
    },
    {
      title: "Habit Tracker Mobile App",
      description: "A cross-platform mobile application that helps users build and maintain daily habits. Features habit streaks, progress visualization, reminder notifications, and social sharing capabilities with a clean, intuitive interface.",
      technologies: ["React Native", "JavaScript", "AsyncStorage", "Expo"],
      githubUrl: "https://github.com/seltygg/Habit_Tracker_And",
      category: "Mobile Development"
    },
    {
      title: "AI Healthcare Chatbot",
      description: "Intelligent conversational AI system for healthcare assistance powered by natural language processing. Provides symptom assessment, medical information lookup, appointment scheduling, and connects users with healthcare professionals.",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "NLP"],
      githubUrl: "https://github.com/seltygg/HealthCareChatbot",
      category: "AI/ML"
    },
    {
      title: "ReelsApp - Short Video Platform",
      description: "Social media platform for creating and sharing short-form video content. Features include video recording with filters, social interactions (likes, comments, shares), trending algorithms, and user discovery mechanisms.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "FFmpeg"],
      githubUrl: "https://github.com/seltygg/ReelsApp",
      category: "Full Stack Development"
    },
    {
      title: "YouTube Analytics Dashboard",
      description: "Comprehensive analytics platform for YouTube content creators to track channel performance. Provides detailed metrics on views, engagement, subscriber growth, revenue analysis, and content optimization recommendations.",
      technologies: ["Python", "YouTube API", "Plotly", "Streamlit", "Pandas"],
      githubUrl: "https://github.com/seltygg/Youtube-Analytics-MIS-584",
      category: "Data Analytics"
    },
    {
      title: "YouTube Video Summarizer",
      description: "AI-powered tool that generates concise, intelligent summaries of YouTube video content using advanced language models. Extracts key points, timestamps, and provides searchable transcripts for efficient content consumption.",
      technologies: ["Python", "OpenAI API", "Whisper", "Streamlit", "LangChain"],
      githubUrl: "https://github.com/seltygg/YoutubeVideoSummarizerLLM",
      category: "AI/ML"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing development projects, technical skills, and professional experience. Built with modern web technologies featuring responsive design, smooth animations, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/seltygg/seltygg.github.io",
      category: "Frontend Development"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.isLive && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-medium">Live</span>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
