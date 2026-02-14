import { documentProcessingWorkflow } from "./json-workflows/workflow-document-processing";
import documentProcessingThumbnail from "@/assets/blog-urban-planning.jpg"

export interface Workflow {
  id: string;
  description: string;
  useCaseId: string;
  name: string;
  json: any;
  thumbnail: string;
}

export const workflows = [
  {
    id: "document-processing-workflow",
    description: "Automated document processing workflow",
    useCaseId: "document-processing",
    name: "Document Processing Workflow",
    json: documentProcessingWorkflow,
    thumbnail: documentProcessingThumbnail,
  },
];

export const getWorkflowById = (id: string) => {
  return workflows.find((workflow) => workflow.id === id);
};

export const getWorkflowsByUseCaseId = (useCaseId: string) => {
  return workflows
    .filter((workflow) => workflow.useCaseId === useCaseId)
    .map((workflow) => ({
      id: workflow.id,
      name: workflow.name,
      description: workflow.description,
      thumbnail: workflow.thumbnail,
    }));
};
