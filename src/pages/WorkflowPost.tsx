'use client';
//import { promises as fs } from 'fs';
import { useParams, Link, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import "react-medium-image-zoom/dist/styles.css";
import { N8nDemoComponent } from "@/components/ui/n8n-demo-component";
import { getWorkflowById, getWorkflowsByUseCaseId } from "@/data/workflows";
import RenderMarkdown from "@/components/ui/render-markdown";
import { useState, useEffect } from "react";

const WorkflowPost = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const workflow = getWorkflowById(id);
  const relatedWorkflows = getWorkflowsByUseCaseId(workflow.useCaseId).filter(
    (wf) => wf.id !== workflow.id,
  );

  const [jsonPath, setJsonPath] = useState(workflow.json);
  const [json, setJson] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch the file using its public URL path
      const res = await fetch(jsonPath);
      const jsonData = await res.json();
      //console.log("Fetched JSON data:", jsonData); // Log the fetched JSON data
       window.scrollTo(0, 0);
      setJson(jsonData);
    }
    fetchData();
  }, [location.pathname, jsonPath]);

  const setWorkflowJson = (jsonPath) => {
    setJsonPath(jsonPath);
  };

  if (!workflow) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-8">
                Post Not Found
              </h1>
              <Link
                to="/"
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                ← BACK TO WORKFLOWS
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/workflows"
              className="inline-block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
            >
              ← BACK TO WORKFLOWS
            </Link>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center text-minimal text-muted-foreground space-x-4 mb-6">
                <span className="bg-muted px-3 py-1 text-foreground">
                  {workflow.category}
                </span>
                <span>{workflow.date}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-6">
                {workflow.name}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {workflow.description.split("\n").map((line, index) => (
                  <RenderMarkdown key={index} line={line} />
                ))}
              </p>
            </div>

            {/* Featured Image */}

            <div className="mt-20 w-full">
              <N8nDemoComponent
                title="Document Processing Workflow Demo"
                workflowJson={json}
              />
            </div>

            {/* Related Workflows */}
            <div className="mt-10">
              <h3 className="text-2xl font-light text-architectural mb-8">
                Related Workflows
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedWorkflows &&
                  relatedWorkflows.map((workflow) => (
                    <Link
                      key={workflow.id}
                      to={'/workflows/' + workflow.id}
                      onClick={() =>  window.location.reload()}                     
                      className="group"
                    >
                      <div className="w-full h-48 mb-4 overflow-hidden">
                        <img
                          src={workflow.thumbnail}
                          alt={workflow.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h4 className="text-lg font-light text-architectural group-hover:text-muted-foreground transition-colors duration-300 mb-2">
                        {workflow.name}
                      </h4>
                      <p className="text-minimal text-muted-foreground">
                        {workflow.excerpt}
                      </p>
                    </Link>
                  ))}

                {!relatedWorkflows ||
                  (relatedWorkflows.length === 0 && (
                    <p className="text-muted-foreground">
                      No related workflows found.
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );


  

}
export default WorkflowPost;
