//'use client';

import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import "react-medium-image-zoom/dist/styles.css";
import { N8nDemoComponent } from "@/components/ui/n8n-demo-component";
import { getWorkflowById, getWorkflowsByUseCaseId } from "@/data/workflows";
import RenderMarkdown from "@/components/ui/render-markdown";
import { useState, useEffect } from "react";

const WorkflowPost = () => {
  const params = useParams();
  const id = params?.id;

  // state
  const [workflow, setWorkflow] = useState<any | null>(null);
  const [relatedWorkflows, setRelatedWorkflows] = useState<any[]>([]);
  const [selectedWorkflowJson, setSelectedWorkflowJson] = useState<any | null>(null);

  // load workflow when id changes (safe when id is undefined)
  useEffect(() => {
    if (!id) {
      setWorkflow(null);
      setRelatedWorkflows([]);
      setSelectedWorkflowJson(null);
      return;
    }

    const fetched = getWorkflowById(id) || null;
    setWorkflow(fetched);

    if (fetched) {
      const flows = getWorkflowsByUseCaseId(fetched.useCaseId).filter((wf) => wf.id !== fetched.id);
      setRelatedWorkflows(flows);
      setSelectedWorkflowJson(fetched.json ?? null);
    } else {
      setRelatedWorkflows([]);
      setSelectedWorkflowJson(null);
    }
  }, [id]);


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

    function handleRelatedWorkflowClick(json: any): void {
        setSelectedWorkflowJson(json);
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
              to="/use-cases"
              className="inline-block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
            >
              ← BACK TO WORKFLOWS
            </Link>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center text-minimal text-muted-foreground space-x-4 mb-6">
                <span className="bg-muted px-3 py-1 text-foreground">
                  {workflow?.category ?? ""}
                </span>
                <span>{workflow?.date ?? ""}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-6">
                {workflow?.name ?? ""}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {(workflow?.description ?? "").split("\n").map((line: string, index: number) => (
                  <RenderMarkdown key={index} line={line} />
                ))}
              </p>
            </div>

            {/* Featured Image */}
            <div className="mt-20 w-full min-h-screen">
              {selectedWorkflowJson && (
                <N8nDemoComponent title="Document Processing Workflow Demo" workflowJson={selectedWorkflowJson} />
              )}
            </div>

            {/* Related Workflows */}
            <div className="mt-20">
              <h3 className="text-2xl font-light text-architectural mb-8">
                Related Workflows
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {(relatedWorkflows || []).map((relatedWorkflow) => (
                  <Link
                    key={relatedWorkflow.id}
                    to={`/workflows/${relatedWorkflow.id}`}
                    className="group"
                    onClick={() => handleRelatedWorkflowClick(relatedWorkflow.json)}
                  >
                    <div className="w-full h-48 mb-4 overflow-hidden">
                      <img
                        src={relatedWorkflow.thumbnail}
                        alt={relatedWorkflow.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h4 className="text-lg font-light text-architectural group-hover:text-muted-foreground transition-colors duration-300 mb-2">
                      {relatedWorkflow.name}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {relatedWorkflow.excerpt}
                    </p>
                  </Link>
                ))}

                {relatedWorkflows.length === 0 && (
                  <p className="text-muted-foreground">No related workflows found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WorkflowPost;
