import {
  documentProcessingThumbnail,
  documentProcessingErrorHandlingThumbnail,
  documentProcessingLoggingThumbnail,
  documentProcessingWorkflow,
  documentProcessingWorkflowErrorHandling,
  documentProcessingWorkflowLogging,
} from "./use-cases/document-processing";

import {
  aiVoiceAgentWorkflow,
  aiVoiceAgentWorkflowThumbnail,
} from "./use-cases/ai-voice-agent";

import {
  firecrawlWorkflowMain,
  firecrawlWorkflowSub,
  firecrawlWorkflowMainThumbnail,
  firecrawlWorkflowSubThumbnail
} from "./use-cases/firecrawl";

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
    category: "Document Processing",
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
    category: "Document Processing",
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
    category: "Document Processing",
  },
  {
    id: "ai-voice-agent-workflow",
    excerpt: "Webhook for Retell AI voice interactions",
    description: `An automated workflow for handling inbound lead qualification using an AI voice agent. The workflow captures caller information, extracts key data points, categorizes leads based on predefined criteria, and syncs the data to a centralized database for sales team follow-up.
      The workflow includes integration with Retell AI for voice interactions, n8n for automation, Supabase for database storage, and a dashboard interface for real-time lead monitoring.    
      This workflow is designed to improve lead qualification efficiency, reduce manual data entry, and ensure timely follow-up on high-value prospects.
    `,
    useCaseId: "ai-voice-agent",
    name: "AI Voice Agent Workflow",
    json: aiVoiceAgentWorkflow,
    thumbnail: aiVoiceAgentWorkflowThumbnail,
    date: "2026-03-7",
    category: "AI Voice Agent",
  },
   {
    id: "firecrawl-main-workflow",
    excerpt: "Main workflow for Firecrawl competitor price monitoring",
    description: `An automated workflow for handling inbound lead qualification using an AI voice agent. The workflow captures caller information, extracts key data points, categorizes leads based on predefined criteria, and syncs the data to a centralized database for sales team follow-up.
      The workflow includes integration with Retell AI for voice interactions, n8n for automation, Supabase for database storage, and a dashboard interface for real-time lead monitoring.    
      This workflow is designed to improve lead qualification efficiency, reduce manual data entry, and ensure timely follow-up on high-value prospects.
    `,
    useCaseId: "firecrawl",
    name: "Firecrawl Main Workflow",
    json: firecrawlWorkflowMain,
    thumbnail: firecrawlWorkflowMainThumbnail,
    date: "2026-03-18",
    category: "Firecrawl",
  },
  {
    id: "firecrawl-sub-workflow",
    excerpt: "Sub-workflow for Firecrawl competitor price monitoring",
    description: `An automated workflow for handling inbound lead qualification using an AI voice agent. The workflow captures caller information, extracts key data points, categorizes leads based on predefined criteria, and syncs the data to a centralized database for sales team follow-up.
      The workflow includes integration with Retell AI for voice interactions, n8n for automation, Supabase for database storage, and a dashboard interface for real-time lead monitoring.    
      This workflow is designed to improve lead qualification efficiency, reduce manual data entry, and ensure timely follow-up on high-value prospects.
    `,
    useCaseId: "firecrawl",     
    name: "Firecrawl Sub Workflow",
    json: firecrawlWorkflowSub,
    thumbnail: firecrawlWorkflowSubThumbnail,
    date: "2026-03-18",
    category: "Firecrawl",
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
      excerpt: workflow.excerpt,
      description: workflow.description,
      thumbnail: workflow.thumbnail,
      json: workflow.json,
    }));
};
