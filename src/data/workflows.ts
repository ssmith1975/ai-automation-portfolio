import placeholder from "@/assets/blog-urban-planning.jpg";

//import documentProcessingWorkflow from "@/data/json-workflows/workflow-document-processing.json";
import documentProcessingThumbnail from "@/assets/workflow-document-processing.png";

//import documentProcessingWorkflowErrorHandling  from "@/data/json-workflows/workflow-document-processing-error-handling.json";
import documentProcessingErrorHandlingThumbnail from "@/assets/workflow-document-processing-error-handling.png";

//import documentProcessingWorkflowLogging  from "./json-workflows/workflow-document-processing-logging.json";
import documentProcessingLoggingThumbnail from "@/assets/workflow-document-processing-logging.png";
import { json } from "react-router-dom";

const documentProcessingWorkflow = "/json-workflows/workflow-document-processing.json";
const documentProcessingWorkflowErrorHandling  = "/json-workflows/workflow-document-processing-error-handling.json";
const documentProcessingWorkflowLogging  = "/json-workflows/workflow-document-processing-logging.json";


export interface Workflow {
  id: string;
  description: string;
  excerpt?: string;
  useCaseId: string;
  name: string;
  json: string;
  thumbnail: string;
}

export const workflows = [
  {
    id: "document-processing-workflow",
    excerpt: "Main workflow for processing",
    description: `Automated document processing workflow that accepts web form submissions from Fillout, extracts key information saves it to Google Sheets, generates PDF proposals using PDF.co, and sends them to clients via Gmail. 


    The workflow also includes error handling with n8n and logging in AirTable, along with Slack notifications for the Sales team.

    `,
    useCaseId: "document-processing",
    name: "Document Processing Workflow",
    json: documentProcessingWorkflow,
    thumbnail: documentProcessingThumbnail,
    date: "2026-02-09",
    category: "Document Processing"
  },
  {
    id: "document-processing-workflow-error-handling",
    excerpt: "Sub-workflow for error handling",
    description: `A sub-workflow that captures error responses from the main document processing workflow, logs them in AirTable, and sends Slack notifications to the Sales team for immediate attention. 
    
    This workflow is designed to ensure that any issues in the document processing flow are quickly identified and addressed, minimizing disruptions and maintaining a smooth client experience.
    `,
    useCaseId: "document-processing",
    name: "Document Processing Workflow with Error Handling",
    json: documentProcessingWorkflowErrorHandling,
    thumbnail: documentProcessingErrorHandlingThumbnail,
    date: "2026-02-09",
    category: "Document Processing"
  },
  {
    id: "document-processing-workflow-logging",
    excerpt: "Sub-workflow for logging",
    description: `A sub-workflow that logs execution data in Google Sheets and sends notifications to the Sales team via Slack. 
    
    This workflow is designed to provide visibility into document processing execution times, statuses, and error types, enabling the Sales team to monitor performance and troubleshoot issues.
    `,
    useCaseId: "document-processing",
    name: "Document Processing Workflow with Logging",
    json: documentProcessingWorkflowLogging,
    thumbnail: documentProcessingLoggingThumbnail,
    date: "2026-02-09",
    category: "Document Processing"
  }
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
      excerpt: workflow.excerpt,
      description: workflow.description,
      thumbnail: workflow.thumbnail,
      json: workflow.json,
    }));
};
