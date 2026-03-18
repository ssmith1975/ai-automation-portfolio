import {
  documentProcesingContent,
  documentProcessingCoverImage,
} from "./use-cases/document-processing";

import {
  aiVoiceAgentContent,
  aiVoiceAgentCoverImage,
} from "./use-cases/ai-voice-agent";

import {
  firecrawlContent,
  firecrawlCoverImage,
} from "./use-cases/firecrawl";


export interface UseCasePost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export const useCasePosts: UseCasePost[] = [
  {
    id: "document-processing",
    title: "Document Processing with Workflow Automations",
    excerpt:
      "Using workflow automations to reduce pain-points, improve procesing efficiency, and reducing costs",
    content: documentProcesingContent,
    date: "2026-02-09",
    category: "USE CASES",
    image: documentProcessingCoverImage,
  },
    {
      id: "ai-voice-agent",
      title: "AI Voice Agent for Customer Support",
      excerpt:
        "Implementing an AI voice agent to handle customer inquiries, provide support, and improve customer satisfaction.",
      content: aiVoiceAgentContent,
      date: "2026-03-05",
      category: "USE CASES",
      image: aiVoiceAgentCoverImage,
    },
  {
    id: "firecrawl",
    title: "Automated Competitor Price Monitoring & Intelligence",
    excerpt:
      "Implementing an automated system to track competitor pricing and analyze market positioning.",
    content: firecrawlContent,
    date: "2026-03-18",
    category: "USE CASES",
    image: firecrawlCoverImage,
  }

];
