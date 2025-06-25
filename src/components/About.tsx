
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const About = () => {
  const competencies = {
    "name": "Sankalp Sikchi",
    "role": "Full Stack Developer & Data Professional",
    "skills": ["Python", "Pytorch", "JAX", "React", "JavaScript", "TypeScript", "Django", "Node.js","Cursor", "Flask", "FastAPI", "HTML", "CSS", "Tailwind CSS", "Bootstrap","Lovable","Vercel","Replit"],
    "tools": ["AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Apache Kafka"],
    "expertise": ["Machine Learning", "Data Analytics", "System Architecture", "Cloud Computing"],
    "education": ["Masters in MIS", "Computer Engineering"],
    "contact": {
      "email": "sankalpsikchi@gmail.com",
      "github": "https://github.com/seltygg",
      "linkedin": "https://www.linkedin.com/in/sankalp-sikchi/"
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Photo and Core Philosophy */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <Avatar className="w-64 h-64 border-4 border-blue-400">
                <AvatarImage 
                  src="/lovable-uploads/8f68b2c4-440d-4527-9c43-2a7ebf7ef134.png" 
                  alt="Sankalp Sikchi"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl bg-blue-400 text-white">HS</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Core Philosophy</h3>
              <blockquote className="text-gray-300 italic leading-relaxed">
                "The code you write makes you a programmer. The code you delete makes you a good one. 
                The code you don't have to write makes you a great one."
              </blockquote>
            </div>

            {/* JSON Competencies Display */}
            <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm">
              <div className="text-green-400 mb-2"># Professional Profile</div>
              <div className="text-gray-300">
                <div className="text-yellow-400">candidate</div> = {'{'}
                <div className="ml-4">
                  <div><span className="text-red-400">"name"</span>: <span className="text-green-300">"{competencies.name}"</span>,</div>
                  <div><span className="text-red-400">"role"</span>: <span className="text-green-300">"{competencies.role}"</span>,</div>
                  <div><span className="text-red-400">"skills"</span>: {JSON.stringify(competencies.skills, null, 2).replace(/"/g, '"').split('\n').map((line, i) => (
                    <div key={i} className={i === 0 ? "inline" : "ml-4"}>
                      <span className="text-green-300">{line}</span>
                    </div>
                  ))},</div>
                  <div><span className="text-red-400">"tools"</span>: {JSON.stringify(competencies.tools, null, 2).replace(/"/g, '"').split('\n').map((line, i) => (
                    <div key={i} className={i === 0 ? "inline" : "ml-4"}>
                      <span className="text-green-300">{line}</span>
                    </div>
                  ))}</div>
                </div>
                {'}'}
              </div>
              <div className="mt-4 text-blue-400">
                print("Ready to drive value through technology!")
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies 
                and data science. Currently pursuing my Master's in Management Information Systems 
                at the University of Arizona while building innovative projects that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience spans across web development, machine learning, and data analytics. 
                I enjoy working with cutting-edge technologies and am always eager to learn new 
                skills and take on challenging projects that make a meaningful impact.
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Professional Experience</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-blue-400 pl-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Graduate Teaching Assistant</h4>
                      <p className="text-blue-400 font-medium">University Of Arizona</p>
                    </div>
                    <span className="text-gray-400 text-sm">Jan 2024 – Dec 2024</span>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Delivered comprehensive instruction on Business Intelligence and Database Management to 200+ graduate students, achieving 95% student satisfaction rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Mentored students in advanced analytics projects, resulting in 40% improvement in project completion rates and enhanced understanding of data engineering concepts</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-400 pl-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Software Engineer</h4>
                      <p className="text-blue-400 font-medium">Innovaccer (Remote)</p>
                    </div>
                    <span className="text-gray-400 text-sm">Sep 2022 – June 2023</span>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Enhanced system performance by identifying the right balance between horizontal and vertical scaling strategies, leading to a 30% improvement in resource utilization and handling a significant increase in traffic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Architected and deployed scalable microservices on AWS infrastructure, handling 5M+ API requests daily with 99.95% availability using CloudFront and Route53</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Revamped REST APIs for User, Communication and Workflow microservices increasing database performance by 20%, Documented APIs on SwaggerHub following OAS standards for existing microservices</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-400 pl-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Software Engineer</h4>
                      <p className="text-blue-400 font-medium">AlefEdge, Pune</p>
                    </div>
                    <span className="text-gray-400 text-sm">Jan 2020 – Aug 2022</span>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Orchestrated and deployed microservices for accounts, order, and sim provisioning using EKS, Terraform and FluxCD, integrating Kong as an API gateway with predefined ingress rules for external vendors reducing 60% code for authentication in application.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Built Python automation frameworks that streamlined data processing workflows, reducing manual effort by 80% and improving data accuracy by 95%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Spearheaded the migration of MongoDB to a hybrid architecture combining MongoDB and Amazon RDS, designing efficient data pipelines using Alembic/Prisma, ensuring zero downtime, and reducing query response time by 40%.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span>Developed full-stack applications using Angular and Django framework, serving 10K+ daily active users with seamless user experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-400 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Master's in Management Information Systems</h4>
                      <p className="text-blue-400">University of Arizona, Tucson, AZ</p>
                    </div>
                    <span className="text-gray-400 text-sm">Aug 2023 – Dec 2024</span>
                  </div>
                  <p className="text-gray-300">GPA: 3.82/4 | Focus: Data Mining, Deep Learning, Enterprise Database Management</p>
                </div>
                
                <div className="border-l-2 border-blue-400 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Bachelor's in Computer Engineering</h4>
                      <p className="text-blue-400">Vishwakarma Institute Of Technology, Pune, MH</p>
                    </div>
                    <span className="text-gray-400 text-sm">Aug 2016 – May 2020</span>
                  </div>
                  <p className="text-gray-300">GPA: 8.38/10 | Focus: Data Structures, Data Science, Distributed Systems</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white">United States</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white">4+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects</span>
                  <span className="text-white">10+ Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-white">Full Stack & AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
