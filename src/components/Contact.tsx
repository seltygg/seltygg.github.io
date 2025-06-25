
import { Mail, MapPin, Github, Linkedin, Code } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href="mailto:sankalpsikchi@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    sankalpsikchi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">United States</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-6">
              Connect on Social Media
            </h3>
            
            <div className="space-y-4">
              <a
                href="https://github.com/seltygg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-300 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400 text-sm">@seltygg</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/sankalp-sikchi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Sankalp Sikchi</p>
                </div>
              </a>

              <a
                href="https://leetcode.com/u/sankalpsikchi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-300 group"
              >
                <Code className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                <div>
                  <p className="text-white font-medium">LeetCode</p>
                  <p className="text-gray-400 text-sm">@sankalpsikchi</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-600">
              <p className="text-gray-400 text-center">
                Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2025 Sankalp Sikchi. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
