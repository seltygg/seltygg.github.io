import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
// import { Certifications } from "@/components/Certifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Certifications /> */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;

