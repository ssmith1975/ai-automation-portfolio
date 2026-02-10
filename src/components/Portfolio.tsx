import project1 from "@/assets/document-processing-800x600.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import UseCaseList from "./UseCaseList";
import { useCasePosts } from "@/data/useCasePosts";
const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "DOCUMENT PROCESSING",
      url: "/use-cases/document-processing",
      description: "Using workflow automations to reduce pain-points, improve procesing efficiency, and reducing costs"
    },
    {
      image: project2,
      title: "AI WEBSITE GENERATION",
      url: "/",
      description: "Vibe-coding in Vercel to create dynamic web experiences that blend form and function"
    },
    {
      image: project3,
      title: "KNOWLEDGE BASE CHATBOT",
      url: "/",
      description: "Creating intelligent chatbots powered by AI to enhance customer interactions and support"
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              USE CASES
            </h3>
          </div>
          
          <div className="space-y-32">
            <UseCaseList useCaseList={useCasePosts} />
            {/* {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      <a href={project.url} className="hover:underline">
                        Details
                      </a>
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))} */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;