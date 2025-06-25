import { Mail, Linkedin, Github, Send } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formRef.current!,
        "YOUR_USER_ID" // replace with your EmailJS user/public key
      );
      setSent(true);
      (formRef.current as HTMLFormElement).reset();
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Info and Contact Cards */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              I'm always interested in discussing data projects, collaboration opportunities, or potential roles where I can contribute my expertise in data engineering, machine learning, and analytics.
            </p>
            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-center gap-4 bg-slate-800/70 rounded-xl p-6 border border-slate-700">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:sankalpsikchi@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    sankalpsikchi@gmail.com
                  </a>
                </div>
              </div>
              {/* LinkedIn Card */}
              <div className="flex items-center gap-4 bg-slate-800/70 rounded-xl p-6 border border-slate-700">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sankalp-sikchi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    linkedin.com/in/sankalp-sikchi
                  </a>
                </div>
              </div>
              {/* GitHub Card */}
              <div className="flex items-center gap-4 bg-slate-800/70 rounded-xl p-6 border border-slate-700">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <a href="https://github.com/seltygg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    github.com/seltygg
                  </a>
                </div>
              </div>
              {/* LeetCode Card */}
              <div className="flex items-center gap-4 bg-slate-800/70 rounded-xl p-6 border border-slate-700">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <SiLeetcode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">LeetCode</p>
                  <a href="https://leetcode.com/u/sankalpsikchi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    leetcode.com/u/sankalpsikchi
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="bg-slate-900/70 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Send a Message</h3>
            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-colors duration-300 shadow-md disabled:opacity-60"
                disabled={sending}
              >
                <Send className="w-6 h-6" />
                {sending ? "Sending..." : "Send Message"}
              </button>
              {sent && <p className="text-green-400 text-center mt-2">Message sent successfully!</p>}
              {error && <p className="text-red-400 text-center mt-2">{error}</p>}
            </form>
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
