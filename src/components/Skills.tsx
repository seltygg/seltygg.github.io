
import { Code, Database, Brain, Globe, Server, Cloud, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Angular"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Django", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Science & AI",
      skills: ["Machine Learning", "TensorFlow", "Pandas", "NumPy", "Data Analysis", "Apache Kafka", "Apache Flink"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CloudFront", "Route53", "EKS", "Flux CD"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Storage",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Amazon RDS", "AWS Glue", "Elasticsearch"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebooks", "Celery", "RabbitMQ", "Airflow", "SwaggerHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills & <span className="text-blue-400">Technologies</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
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
