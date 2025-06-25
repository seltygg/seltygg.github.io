
import { ChevronDown, Github, Linkedin, Mail, Code, FileText } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sankalp
            <span className="text-blue-400"> Sikchi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Data Science Enthusiast
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about building innovative solutions with modern technologies. 
            Experienced in web development, machine learning, and data analytics.
          </p>
          
          <div className="mb-8">
            <a
              href="https://drive.google.com/file/d/141kufcgUu0BW4rTLC48Ow9CzrdcXcJJ-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/seltygg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sankalp-sikchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="https://leetcode.com/u/sankalpsikchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Code size={24} className="text-white" />
            </a>
            <a
              href="mailto:sankalpsikchi@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
