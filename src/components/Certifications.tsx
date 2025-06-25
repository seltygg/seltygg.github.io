
import { Award, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      name: "Add Your Certification Here",
      issuer: "Certification Provider",
      date: "Month Year",
      link: "#",
      description: "Brief description of the certification"
    }
    // You can add more certifications here following the same structure
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          <span className="text-blue-400">Certifications</span> & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-400 mr-3" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <p className="text-gray-300 mb-3">{cert.description}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
        
        {certifications.length === 1 && certifications[0].name === "Add Your Certification Here" && (
          <div className="text-center mt-8">
            <p className="text-gray-400">
              You can update your certifications by editing the Certifications component.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
